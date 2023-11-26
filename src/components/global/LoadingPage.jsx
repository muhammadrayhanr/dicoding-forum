import { Transition } from '@headlessui/react';
import React from 'react';
import LogoBrand from './LogoBrand';

export default function LoadingPage() {
  return (
    <div className="fixed z-50 top-0 min-h-screen w-full bg-white dark:bg-black dark:text-slate-200">
      <Transition
        appear
        show
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="max-w-screen-lg mx-auto">
          <p className="pt-48 animate-pulse  flex justify-center ">
            <LogoBrand />
            <span className="pl-2 pt-2">Sedang memuat...</span>
          </p>
        </div>
      </Transition>
    </div>
  );
}
