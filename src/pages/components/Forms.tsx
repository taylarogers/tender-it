import {useState} from 'react';

// This is used to display the bidding application 
export const BidForm = () => {
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [vatNumber, setVatNumber] = useState('');
    const [quote, setQuote] = useState(-1);
    const [subcontracted, setSubcontracted] = useState('')
    const [experience, setExperience] = useState(-1);
    const [estimatedWeeks, setEstimatedWeeks] = useState(-1);
    const [bbbeeStatus, setBbbeeStatus] = useState('');
    const [terminated, setTerminated] = useState('')
  
    // Check that everything was filled in
    const checkInput = () => {
        if ((companyName.trim().length !== 0) && (email.trim().length !== 0) && (vatNumber.trim().length !== 0) && (subcontracted.trim().length !== 0) && (bbbeeStatus.trim().length !== 0) && (terminated.trim().length !== 0) && (quote !== -1) && (experience !== -1) && (estimatedWeeks !== -1)) 
            return true
        else {
            console.log('Seems you missed something in your application...')
            return false
        }
    }

    // Chcek validity of quote and email
    const checkValues = () => {
        if (!(/\S+@\S+\.\S+/.test(email))) {
            console.log('Oops! Looks like you didn\'t put in your email correctly.')
            return false
        }

        if (!(quote > 0)) {
            console.log('Oops! Double check your quote value.')
            return false
        }

        return true
    }

    // Send bid to smart contract
    const submitBid = () => {
        if (checkInput() && checkValues())
            console.log(`Company Name: ${companyName} \nEmail: ${email} \nVAT Number: ${vatNumber} \nQuote: ${quote} \nSubcontracted: ${subcontracted} \nExperience: ${experience} \nEstimated Weeks: ${estimatedWeeks} \nBBBEE Status Level: ${bbbeeStatus} \nPreviously Terminated: ${terminated}`) 
    };

    return (
        <div className='bg-center pl-7'>
            {/* Header */}
            <div className="flex justify-center">
                <h1 className="text-black font-bold mb-4 font-normalText"> Bid Details </h1>
            </div>

            <div className="grid grid-cols-3 gap-2">
                {/* Company name */}
                <label htmlFor="companyName" className="text-black col-span-1 self-center font-normalText text-med"> Company Name: </label>
                <input
                type="text"
                id="companyName"
                onChange={event => setCompanyName(event.target.value)}
                value={companyName}
                className="text-black col-span-2 rounded-md bg-background-white shadow-inner outline-none px-2 py-1 font-normalText text-med border-none"
                autoComplete='off'
                />

                {/* Contact email */}
                <label htmlFor="email" className="text-black col-span-1 self-center font-normalText text-med"> Contact Email: </label>
                <input
                type="email"
                id="email"
                onChange={event => setEmail(event.target.value)}
                value={email}
                className="text-black col-span-2 rounded-md bg-background-white shadow-inner outline-none px-2 py-1 font-normalText text-med border-none"
                autoComplete='off'
                />

                {/* Business VAT number */}
                <label htmlFor="vatNumber" className="text-black col-span-1 self-center font-normalText text-med"> VAT Number: </label>
                <input
                type="text"
                id="vatNumber"
                onChange={event => setVatNumber(event.target.value)}
                value={vatNumber}
                className="text-black col-span-2 rounded-md bg-background-white shadow-inner outline-none px-2 py-1 font-normalText text-med border-none"
                autoComplete='off'
                />

                {/* Quote */}
                <label htmlFor="quote" className="text-black col-span-1 self-center font-normalText text-med"> Quote (R): </label>
                <input
                type="number"
                id="quote"
                onChange={event => {
                    // If value entered isn't a number then variable is set to -1 (invalid)
                    if (!isNaN(parseInt(event.target.value)))
                        setQuote(parseInt(event.target.value))
                    else
                        setQuote(-1)
                    }}
                className="text-black col-span-2 rounded-md bg-background-white shadow-inner outline-none px-2 py-1 font-normalText text-med border-none"
                />

                {/* Subcontracted radio buttons */}
                <label className="text-black col-span-1 self-center font-normalText text-med">Subcontracted: </label>
                <div className="col-span-1 py-1">
                    <input
                    type="radio"
                    id="subcontracted-yes"
                    name="subcontracted"
                    value="yes"
                    onChange={event => setSubcontracted(event.target.value)}
                    className='accent-purple outline-none'
                    />
                    <label htmlFor="subcontracted-yes" className='text-black font-normalText text-med'> Yes</label>
                </div>

                <div className="col-span-1 py-1">
                    <input
                    type="radio"
                    id="subcontracted-no"
                    name="subcontracted"
                    value="no"
                    onChange={event => setSubcontracted(event.target.value)}
                    className='accent-purple outline-none'
                    />
                    <label htmlFor="subcontracted-no" className='text-black font-normalText text-med'> No</label>
                </div>

                {/* Experience */}
                <label htmlFor="experience" className="text-black col-span-2 self-center font-normalText text-med"> Years of Experience in Field: </label>
                <input
                type="number"
                id="experience"
                onChange={event => {
                    // If value entered isn't a number then variable is set to -1 (invalid)
                    if (!isNaN(parseInt(event.target.value)))
                        setExperience(parseInt(event.target.value))
                    else
                        setExperience(-1)
                    }}
                className="text-black rounded-md col-span-1 bg-background-white shadow-inner outline-none px-2 py-1 font-normalText text-med border-none"
                />

                {/* Estimated weeks */}
                <label htmlFor="estimatedWeeks" className="text-black col-span-2 self-center font-normalText text-med"> Estimated Weeks to Complete: </label>
                <input
                type="number"
                id="estimatedWeeks"
                onChange={event => {
                    // If value entered isn't a number then variable is set to -1 (invalid)
                    if (!isNaN(parseInt(event.target.value)))
                        setEstimatedWeeks(parseInt(event.target.value))
                    else
                        setEstimatedWeeks(-1)
                    }}
                className="text-black rounded-md col-span-1 bg-background-white shadow-inner outline-none px-2 py-1 font-normalText text-med border-none"
                />

                {/* BBBEE status */}
                <label htmlFor="bbbeeStatus" className="text-black col-span-2 self-center font-normalText text-med"> B-BBEE Status Level: </label>
                <select 
                id="bbbeeStatus" 
                name="bbbeeStatus" 
                onChange={event => setBbbeeStatus(event.target.value)}
                className='text-black rounded-md col-span-1 bg-background-white shadow-inner outline-none px-2 py-1 font-normalText text-med border-none'
                defaultValue={'default'}
                >
                    <option hidden value="default">  </option> {/* Default value */}
                    <option value="1">Level One</option>
                    <option value="2">Level Two</option>
                    <option value="3">Level Three</option>
                    <option value="4">Level Four</option>
                    <option value="5">Level Five</option>
                    <option value="6">Level Six</option>
                    <option value="7">Level Seven</option>
                    <option value="8">Level Eight</option>
                    <option value="0">None</option>
                </select>

                {/* Previously terminated tender contract */}
                <label className="text-black col-span-3 self-center pt-1 font-normalText text-med">Do You Have a Previously Terminated Tender? </label>
                <div className="col-span-1 pb-1">
                    <input
                    type="radio"
                    id="terminated-yes"
                    name="terminated"
                    value="yes"
                    onChange={event => setTerminated(event.target.value)}
                    className='accent-purple outline-none'
                    />
                    <label htmlFor="terminated-yes" className='text-black font-normalText text-med'> Yes</label>
                </div>

                <div className="col-span-1 pb-1">
                    <input
                    type="radio"
                    id="terminated-no"
                    name="terminated"
                    value="no"
                    onChange={event => setTerminated(event.target.value)}
                    className='accent-purple outline-none'
                    />
                    <label htmlFor="terminated-no" className='text-black font-normalText text-med'> No</label>
                </div>
            </div>
            
            {/* Submit button */}
            <div className="flex justify-center">
                <button onClick={submitBid} className="bg-purple mt-3 py-1 px-8 rounded-md shadow-outer hover:bg-light-purple font-normalText text-med">Submit Bid</button>
            </div>
        </div>
    );
}

