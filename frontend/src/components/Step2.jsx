import React, { useState } from 'react';

const Step2 = ({ selectedProperty, onBack, onProceedToStep3 }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('3 months');
  const [showModal, setShowModal] = useState(false);

  // Define period options and calculate total based on selected period
  const periodOptions = {
    '3 months': 3,
    '6 months': 6,
    '12 months': 12,
  };

  const handleSelectPeriod = (period) => {
    setSelectedPeriod(period);
  };

  // Ensure monthlyPayment is treated as a number
  const monthlyPayment = parseFloat(selectedProperty.price.replace(/₹|,/g, ''));
  const months = periodOptions[selectedPeriod];
  const totalAmount = monthlyPayment * months;

  // Format the amounts for display
  const formattedTotalAmount = totalAmount.toLocaleString();
  const formattedMonthlyPayment = monthlyPayment.toLocaleString();

  const handlePayWithCircle = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mt-7 w-[320px] h-[650px] border-[16px] border-black rounded-[50px] bg-gray-100 mx-auto relative overflow-hidden shadow-lg flex flex-col">
      {/* Dynamic Island */}
      <div className="absolute top-0 left-1/4 w-1/2 h-4 bg-black rounded-b-[20px]"></div>

      {/* Content inside iPhone */}
      <div className="flex-grow p-4 space-y-4 overflow-auto">
        <button onClick={onBack} className="text-xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg></button>
        <h1 className="text-xl font-semibold">Transaction Review</h1>

        <div className="flex items-center p-4 bg-blue-100 rounded-lg shadow-md space-x-4">
          <img
            src={selectedProperty.image}
            alt={selectedProperty.title}
            className="w-20 h-24 object-cover rounded-md"
          />
          <div className="flex-grow">
            <h3 className="text-lg font-semibold">{selectedProperty.title}</h3>
            <p className="text-sm text-gray-500">{selectedProperty.location}</p>
            <div className="text-lg font-semibold">₹{formattedMonthlyPayment}/month</div>
          </div>
        </div>

        <h2 className="text-lg font-semibold">Select Period</h2>
        <div className="flex space-x-2">
          {['3 months', '6 months', '12 months'].map((period) => (
            <button
              key={period}
              onClick={() => handleSelectPeriod(period)}
              className={`p-2 rounded-lg ${selectedPeriod === period ? 'bg-blue-700 text-white' : 'bg-blue-200'}`}
            >
              {period}
            </button>
          ))}
        </div>

        <div className="space-y-1 mt-4">
          <div className="flex justify-between">
            <span>Period time</span>
            <span>{selectedPeriod}</span>
          </div>

          <div className="flex justify-between">
            <span>Monthly payment</span>
            <span>₹{formattedMonthlyPayment}</span>
          </div>

          <div className="flex justify-between">
            <span>Security deposit</span>
            <span>₹0</span>
          </div>

          {/* Total Amount */}
          <div className="flex justify-between border-t pt-2 mt-2 border-gray-200">
            <strong>Total</strong>
            <strong>₹{formattedTotalAmount}</strong>
          </div>
        </div>

        <button 
          className="w-full p-4 bg-blue-500 text-white rounded-lg shadow-md mt-4"
          onClick={handlePayWithCircle}
        >
          Pay with Circle
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white p-4 rounded-t-3xl shadow-lg">
          <button 
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            onClick={handleCloseModal}
          >
            ✕
          </button>
          <h3 className="font-semibold text-center">Rent at <span className='text-blue-500'>Zero</span> security deposit </h3>
          
          {/* Payment Information */}
          <div className="space-y-2">
            <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 bg-pattern shadow-md">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full">
                        <svg
                            className="w-6 h-6 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                </div>

                <div className="text-blue-500 text-center w-24 rounded-md bg-gray-200 font-semibold">
                    Approved
                </div>

            </div>


            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                {/* Blue Circle with White Tick */}
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500">
                    <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                </div>
                <span>New Rent Offer <span className='text-blue-500'>₹{formattedMonthlyPayment}</span></span>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                {/* Blue Circle with White Tick */}
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500">
                    <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                </div>
                <span>0 Security deposit <span className='text-blue-500'>move-in</span></span>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                {/* Blue Circle with White Tick */}
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500">
                    <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                </div>
                <span>{selectedPeriod} <span className='text-blue-500'>salary cover</span></span>
                </div>
            </div>
        </div>

          <button 
            className="w-full p-4 bg-blue-500 text-white rounded-lg shadow-md mt-4"
            onClick={onProceedToStep3}
          >
            Pay with Circle
          </button>
        </div>
      )}
    </div>
  );
};

export default Step2;
