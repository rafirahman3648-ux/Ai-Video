"use client"
import { useAuthContext } from '@/app/provider'
import { SidebarTrigger } from '@/components/ui/sidebar'
import Image from 'next/image';
import React from 'react'

function AppHeader() {
  const {user} = useAuthContext();
  return (
<div className="flex p-2 justify-between items-center">
  <SidebarTrigger />
  <Image 
    src={user?.PhotoURL || "/user.png"} 
    width={35} 
    height={35} 
    alt="User Avatar" 
    className="rounded-full"
  />
</div>

  )
}

export default AppHeader
