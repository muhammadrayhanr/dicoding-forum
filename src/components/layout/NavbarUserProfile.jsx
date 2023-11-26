import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  BsArrowBarRight,
} from 'react-icons/bs';
import { asyncUnsetAuthUser } from '../../states/authUser/action';

function NavbarUserProfile() {
  const {
    authUser = null,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  const onLogout = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      buttonsStyling: true,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Keluar?',
        text: 'Yakin ingin Keluar?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#333333',
        confirmButtonText: 'Ya',
        cancelButtonText: 'Tidak',
      })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(asyncUnsetAuthUser());
        }
      });
  };

  // const onLogout = () => {
  //   dispatch(asyncUnsetAuthUser());
  // };

  if (!authUser) {
    return (
      <Link
        to="/login"
        title="Login"
        className="
        py-2
      "
      >
        Masuk
      </Link>
    );
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          <img
            src={authUser.avatar}
            alt={authUser.name}
            className="
              w-8 h-8 rounded-full
            "
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y rounded-md bg-white dark:bg-neural-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  type="button"
                  className={`${active ? 'bg-indigo-500 text-white' : 'text-neutral-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={onLogout}
                >
                  <BsArrowBarRight className="mr-2" />
                  Keluar
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default NavbarUserProfile;
