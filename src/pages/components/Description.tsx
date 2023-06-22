// This is used to display tender information

import {useState} from 'react';

export const TenderDescription = () => {
    const [name, setName] = useState('Tender Name');
    const [num, setNum] = useState('Tender #');
    const [description, setDescription] = useState('Product description.');
        // This is what it should look like if we're using Date: const [openDate, setOpenDate] = useState(new Date());
    const [openDate, setOpenDate] = useState('Random Date');
    const [closeDate, setCloseDate] = useState('Random Date');
    const [contactNumber, setContactNumber] = useState('Contact Num');
    const [sector, setSector] = useState('Sector');
    const [location, setLocation] = useState('Location');
    const [issuer, setIssuer] = useState('Issuer');

    return (
        <div className='bg-left-top pr-7'>
            {/* Tender name and number */}
            <div className="flow-root">
                <h1 className="text-black font-bold mb-4 float-left font-normalText text-med"> {name} </h1>
                <p className='text-text-grey float-right font-normalText text-med'> {num} </p>
            </div>

            {/* Description */}
            <p className='text-black mb-[16px] font-normalText text-med'> {description} </p>

            {/* Tender details */}
            <p className='text-text-grey font-normalText text-med'>Open Date: {openDate}</p>
            <p className='text-text-grey font-normalText text-med'>Close Date: {closeDate}</p>
            <p className='text-text-grey font-normalText text-med'>Enquiry Contact Number: {contactNumber}</p>
            <p className='text-text-grey font-normalText text-med'>Sector: {sector}</p>
            <p className='text-text-grey font-normalText text-med'>Location: {location}</p>
            <p className='text-text-grey font-normalText text-med'>Issuer: {issuer}</p>
        </div>
    );
}