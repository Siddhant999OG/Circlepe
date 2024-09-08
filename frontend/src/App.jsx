import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';

const App = () => {
  const [step, setStep] = useState(1);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activeIcon, setActiveIcon] = useState('home');

  const handleProceed = (property) => {
    setSelectedProperty(property);
    setStep(2);
  };

  const handleBack = () => {
    setStep(prevStep => Math.max(prevStep - 1, 1));
  };

  const handleGoToStep3 = () => {
    setStep(3);
  };

  const handleGoToStep4 = () => {
    setStep(4);
  };

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
    if (icon === 'home') {
      setStep(1);
    } else if (icon === 'search') {
      setStep(1);
    } else if (icon === 'favorites') {
      setStep(3);
    } else if (icon === 'profile') {
      setStep(4);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-100 min-h-screen flex flex-col">
      <div className="flex-grow">
        {step === 1 && <Step1 onProceed={handleProceed} showSearchBar={activeIcon === 'search'} activeIcon={activeIcon} handleIconClick={handleIconClick} />}
        {step === 2 && (
          <Step2
            selectedProperty={selectedProperty}
            onBack={handleBack}
            showSearchBar={activeIcon === 'search'}
            onProceedToStep3={handleGoToStep3}
          />
        )}
        {step === 3 && (
          <Step3
            onBack={handleBack}
            onProceedToStep4={handleGoToStep4}
          />
        )}
        {step === 4 && <Step4 onBack={handleBack} />}
      </div>
    </div>
  );
};

export default App;