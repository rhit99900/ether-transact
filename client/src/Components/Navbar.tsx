import { Disclosure } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import React from "react";

interface NavbarItem {
  name: string;
  href: string;
  current: boolean;
}

interface NavbarItemsProps {
  items: NavbarItem[]
}

const NavbarItems = (props: NavbarItemsProps) => {
  const { items } = props
  return(
    <React.Fragment>
      {items.map(item => (
        <Disclosure.Button
          key={item.name}
          as="a"
          href={item.href}
          className={`${item.current ? 'bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'} px-5 py-1`}
          aria-current={item.current ? 'page': undefined}
        >
          {item.name}
        </Disclosure.Button>
      ))}
      <Disclosure.Button
        className="bg-blue-700 rounded py-1 px-5"
      >
        Login
      </Disclosure.Button>
    </React.Fragment>
  )
}

const navigation = [
  { name: 'Dashboard', href:"#", current: true},
  { name: 'Team', href:"#", current: false}
]

const Navbar = () => {
  return(
    <Disclosure as="nav" className="bg-gray-800">
      {({open}) => (
        <React.Fragment>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                  <span className="sr-only">Open Main Menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                  ): (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img 
                    className="block h-8 w-auto lg:hidden"
                    alt="This Project"
                  />
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavbarItems items={navigation} />
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel>
            <div className="space-y-1 px-2 pt-2 pb-3">
              <NavbarItems items={navigation} />
            </div>
          </Disclosure.Panel>
        </React.Fragment>        
      )}
      
    </Disclosure>
  )
}

export default Navbar