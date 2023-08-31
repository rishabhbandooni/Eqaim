/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
'use client'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
// const sortOptions = [
//   { name: 'Most Popular', href: '#', current: true },
//   { name: 'Best Rating', href: '#', current: false },
//   { name: 'Newest', href: '#', current: false },
//   { name: 'Price: Low to High', href: '#', current: false },
//   { name: 'Price: High to Low', href: '#', current: false },
// ]
// const subCategories = [
//   { name: 'Overview', href: '#' },
//   // { name: 'Backpacks', href: '#' },

// ]
// const filters = [
// //   {
// //     id: 'color',
// //     name: 'Color',
// //     options: [
// //       { value: 'white', label: 'White', checked: false },
// //       { value: 'beige', label: 'Beige', checked: false },
// //       { value: 'blue', label: 'Blue', checked: true },
// //       { value: 'brown', label: 'Brown', checked: false },
// //       { value: 'green', label: 'Green', checked: false },
// //       { value: 'purple', label: 'Purple', checked: false },
// //     ],
// //   },
// //   {
// //     id: 'category',
// //     name: 'Category',
// //     options: [
// //       { value: 'new-arrivals', label: 'QUIZ GAME', checked: false },
// //       { value: 'sale', label: 'Sale', checked: false },
// //       { value: 'travel', label: 'Travel', checked: true },
// //       { value: 'organization', label: 'Organization', checked: false },
// //       { value: 'accessories', label: 'Accessories', checked: false },
// //     ],
// //   },
// //   {
// //     id: 'size',
// //     name: 'Size',
// //     options: [
// //       { value: '2l', label: '2L', checked: false },
// //       { value: '6l', label: '6L', checked: false },
// //       { value: '12l', label: '12L', checked: false },
// //       { value: '18l', label: '18L', checked: false },
// //       { value: '20l', label: '20L', checked: false },
// //       { value: '40l', label: '40L', checked: true },
// //     ],
// //   },
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function page() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <form className="mt-4 border-t border-gray-200">
                    {/* <h3 className="sr-only">Categories</h3> */}
                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                      <h2 className="px-2 py-3 font-medium text-gray-900">Overview</h2>
                      {/* {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))} */}
                    </ul>

                   
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Quiz Game</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Timer
                    <TimerOutlinedIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

              
              </Menu>

       
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Overview</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            {/* <h2 id="products-heading" className="sr-only">
              Products
            </h2> */}

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                {/* <h3 className="sr-only">Categories</h3> */}
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  <h3>Overview</h3>
                  {/* {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))} */}
                </ul>

                
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3 bg-black text-black">
            <h1>HEY</h1>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
