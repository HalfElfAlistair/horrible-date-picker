import { useState } from 'react'
import './App.css'
import { Keyboard } from './components/Keyboard';
import { TextDisplay } from './components/TextDisplay';
import { Heading } from './components/Heading';
import { Nav } from './components/Nav';
import { StageOne } from './components/stages/StageOne';
import { StageTwo } from './components/stages/StageTwo';
import { StageThree } from './components/stages/StageThree';
import { StageFour } from './components/stages/StageFour';
import { StageFive } from './components/stages/StageFive';

function App() {
  const [currentStage, setCurrentStage] = useState(1);
  const updateStage = (nextStage) => {
    if (nextStage > 0 && nextStage < 6) {
      setCurrentStage(nextStage);
    }
  }

  const [birthDate, setBirthDate] = useState({
    day: '',
    month: '',
    year: ''
  });

  const updateBirthDate = (key, val) => {
    let date = { ...birthDate };
    date[key] = val;
    setBirthDate(date);
  }

  const renderStage = () => {
    switch (currentStage) {
      case 1:
        return <StageOne />
      case 2:
        return <StageTwo birthDate={birthDate} updateBirthDate={updateBirthDate} />
      case 3:
        return <StageThree birthDate={birthDate} updateBirthDate={updateBirthDate} />
      case 4:
        return <StageFour birthDate={birthDate} updateBirthDate={updateBirthDate} />
      case 5:
        return <StageFive birthDate={birthDate} />
      default:
        return <StageOne />
    }
  }

  return (
    <div
      className='container flex-center'
    >
      <Heading birthDate={currentStage > 1 ? birthDate : undefined} />
      {renderStage()}
      <Nav stage={currentStage} updateStage={updateStage} birthDate={birthDate} />
    </div>

  )


  // return (
  //   <>
  //     <div className='container flex-center' onClick={(e) => { toggleDisplayKeyboard(e, false) }}>
  //       <div className='headingContainer'>
  //         <h1>Horrible Date Picker</h1>
  //       </div>
  // <div className='inputContainer flex-center'>
  //   <TextDisplay
  //     currentText={currentText}
  //     displayKeyboard={displayKeyboard}
  //     toggleDisplayKeyboard={toggleDisplayKeyboard}
  //   />
  // </div>
  // <div className='keyboardContainer flex-center'>
  //   {displayKeyboard && <Keyboard addLetter={addLetter} deleteLetter={deleteLetter} />}
  // </div>
  //     </div>
  //   </>
  // )
}

export default App
