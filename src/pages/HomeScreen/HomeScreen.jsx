import { useState, useEffect } from 'react'
import { Outlet, Link } from "react-router-dom";

import React from 'react'
import './HomeScreen.css'

function HomeScreen() {
    return(
       <div>
            <div className='absolute top-[20%] w-full text-center text-7xl font-bold color text-[rgb(18,24,38)]'>
            Play Chess Online on the #1 Site!
            </div>
            <div className='absolute top-[55%] left-[50%] translate-x-[-50%]'>
            <Link to="/GameScene" href="#_" class="relative inline-block text-lg group">
<span class="relative z-10 block px-9 py-5 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span class="relative">Play Online</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</Link>
            </div>
            <div className='absolute top-[70%] left-[50%] translate-x-[-50%]'>
            <a href="#_" class="relative inline-block text-lg group">
<span class="relative z-10 block px-7 py-5 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span class="relative">Play Computer</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
            </div>
       </div>
    )
}



export default HomeScreen