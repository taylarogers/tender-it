import {useState} from 'react';

export const InputForm = () => {
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [vatNumber, setVatNumber] = useState('');
    const [quote, setQuote] = useState(-1);
    const [subcontracted, setSubcontracted] = useState('')
    const [experience, setExperience] = useState(-1);
    const [estimatedWeeks, setEstimatedWeeks] = useState(-1);
    const [bbbeeStatus, setBbbeeStatus] = useState('');
    const [terminated, setTerminated] = useState('')
  
    const checkInput = () => {
        if ((companyName.trim().length !== 0) && (email.trim().length !== 0) && (vatNumber.trim().length !== 0) && (subcontracted.trim().length !== 0) && (bbbeeStatus.trim().length !== 0) && (terminated.trim().length !== 0) && (quote !== -1) && (experience !== -1) && (estimatedWeeks !== -1)) 
            return true
        else {
            console.log('Seems you missed something in your application...')
            return false
        }
    }

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

    const submitBid = () => {
        if (checkInput() && checkValues())
            console.log(`Company Name: ${companyName} \nEmail: ${email} \nVAT Number: ${vatNumber} \nQuote: ${quote} \nSubcontracted: ${subcontracted} \nExperience: ${experience} \nEstimated Weeks: ${estimatedWeeks} \nBBBEE Status Level: ${bbbeeStatus} \nPreviously Terminated: ${terminated}`) 
    };

    return (
        <div className='bg-center pl-7'>
            <div className="flex justify-center">
                <h1 className="text-black font-bold mb-4"> Bid Details </h1>
            </div>

            <div className="grid grid-cols-3 gap-2">
                <label htmlFor="companyName" className="text-black col-span-1 self-center"> Company Name: </label>
                <input
                type="text"
                id="companyName"
                onChange={event => setCompanyName(event.target.value)}
                value={companyName}
                className="text-black col-span-2 rounded-md bg-background-white shadow-inner outline-none px-2 py-1"
                autoComplete='off'
                />

                <label htmlFor="email" className="text-black col-span-1 self-center"> Contact Email: </label>
                <input
                type="email"
                id="email"
                onChange={event => setEmail(event.target.value)}
                value={email}
                className="text-black col-span-2 rounded-md bg-background-white shadow-inner outline-none px-2 py-1"
                autoComplete='off'
                />

                <label htmlFor="vatNumber" className="text-black col-span-1 self-center"> VAT Number: </label>
                <input
                type="text"
                id="vatNumber"
                onChange={event => setVatNumber(event.target.value)}
                value={vatNumber}
                className="text-black col-span-2 rounded-md bg-background-white shadow-inner outline-none px-2 py-1"
                autoComplete='off'
                />

                <label htmlFor="quote" className="text-black col-span-1 self-center"> Quote (R): </label>
                <input
                type="number"
                id="quote"
                onChange={event => {
                    if (!isNaN(parseInt(event.target.value)))
                        setQuote(parseInt(event.target.value))
                    else
                        setQuote(-1)
                    }}
                className="text-black col-span-2 rounded-md bg-background-white shadow-inner outline-none px-2 py-1"
                />

                <label className="text-black col-span-1 self-center">Subcontracted: </label>
                <div className="col-span-1 py-1">
                    <input
                    type="radio"
                    id="subcontracted-yes"
                    name="subcontracted"
                    value="yes"
                    onChange={event => setSubcontracted(event.target.value)}
                    className='accent-purple outline-none'
                    />
                    <label htmlFor="subcontracted-yes" className='text-black'> Yes</label>
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
                    <label htmlFor="subcontracted-no" className='text-black'> No</label>
                </div>

                <label htmlFor="experience" className="text-black col-span-2 self-center"> Years of Experience in Field: </label>
                <input
                type="number"
                id="experience"
                onChange={event => {
                    if (!isNaN(parseInt(event.target.value)))
                        setExperience(parseInt(event.target.value))
                    else
                        setExperience(-1)
                    }}
                className="text-black rounded-md col-span-1 bg-background-white shadow-inner outline-none px-2 py-1"
                />

                <label htmlFor="estimatedWeeks" className="text-black col-span-2 self-center"> Estimated Weeks to Complete: </label>
                <input
                type="number"
                id="estimatedWeeks"
                onChange={event => {
                    if (!isNaN(parseInt(event.target.value)))
                        setEstimatedWeeks(parseInt(event.target.value))
                    else
                        setEstimatedWeeks(-1)
                    }}
                className="text-black rounded-md col-span-1 bg-background-white shadow-inner outline-none px-2 py-1"
                />

                <label htmlFor="bbbeeStatus" className="text-black col-span-2 self-center"> B-BBEE Status Level: </label>
                <select 
                id="bbbeeStatus" 
                name="bbbeeStatus" 
                onChange={event => setBbbeeStatus(event.target.value)}
                className='text-black rounded-md col-span-1 bg-background-white shadow-inner outline-none px-2 py-1'
                defaultValue={'default'}
                >
                    <option hidden value="default">  </option>
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

                <label className="text-black col-span-3 self-center pt-1">Do You Have a Previously Terminated Tender? </label>
                <div className="col-span-1 pb-1">
                    <input
                    type="radio"
                    id="terminated-yes"
                    name="terminated"
                    value="yes"
                    onChange={event => setTerminated(event.target.value)}
                    className='accent-purple outline-none'
                    />
                    <label htmlFor="terminated-yes" className='text-black'> Yes</label>
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
                    <label htmlFor="terminated-no" className='text-black'> No</label>
                </div>
            </div>
            
            <div className="flex justify-center">
                <button onClick={submitBid} className="bg-button-grey mt-3 py-1 px-8 rounded-md shadow-outer hover:bg-purple">Submit Bid</button>
            </div>
        </div>
    );
}