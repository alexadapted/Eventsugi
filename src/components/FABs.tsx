import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import { FC, Fragment, useState } from 'react'
import { BsTelephone, BsWhatsapp } from 'react-icons/bs'

export const FABs: FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-4">
        <Link
          href="tel:+971558605027"
          className="rounded-full border-2 border-white bg-black p-2 text-white transition-all duration-300 hover:bg-gray-600/30"
          onClick={e => {
            if (window.innerWidth > 1023) {
              e.preventDefault()
              setIsVisible(true)
            }
          }}
        >
          <BsTelephone size={38} />
        </Link>
        <Link
          href="https://wa.me/+971558605027"
          className="rounded-full bg-green-500 p-2"
        >
          <BsWhatsapp fill="white" size={44} />
        </Link>
      </div>

      <Transition appear show={isVisible} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsVisible(false)}
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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h5"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Call Us
                  </Dialog.Title>
                  <div className="mt-5">
                    <p className="flex gap-2 text-sm text-gray-500">
                      <span className="rounded-full bg-gray-300 p-2">
                        <BsTelephone />
                      </span>
                      <span className="text-xl text-gray-900">
                        +971 558605027
                      </span>
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-black hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setIsVisible(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
