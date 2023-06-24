export const DropDown = () => {
    return (
        <ul className="absolute list-none w-[190px] rounded mx-0 mt-[180px] py-1 px-2 border-solid border border-shadow-grey bg-background-white">
            <li className= "my-2 mx-2">
                <button className='text-text-grey hover:text-black text-med border-none py-0 px-0'>My Offers</button>
            </li>
            <li className="my-2 mx-2">
                <button className='text-text-grey hover:text-black text-med border-none py-0 px-0'>My Tenders</button>
            </li>
            <li className="my-2 mx-2">
                <hr className="h-0.5 bg-text-grey"/>
            </li>
            <li className="my-2 mx-2">
                <button className='text-text-grey hover:text-black text-med border-none py-0 px-0'>Disconnect Wallet</button>
            </li>
        </ul>
    );
}