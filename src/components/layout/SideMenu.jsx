import React from 'react';
import SideMenuInner from './SideMenuInner';

function SideMenu() {
  return (
    <aside
      className="
        hidden
        lg:block
        lg:col-span-2
        sticky
        top-20
        p-4
        h-24
      "
    >
      <SideMenuInner />
    </aside>
  );
}

export default SideMenu;
