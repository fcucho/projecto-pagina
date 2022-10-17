import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const styles = {divClass: 'items-center justify-between md:flex md:w-auto md:order-1'}


function NavBar(){

    return (
    <div>
      <nav class="bg-blue-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container flex flex-wrap justify-around items-center mx-auto">
          <a href="/" class="flex items-center">
            <img src="" class="mr-6 h-4 sm:h-9"/>
            <span class="self-center text-lg sm:text-xl whitespace-nowrap text-slate-50 font-semibold dark:text-white">Home</span>
          </a>
          <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
            <ul class="flex flex-col p-4 mt-4 bg-grey-50 border border-grey-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <a href="#" class="block py-2 pr-4 pl-3 text-slate-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Login</a>
              </li>
              <li>
                <a href="#" class="block py-2 pr-4 pl-3 text-slate-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Peliculas</a>
              </li>
              <li>
                <button id="sToggle" class="" onClick="">
                  Search
                </button>
              </li>
            </ul>
            <div id="searchDiv" className={`${styles.divClass}`}>
              <form class="absolute pb-0.5">
                <label class="hidden block">Search:</label>
                <input type="text" class="text-sm rounded-md w-auto py-1.5 pr-7 pl-5 h-5 border-none bg-stone-200 box-border m-0" value=""></input>
                <input type="submit" class="border-none h-5" value="Search"></input>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
    );
}


export default NavBar;