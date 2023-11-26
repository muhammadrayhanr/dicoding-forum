/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ContentState, convertFromHTML, convertToRaw, EditorState,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import { useNavigate } from 'react-router-dom';
import SideMenu from '../components/layout/SideMenu';
import useInput from '../hooks/useInput';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Button from '../components/global/Button';
import { asyncAddThread } from '../states/threads/action';
import useLocale from '../hooks/useLocale';

function CreateThread() {
  const {
    authUser = null,
  } = useSelector((states) => states);

  const {
    txtTitleTooLong, txtTitle, txtPublish, txtCategories,
  } = useLocale();

  const navigate = useNavigate();

  useEffect(() => {
    if (!authUser) {
      navigate('/');
    }
  }, [authUser]);

  if (!authUser) {
    return null;
  }

  const dispatch = useDispatch();
  const [title, setTitle] = useInput('');
  const [category, setCategory] = useInput('');
  const [body, setBody] = useState(
    EditorState.createWithContent(
      ContentState.createFromBlockArray(
        convertFromHTML('Content'),
      ),
    ),
  );

  const onEditorStateChange = (val) => {
    setBody(val);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (title.length > 255) {
      alert(txtTitleTooLong);
      return null;
    }
    const bodyParsed = draftToHtml(convertToRaw(body.getCurrentContent()));
    dispatch(asyncAddThread({ body: bodyParsed, category, title }));
    navigate('/');
    return true;
  };

  const viewCategory = category.split(' ');
  return (
    <div
      className="
        grid grid-cols-12 gap-4
      "
    >
      <SideMenu />
      <section
        className="
          col-span-12
          lg:col-span-7
        "
      >
        <div
          className="
            p-4
            rounded-lg
            bg-white
            dark:bg-neutral-900
            border
            dark:border-neutral-800
          "
        >
          <form onSubmit={onSubmit}>
            <textarea
              className="
                mt-4
                px-4 py-2
                border-0
                focus:ring-neutral-900
                focus:border-neutral-900 block w-full
                shadow-sm
                rounded-md
                dark:bg-neutral-900
                text-3xl
                font-bold
              "
              onChange={setTitle}
              placeholder={txtTitle}
            />
            <div className="mt-4">
              <div className="px-4">
                {
                  category !== '' ? viewCategory.map((cat, index) => (
                    <span
                      key={`${cat}${index}`}
                      className="
                        text-sm
                        text-neutral-500
                      "
                    >
                      #
                      {cat}

                      {' '}
                    </span>
                  )) : ''
                }
              </div>
              <input
                type="text"
                className="
                  t-form
                  border-0
                  bg-white
                  dark:bg-neutral-900
                "
                onChange={setCategory}
                placeholder={txtCategories}
              />
            </div>
            <div className="mt-8">
              <Editor
                editorState={body}
                onEditorStateChange={onEditorStateChange}
                toolbar={{
                  options: ['inline', 'list', 'textAlign'],
                }}
              />
            </div>

            <div className="mt-8">
              <Button
                btnType="submit"
                btnText={txtPublish}
                btnSize="md"
                btnClass=" mt-2 "
              />
            </div>

          </form>
        </div>
      </section>
    </div>
  );
}

export default CreateThread;
