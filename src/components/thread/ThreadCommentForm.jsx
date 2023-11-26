import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ContentState, convertFromHTML, convertToRaw, EditorState,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import { useSelector, useDispatch } from 'react-redux';
import useLocale from '../../hooks/useLocale';
import Button from '../global/Button';
import { asyncAddComment } from '../../states/threadDetail/action';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function ThreadCommentForm({ threadId }) {
  const {
    authUser = null,
  } = useSelector((states) => states);

  const { txtSend } = useLocale();

  const dispatch = useDispatch();

  const [body, setBody] = useState(
    EditorState.createWithContent(
      ContentState.createFromBlockArray(
        convertFromHTML('Comment'),
      ),
    ),
  );

  const onEditorStateChange = (val) => {
    setBody(val);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const bodyParsed = draftToHtml(convertToRaw(body.getCurrentContent()));
    dispatch(asyncAddComment(threadId, bodyParsed));
  };

  return (
    <>
      <div className="p-2">
        <img
          src={authUser.avatar}
          alt=""
          className="
            w-8 h-8
            rounded-full
          "
        />
      </div>
      <form className="flex-1 p-2" onSubmit={onSubmit}>
        <div>
          <Editor
            editorState={body}
            onEditorStateChange={onEditorStateChange}
            toolbar={{
              options: ['inline', 'list', 'textAlign'],
            }}
          />
        </div>
        <Button
          btnType="submit"
          btnText={txtSend}
          btnClass=" mt-2 "
        />
      </form>
    </>
  );
}

ThreadCommentForm.propTypes = {
  threadId: PropTypes.string.isRequired,
};

export default ThreadCommentForm;
