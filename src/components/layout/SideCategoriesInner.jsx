import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useLocale from '../../hooks/useLocale';
import CategoryItem from '../global/CategoryItem';

function SideCategoriesInner() {
  const {
    threads = [],
    filterThreadCategory = '',
  } = useSelector((states) => states);

  const { txtCategories, txtShowAllCategories, txtShowLessCategories } = useLocale();

  const [isShowAllCategory, setIsShowAllCategory] = useState(false);

  const categories = [];
  threads.forEach((thread) => {
    if (thread.category) {
      thread.category.split(' ').forEach((cat) => {
        const catIndex = categories.findIndex((c) => c.cat === cat);
        if (catIndex < 0) {
          categories.push({
            id: categories.length + 1,
            cat,
            threadId: [thread.id],
          });
        } else {
          const threadInCat = categories[catIndex].threadId.findIndex((t) => t === thread.id);
          if (threadInCat < 0) {
            categories[catIndex].threadId.push(thread.id);
          }
        }
      });
    }
  });

  return (
    <>
      <h4
        className="
          text-lg
          font-bold
          mb-4
        "
      >
        {txtCategories}
      </h4>
      <ul>
        {categories
          .sort((a, b) => b.threadId.length - a.threadId.length)
          .slice(0, isShowAllCategory ? categories.length : 5).map((cat) => (
            <li
              key={cat.id}
            >
              <CategoryItem
                name={cat.cat}
                isActive={filterThreadCategory === cat.cat}
              />
            </li>
          ))}
        {
          categories.length > 5 ? (
            <li>
              <button
                type="button"
                className="
                  py-2
                  text-neutral-500
                "
                onClick={() => setIsShowAllCategory((val) => !val)}
              >
                {isShowAllCategory ? txtShowLessCategories : txtShowAllCategories}
              </button>
            </li>
          ) : ''
        }
      </ul>
    </>
  );
}

export default SideCategoriesInner;
