// This is the home page that is display when you first open the link

import { Header } from './components/Header';

export default function App() {
  return (
    <div className="grid h-screen place-items-center bg-background-white">
      <div className='grid h-full w-[80%] grid-cols-3 gap-2 place-items-center'>
        <div className='col-span-2'>
          {/* Logo */}
          <img src='/images/logo.png' alt='Logo' className=' h-20'/>

          {/* Title */}
          <h1 className="text-black my-3 font-header text-5xl pt-3"> TENDERIT </h1>

          {/* Description */}
          <p className="text-black my-3 font-normalText pt-3 text-sm">
            Welcome to our website, where we revolutionize the tender awarding process through blockchain technology. 
          </p>
          <p className="text-black my-3 font-normalText text-sm">
            Say goodbye to the corruption and lack of transparency that plague traditional tender systems. Our platform ensures a fair and transparent environment, where everyone has an equal opportunity to be awarded a tender. With our innovative solution, you can bid confidently, knowing that the process is tamper-proof and the selection is based solely on merit. Experience the benefits of a level playing field, enhanced accountability, and restored trust in the tendering process.
          </p>
          <p className="text-black my-3 font-normalText pb-3 text-sm">
            Join us today and embrace a future where fairness and transparency prevail.
          </p>

          {/* Buttons to pages */}
          <div className='flex gap-8'>
            <button className="bg-purple py-1 px-8 rounded-md shadow-outer hover:bg-light-purple font-normalText text-med">View Tenders</button>
            <button className="bg-purple py-1 px-8 rounded-md shadow-outer hover:bg-light-purple font-normalText text-med">Create Tenders</button>
          </div>
        </div>

        {/* Flow chart design */}
        <div className='col-span-1 flex flex-col justify-items-start items-start gap-1'>
          {/* Vertical line */}
          <div className="h-10 py-0 flex justify-center items-center relative pl-1">
            <hr className="w-8 h-0.5 bg-black border-0 rounded transform rotate-90 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
          </div>
          
          {/* Bullet point */}
          <div className='flex flex-row items-center'>
            <div className="w-[7px] h-[7px] bg-yellow rounded-full"></div>
            <p className="text-black font-normalText text-sm my-0 mx-0 py-0 px-2">Tender Created</p>
          </div>

          {/* Vertical line */}
          <div className="h-10 py-0 flex justify-center items-center relative pl-1">
            <hr className="w-8 h-0.5 bg-black border-0 rounded transform rotate-90 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
          </div>
          
          {/* Bullet point */}
          <div className='flex flex-row items-center'>
            <div className="w-[7px] h-[7px] bg-red rounded-full"></div>
            <p className="text-black font-normalText text-sm my-0 mx-0 py-0 px-2">Tender Submissions</p>
          </div>

          {/* Vertical line */}
          <div className="h-10 py-0 flex justify-center items-center relative pl-1">
            <hr className="w-8 h-0.5 bg-black border-0 rounded transform rotate-90 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
          </div>
          
          {/* Bullet point */}
          <div className='flex flex-row items-center'>
            <div className="w-[7px] h-[7px] bg-green rounded-full"></div>
            <p className="text-black font-normalText text-sm my-0 mx-0 py-0 px-2">Smart Contract Execution</p>
          </div>

          {/* Vertical line */}
          <div className="h-10 py-0 flex justify-center items-center relative pl-1">
            <hr className="w-8 h-0.5 bg-black border-0 rounded transform rotate-90 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
          </div>
          
          {/* Bullet point */}
          <div className='flex flex-row items-center'>
            <div className="w-[7px] h-[7px] bg-blue rounded-full"></div>
            <p className="text-black font-normalText text-sm my-0 mx-0 py-0 px-2">Winner Determined</p>
          </div>

          {/* Vertical line */}
          <div className="h-10 py-0 flex justify-center items-center relative pl-1">
            <hr className="w-8 h-0.5 bg-black border-0 rounded transform rotate-90 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
          </div>
          
          {/* Bullet point */}
          <div className='flex flex-row items-center'>
            <div className="w-[7px] h-[7px] bg-purple rounded-full"></div>
            <p className="text-black font-normalText text-sm my-0 mx-0 py-0 px-2">Contract Generation</p>
          </div>

          {/* Vertical line */}
          <div className="h-10 py-0 flex justify-center items-center relative pl-1">
            <hr className="w-8 h-0.5 bg-black border-0 rounded transform rotate-90 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
          </div>
        </div>
      </div>
    </div>
  );
}