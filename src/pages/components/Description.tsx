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
                <h1 className="text-black font-bold mb-4 float-left"> {name} </h1>
                <p className='text-text-grey float-right'> {num} </p>
            </div>

            {/* Description */}
            <p className='text-black mb-[16px]'> {description} </p>

            {/* Tender details */}
            <p className='text-text-grey'>Open Date: {openDate}</p>
            <p className='text-text-grey'>Close Date: {closeDate}</p>
            <p className='text-text-grey'>Enquiry Contact Number: {contactNumber}</p>
            <p className='text-text-grey'>Sector: {sector}</p>
            <p className='text-text-grey'>Location: {location}</p>
            <p className='text-text-grey'>Issuer: {issuer}</p>
        </div>
    );
}