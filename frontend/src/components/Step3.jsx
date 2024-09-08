import React, { useState } from 'react';
import { TbDotsVertical } from "react-icons/tb";

const Step3 = ({ onBack, onProceedToStep4 }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleGetStartedClick = () => {
    if (isChecked) {
      onProceedToStep4(); // Call the function to move to Step 4
    } else {
      alert('Please agree to the terms and conditions.');
    }
  };

  return (
    <div className="w-[320px] h-[650px] border-[16px] border-black rounded-[50px] bg-gray-100 mx-auto relative overflow-hidden shadow-lg flex flex-col">
      {/* Dynamic Island */}
      <div className="absolute top-0 left-1/4 w-1/2 h-4 bg-black rounded-b-[20px]"></div>

      {/* Content inside iPhone */}
      <div className="flex-grow p-4 space-y-4 overflow-auto">
        <div className="relative flex flex-col items-center">
            <h1 className="mt-6 text-3xl font-semibold relative">Circle</h1>
            <h4 className="absolute top-14 left-40 transform -translate-x-1/2 text-xs">
                App
            </h4>
        </div>

        <div className="space-y-4">
            <div className='w-full flex flex-row items-center'>
              <h2 className="ml-5 text-sm bg-blue-100 rounded-md text-center font-semibold whitespace-nowrap">
                Rent at <span className='text-blue-500'>Zero</span> Security Deposit
              </h2>
              <h2 className="ml-2">✨</h2>
            </div>

          <p className="text-sm text-gray-500">
            Set-up No Cost EMI in 3 steps
          </p>

          <div className="border-2 border-gray-300 rounded-lg shadow-xs">
          <ul className="space-y-1">
          <div>
            <li className="flex items-center">
              <span className='text-blue-500 bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-center mt-1'>1</span>
              <span className='text-blue-500 bg-blue-100 rounded-lg w-36 text-center ml-2 mt-1'>Eligibility check</span>
            </li>

            <li className='flex items-center'>
              <TbDotsVertical className="mt-3 ml-5" />
            </li>

            <li className="flex items-center space-x-4 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-gray-500"
              >
                <path d="M12 14c-1.8 0-3.2 1.2-3.8 2.8C7.4 17.4 8.4 19 10 19h4c1.6 0 2.6-1.6 1.8-2.8C15.2 15.2 13.8 14 12 14z" />
                <path d="M12 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
                <path d="M17.6 16.4c1.6-1.6 2.4-3.8 1.6-5.6l-1.6 1.6c-1.6-1.6-4.4-1.6-6 0l-1.6-1.6c-0.8 1.8 0 4 1.6 5.6s4 2.4 5.6 1.6c1.6-0.8 2.4-2.4 1.6-4z" />
              </svg>
              <div className="flex flex-col">
                <span>Basic Details</span>
                <span className='text-xs text-gray-400'>PAN & DOB</span>
              </div>
            </li>
          </div>


          <li className='flex items-center'>
              <TbDotsVertical className="ml-5" />
          </li>

          <li className="flex items-center space-x-4 p-2 rounded-lg">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-gray-500"
              >
                  <path d="M4 7h16V4H4v3zm0 3v11h16V10H4zM2 7h20v14H2V7z" />
              </svg>
              <div className="flex flex-col">
                  <span className="font-semibold">Work Details</span>
                  <span className="text-xs text-gray-400">Employment details</span>
              </div>
          </li>

          <li className='flex items-center'>
              <TbDotsVertical className="ml-5" />
          </li>

          <li className="flex items-center">
              <span className='text-blue-500 bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-center'>2</span>
              <span className='text-blue-500 bg-blue-100 rounded-lg w-32 text-center ml-2'>Setup Autopay</span>
          </li>

          <li className='flex items-center'>
              <TbDotsVertical className="ml-5" />
          </li>

                <li className="flex items-center space-x-4 p-2 rounded-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 text-gray-500"
                    >
                        <path d="M3 11L12 2l9 9v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V11z" />
                        <path d="M9 22V12h6v10" />
                        <path d="M4 11h16" />
                        <path d="M8 18h1v1h-1zm3-1h1v1h-1zm3-1h1v1h-1z" />
                    </svg>
                    <div className="flex flex-col">
                        <span className="font-semibold">Bank Details</span>
                        <span className="text-xs text-gray-400">Salary account details</span>
                    </div>
                </li>


                <li className='flex items-center'>
                    <TbDotsVertical className="ml-5" />
                </li>


                <li className="flex items-center space-x-4 p-2 rounded-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 text-gray-500"
                    >
                        <path d="M21 19V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
                        <path d="M3 7h18" />
                        <path d="M12 13l2 2 4-4" />
                        <path d="M8 12H7v1h1v-1zm2 0h1v1h-1v-1zm3 0h1v1h-1v-1zm-2-2h1v1h-1v-1z" />
                    </svg>
                    <div className="flex flex-col">
                        <span className="font-semibold">Identity Verification</span>
                        <span className="text-xs text-gray-400">Selfie & Aadhaar KYC</span>
                    </div>
                </li>

                <li className='flex items-center'>
                    <TbDotsVertical className="ml-5" />
                </li>

                <li className="flex items-center">
                    <span className='text-blue-500 bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-center mb-2'>3</span>
                    <span className='text-blue-500 bg-blue-100 rounded-lg w-20 text-center ml-2 mb-2'>Move-In</span>
                </li>

            </ul>
          </div>

          <div className="text-center">
            <div className="flex flex-col items-start">
                <label className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      className="form-checkbox text-blue-500 ml-2" 
                      onChange={handleCheckboxChange}
                    />
                    <span className='text-xs'>By clicking this, you approve our <span className="text-blue-500 underline">terms and conditions</span> and <span className="text-blue-500 underline">privacy policy</span></span>
                </label>
                <button 
                  className={`w-full flex items-center justify-center p-2 ${isChecked ? 'bg-blue-500' : 'bg-gray-300'} text-white rounded-lg shadow-md h-10 text-sm hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out mt-4`}
                  onClick={handleGetStartedClick}
                >
                    Get Started <span className="text-lg ml-2">&#8250;</span>
                </button>
                <button onClick={onBack} className='text-blue-500 text-sm mt-2 w-full flex items-center justify-center'>
                    Go Back
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;