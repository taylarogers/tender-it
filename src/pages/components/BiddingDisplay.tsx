// This is used to view the submitting bid display

import React from 'react';
import { BidForm } from './Forms';
import { TenderDescription } from './Description';
import { X } from 'react-feather';

export const BiddingDisplay = () => {
  return (
      <div className="rounded-md w-[900px] bg-background-white shadow-outer pl-8 pr-3 pt-3 pb-6">
        {/* Exit button */}
        <div className='flex justify-end'>
          <X className='stroke-text-grey hover:stroke-black'/>
        </div>

        {/* Description and bid application */}
        <div className="grid grid-cols-2 divide-x-2 divide-button-grey gap-2 content-center pr-5">
          <TenderDescription/>
          <BidForm/>
        </div>
      </div>
  );
}