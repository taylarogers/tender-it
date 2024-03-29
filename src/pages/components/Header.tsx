// This is the header that is displayed on each of the pages

import React from 'react';
import {useState} from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import { DropDown } from './DropDown'

export const Header = () => {
    const [connected, setConnected] = useState(false);
    const [open, setOpen] = useState(false);

    const connectWallet = () => {
        setConnected(true);
    }

    const dropDown = () => {
        setOpen(!open)
    }

    return (
        <nav className="flex flex-wrap items-center justify-between rounded-md w-[97%] h-[50px] bg-background-white shadow-outer place-self-center my-3 px-6">
            <div className="flex items-center">
                <img src="/images/logo.png" className="h-8 mr-3" alt="TenderIt Logo" />
                <span className="self-center text-2xl whitespace-nowrap text-black font-header">TENDERIT</span>
            </div>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="text-med font-normalText flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                    <li className='flex align-middle'>
                        <div className='flex flex-row items-center content-center'>
                            <a href="#" className="block py-2 pl-3 pr-4 text-text-grey rounded hover:text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
                        </div>
                    </li>
                    <li className='flex align-middle'>
                        <div className='flex flex-row items-center content-center'>
                            <a href="#" className="block py-2 pl-3 pr-4 text-text-grey rounded hover:text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Create Tenders</a>
                        </div>
                    </li>
                    <li className='flex align-middle'>
                        <div className='flex flex-row items-center content-center'>
                            <a href="#" className="block py-2 pl-3 pr-4 text-text-grey rounded hover:text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">View Tenders</a>
                        </div>
                    </li>
                    <li>
                        <div className="h-8 py-0 flex justify-center items-center relative pl-1">
                            <hr className="w-8 h-0.5 bg-text-grey border-0 rounded transform rotate-90 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
                        </div>
                    </li>

                    {connected ?
                        <li className='flex align-middle'>
                            <div className='flex flex-row items-center content-center relative'>
                                
                                {open ? (
                                    <button onClick={dropDown}> 
                                        <ChevronUp className='stroke-text-grey hover:stroke-black'/> 
                                    </button>
                                ) : (
                                    <button onClick={dropDown}> 
                                        <ChevronDown className='stroke-text-grey hover:stroke-black'/> 
                                    </button>
                                )}

                                {open ? (
                                    <DropDown/>
                                ): null}
                            </div>
                        </li>
                    : null}

                    <li className='flex align-middle'>
                        <div className='flex flex-row items-center content-center'>
                            {connected ?
                                <button onClick={connectWallet} className="bg-purple py-1 px-4 rounded-md shadow-outer hover:bg-light-purple font-normalText text-med">Connected</button>
                            :
                                <button onClick={connectWallet} className="bg-purple py-1 px-4 rounded-md shadow-outer hover:bg-light-purple font-normalText text-med">Connect Wallet</button>
                            }
                            
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}