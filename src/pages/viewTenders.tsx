import React from 'react';
import { InputForm } from './components/Forms';
import { TenderDescription } from './components/Description';
import { X } from 'react-feather';

export default function ViewTenders() {
  return (
    <div className="grid h-screen place-items-center bg-background-white">
      <div className="rounded-md w-[900px] bg-background-white shadow-outer pl-8 pr-3 pt-3 pb-6">
        <div className='flex justify-end'>
          <X className='stroke-text-grey hover:stroke-black'/>
        </div>

        <div className="grid grid-cols-2 divide-x-2 divide-button-grey gap-2 content-center pr-5">
          <TenderDescription/>
          <InputForm/>
        </div>
      </div>
    </div>
  );
}