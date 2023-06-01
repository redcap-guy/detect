import React from "react";
import { Link } from "react-router-dom";
import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const LabReport = () => {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const handleDelete = () => {
    setOpen(false);
  };
  return (
    <main className="flex-1 p-2 overflow-y-auto">
      <div className="mx-3">
        <h2 className="text-3xl font-medium font-bold text-slate-700 mb-2">
          Reports
        </h2>
        <div className="text-sm font-sans text-gray-500 mb-8">
          <Link to={"/hdoc"} className="underline hover:text-indigo-700">
            Home
          </Link>
          /
          <Link to={"/reports"} className="underline hover:text-indigo-700">
            Reports
          </Link>
          / Laboratories reports
        </div>
      </div>
      <Fragment>
        <div className="grid grid-rows-3 grid-flow-col gap-4 mb-8 mx-6">
          <div className="w-full px-5 py-3 bg-white rounded-md shadow">
            <div className="flex justify-between">
              <div className="text-2xl font-sans text-slate-800 truncate">
                Laboratories reports
              </div>
            </div>
            <hr className="my-4 mx- border-slate-200" />
            <div className="grid grid-cols-4 gap-4">
              <div className="w-full px-4 py-5 bg-white rounded-md shadow-2xl hover:bg-indigo-400/30">
                <div
                  onClick={() => setOpen(true)}
                  className="inline text-xl font-sans text-slate-800"
                >
                  First lab
                </div>
                <div className="mx-4 space-y-2"></div>
              </div>
              <div className="w-full px-4 py-5 bg-white rounded-md shadow-2xl hover:bg-indigo-400/30">
                <div className="inline text-xl font-sans text-slate-800">
                  First lab
                </div>
                <div className="mx-4 space-y-2"></div>
              </div>
              <div className="w-full px-4 py-5 bg-white rounded-md shadow-2xl hover:bg-indigo-400/30">
                <div className="inline text-xl font-sans text-slate-800">
                  First lab
                </div>
                <div className="mx-4 space-y-2"></div>
              </div>
              <div className="w-full px-4 py-5 bg-white rounded-md shadow-2xl hover:bg-indigo-400/30">
                <div className="inline text-xl font-sans text-slate-800">
                  First lab
                </div>
                <div className="mx-4 space-y-2"></div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 backdrop-blur-md bg-white/30 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <ExclamationTriangleIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Delete account
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Are you sure you want to delete this account? All of
                            his data will be permanently removed. This action
                            cannot be undone.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </main>
  );
};

export default LabReport;
