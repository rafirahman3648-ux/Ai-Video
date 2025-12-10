
"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Authentication from "./Authentication";
import { useAuthContext } from "../provider";
import Link from "next/link";   // ✅ FIXED

function Header() {
  const { user } = useAuthContext();

  return (
    <div className="p-4 flex items-center justify-between">

      {/* Logo and App Name */}
      <div className="flex items-center gap-3">
        <Image
          src="/A.png"
          alt="App logo"
          width={32}
          height={32}
          className="rounded-md object-contain"
          priority
        />
        <h2 className="text-xl font-semibold tracking-wide">Video Gen</h2>
      </div>

      {/* Authentication / User Info */}
      <div>
        {!user ? (
          <Authentication>
            <Button
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-600
                         text-white font-semibold shadow-lg hover:shadow-2xl hover:shadow-indigo-500/30
                         hover:-translate-y-0.5 transition-all duration-300 active:scale-95
                         focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
            >
              Get Started
            </Button>
          </Authentication>
        ) : (
          <div className="flex items-center gap-3">
            
            <Link href="/dashboard">
              <Button className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-100 px-6 py-3 rounded-lg font-medium hover:bg-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                 Dashboard
              </Button>
            </Link>

            <Image
              src={user?.picture || "/user.png"}
              alt="userImage"
              width={40}
              height={40}
              className="fire-avatar relative rounded-full border-[3px] border-blue/20 shadow-[0_0_30px_rgba(255,100,0,0.4)] hover:shadow-[0_0_60px_rgba(255,120,0,0.8)] hover:scale-110 hover:border-blue-400/60 transition-all duration-500 hover:rotate-6 object-cover backdrop-blur-md bg-gradient-to-br from-blue-500/20 via-blue-500/20 to-blue-600/20 p-0.5 hover:animate-pulse cursor-pointer overflow-hidden"
            />
          </div>
        )}
      </div>

    </div>
  );
}

export default Header;


