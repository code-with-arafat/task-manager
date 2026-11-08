import React from 'react'
import './Header.css'
import { IoIosNotificationsOutline } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';

export default function Header() {
  return (
    <div className="header">
      <input type="search" placeholder="Search Your Task..." className="rounded-full p-2.5 w-200 bg-white" />
      <div className="flex gap-2">
        <IoIosNotificationsOutline className="text-3xl"/>
      <CgProfile className="text-3xl"/>
      </div>
    </div>
  )
}
