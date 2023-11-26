import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineGTranslate } from 'react-icons/md';
import { setLocale } from '../../states/locale/action';

function LangToggler() {
  const { locale = 'id' } = useSelector((states) => states);

  const dispatch = useDispatch();

  const onChangeLocale = (loc) => {
    dispatch(setLocale(loc));
    localStorage.setItem('locale', loc);
  };

  useEffect(() => {
    if (localStorage.locale) {
      dispatch(setLocale(localStorage.locale));
    } else {
      localStorage.setItem('locale', 'id');
    }
  }, [dispatch]);

  return (
    <button type="button" title="Toggle Theme" aria-label="Toggle Theme" className="block w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-900 text-center mr-2" onClick={() => onChangeLocale(locale === 'id' ? 'en' : 'id')}>
      <MdOutlineGTranslate className="inline" />
    </button>
  );
}

export default LangToggler;
