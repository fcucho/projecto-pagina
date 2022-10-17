import React, { useState } from 'react'
function Footer(){
    return(
        <footer className="px-2 sm:px-4 py-2.5 bg-slate-400">
          <div className="flex flex-wrap mx-auto justify-start md:order-1">
            <ul className="flex flex-col p-4 mt-4 border md:space-x-0 md:flex-col md:border-0">
              <li>
                <div className="flex flex-wrap mx-auto justify-between items-center md:order-1"> 
                  <ul className="flex flex-col border md:space-x-0 md:text-lg md:mt-0 md:flex-row md:border-0">
                  <li>
                  <a href="#" className="block text-white hover:text-blue-200 md:pd-0">Sobre nosotros</a>
                </li>
                <li>
                
               </li>
                </ul>
               </div>
              </li>
            <li>
              <h2 className="block text-white md:pd-0">Fernando Cuccioletti 2022</h2>
            </li>
          </ul>
          </div>
        </footer>
    );
}

export default Footer;