// This is used to display the application for creating tenders
export const CreateForm = () => {
    const [tenderName, setTenderName] = useState('');
    const [sector, setSector] = useState('');
    const [location, setLocation] = useState('');
    const [openDate, setOpenDate] = useState(''); // Format: YYYY-MM-DD
    const [closeDate, setCloseDate] = useState('');
    const [contactNum, setContactNum] = useState('');
    const [description, setDescription] = useState('');

    const submitTender = () => {
            console.log('tender submitted')
    }

    return (
        <div className='place-self-center'>
            {/* Header */}
            <div className="flex justify-center">
                <h1 className="text-black font-bold mt-2 font-normalText text-med"> Tender Details </h1>
            </div>

            {/* Warnings */}
            <div className="flex justify-center">
                <p className="text-text-grey text-sm mt-4 mb-6 font-normalText text-center"> Please note that it is essential to provide complete and accurate information in this form as you will not be able to modify it later.  </p>
            </div>


            <div className="grid grid-cols-3 gap-2">
                {/* Tender name */}
                <label htmlFor="tenderName" className="text-black col-span-1 self-center font-normalText text-med"> Title: </label>
                <input
                type="text"
                id="tenderName"
                onChange={event => setTenderName(event.target.value)}
                value={tenderName}
                className="text-black col-span-2 rounded-md bg-background-white shadow-inner outline-none px-2 py-1 font-normalText text-med border-none"
                autoComplete='off'
                />

                {/* Sector */}
                <label htmlFor="sector" className="text-black col-span-1 self-center font-normalText text-med"> Sector: </label>
                <input
                type="text"
                id="sector"
                onChange={event => setSector(event.target.value)}
                value={sector}
                className="text-black col-span-2 rounded-md bg-background-white shadow-inner outline-none px-2 py-1 font-normalText text-med border-none"
                autoComplete='off'
                />

                {/* Location */}
                <label htmlFor="location" className="text-black col-span-1 self-center font-normalText text-med"> Location: </label>
                <select 
                id="location" 
                name="location" 
                onChange={event => setLocation(event.target.value)}
                className='text-black rounded-md col-span-2 bg-background-white shadow-inner outline-none px-2 py-1 font-normalText text-med border-none'
                defaultValue={'default'}
                >
                    <option hidden value="default">  </option> {/* Default value */}
                    <option value="kwazuluNatal">KwaZulu-Natal</option>
                    <option value="limpopo">Limpopo</option>
                    <option value="gauteng">Gauteng</option>
                    <option value="easternCape">Eastern Cape</option>
                    <option value="westernCape">Western Cape</option>
                    <option value="northernCape">Northern Cape</option>
                    <option value="northWest">North West</option>
                    <option value="mpumalanga">Mpumalanga</option>
                    <option value="freeState">Free State</option>
                </select>

                {/* Open Date */}
                <label htmlFor="openDate" className="text-black col-span-1 self-center font-normalText text-med"> Open Date: </label>
                <input
                type="date"
                id="openDate"
                onChange={event => setOpenDate(event.target.value)}
                className="text-black col-span-2 rounded-md bg-background-white shadow-inner outline-none px-2 py-1 font-normalText text-med border-none"
                autoComplete='off'
                />

                {/* Close Date */}
                <label htmlFor="closeDate" className="text-black col-span-1 self-center font-normalText text-med"> Close Date: </label>
                <input
                type="date"
                id="closeDate"
                onChange={event => setCloseDate(event.target.value)}
                className="text-black col-span-2 rounded-md bg-background-white shadow-inner outline-none px-2 py-1 font-normalText text-med border-none"
                />

                {/* Description */}
                <label htmlFor="description" className="text-black col-span-3 self-center font-normalText text-med"> Description: </label>
                <input
                type="text"
                id="description"
                onChange={event => setDescription(event.target.value)}
                value={description}
                className="text-black rounded-md col-span-3 break-words bg-background-white shadow-inner outline-none px-2 py-1 font-normalText text-med border-none"
                />
            </div>
            
            {/* Submit button */}
            <div className="flex justify-center">
                <button onClick={submitTender} className="bg-purple mt-4 py-1 px-8 rounded-md shadow-outer hover:bg-light-purple font-normalText text-med">Submit Tender</button>
            </div>
        </div>
    );
}