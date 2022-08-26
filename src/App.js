import './App.css';
import { Stepper } from 'react-form-stepper';
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import Comp3 from './components/Comp3'
import Comp4 from './components/Comp4'
import { useState } from 'react';
import logo from './data/logo.png'
import "@fontsource/poppins";

function App() {

  const [currentStep, changeCurrentStep] = useState(1)

  const handleClickPrevious = () => {
    console.log(currentStep)
    if (currentStep < 2)
      changeCurrentStep(1)
    else
      changeCurrentStep(currentStep - 1)
  }

  const handleClickNext = () => {
    console.log(currentStep)
    if (currentStep > 3)
      changeCurrentStep(4)
    else
      changeCurrentStep(currentStep + 1)
  }

  return (
    <div className='outer-container'>
      <div className='inner-container'>
        <div className='logo'><img src={logo} alt="logo" /></div>
        <Stepper
          steps={[{ label: '' }, { label: '' }, { label: '' }, { label: '' }]}
          activeStep={currentStep}
        />
        {currentStep === 1 && <Comp1 />}
        {currentStep === 2 && <Comp2 />}
        {currentStep === 3 && <Comp3 />}
        {currentStep === 4 && <Comp4 />}
        {/* <button onClick={handleClickPrevious}>Previous</button>
        <button onClick={handleClickNext}>Next</button> */}
        <div className='button'>
          <button onClick={handleClickNext}>Create Workspace</button>
        </div>
      </div>
    </div>
  );
}

export default App;
