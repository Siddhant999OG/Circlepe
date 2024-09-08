import React from 'react';

const Step4 = ({ onBack }) => {
  return (
    <div className="w-[320px] h-[650px] border-[16px] border-black rounded-[50px] bg-white mx-auto relative overflow-hidden shadow-lg flex flex-col">
      {/* Dynamic Island */}
      <div className="absolute top-0 left-1/4 w-1/2 h-4 bg-black rounded-b-[20px]"></div>

      {/* Back Button */}
      <button 
        className="absolute top-4 left-4 text-black focus:outline-none" 
        onClick={onBack}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Content */}
      <div className="flex-grow p-4 space-y-4 overflow-auto">

        {/* Progress Bar */}
        <div className="mt-10 flex justify-center items-center space-x-2 mb-4">
          <button className="bg-green-200 text-green-500 rounded-md px-3 py-1 text-xs">Setup Autopay</button>
          <button className="bg-green-200 text-green-500 rounded-md px-3 py-1 text-xs">Setup Autopay</button>
          <button className="bg-blue-200 text-blue-500 rounded-md px-3 py-1 text-xs">KYC & move-in</button>
        </div>

        {/* Heading */}
        <h2 className="text-center text-lg font-semibold text-gray-700">
          One step away <span role="img" aria-label="sparkle">✨</span> <br />
          <span className="text-blue-500">from your dream home</span>
        </h2>

        {/* Image/Icon */}
        <div className="flex justify-center my-4">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
          <img 
            src="https://img.icons8.com/ios-filled/50/000000/confetti.png" 
            alt="Confetti Icon" 
            className="w-8 h-8"
          />
        </div>

        </div>

        {/* Information Section */}
        <div className="text-center space-y-2">
          <h3 className="text-xs font-semibold bg-blue-100 text-blue-500 py-1 rounded-lg">
            Rent converted to Zero-Cost EMI
          </h3>
          <div className="text-sm text-gray-700">
            <div className="flex justify-between">
              <span className="font-semibold">Co-living partner</span>
              <span>Rent-OK</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Payment Amount</span>
              <span>INR XXXX.00</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Monthly rent</span>
              <span>10,000 INR/mo.</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Rent cycle</span>
              <span>5 Months</span>
            </div>
          </div>

          <div className="text-green-500 bg-green-200 text-lg font-bold rounded-md">
            Zero COST EMI
          </div>
        </div>

        {/* Footer and Terms */}
        <div className="text-xs text-gray-500 mt-6 text-center">
          By clicking on next, you acknowledge that you have read <span className="text-blue-500 underline">Loan Agreement</span> & <span className="text-blue-500 underline">KFS</span> agreed to the terms and conditions.
        </div>

        {/* Continue Button */}
        <button className="w-full py-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white text-lg rounded-lg mt-4 shadow-md">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Step4;