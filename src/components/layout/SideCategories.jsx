import React from 'react';
import SideCategoriesInner from './SideCategoriesInner';

function SideCategories() {
  return (
    <aside
      className="
        col-span-3
        hidden
        lg:block
      "
    >
      <SideCategoriesInner />
    </aside>
  );
}

export default SideCategories;
