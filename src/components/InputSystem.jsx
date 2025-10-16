import { useState } from 'react';
import { TextDisplay } from './TextDisplay';
import { Keyboard } from './Keyboard';
export const InputSystem = ({ updateBirthDate, dateKey, placeHolder }) => {

    const [currentText, setCurrentText] = useState([]);
    const addLetter = (letter) => {
        const text = [...currentText];
        text.push(letter);
        setCurrentText(text);
    }
    const deleteLetter = () => {
        const text = [...currentText];
        text.pop();
        setCurrentText(text);
    }
    const [displayKeyboard, setDisplayKeyboard] = useState(false);
    const toggleDisplayKeyboard = (e, status) => {
        // Enables similar functionality to a standard input (opening when clicked and closing when clicked away)
        if (status) {
            e.stopPropagation();
        }
        const classes = e.target.className;
        if (!/letterKey|numberKey|backspace|tick|keyboard\b/g.test(classes)) {
            setDisplayKeyboard(status)
        }
    }
    const [failedDayAttempt, setFailedDayAttempt] = useState(false);

    return (
        <div onClick={(e) => { toggleDisplayKeyboard(e, false) }} className='inputSystemContainer'>
            <div className='inputContainer flex-center'>
                <TextDisplay
                    currentText={currentText}
                    displayKeyboard={displayKeyboard}
                    toggleDisplayKeyboard={toggleDisplayKeyboard}
                    placeHolder={placeHolder}
                />
            </div>
            {(dateKey === 'day' && failedDayAttempt) && (
                <p>Hint: You'll need to know the <a href='https://www.serebii.net/pokemon/gen1pokemon.shtml' target="_blank" rel="noopener">first 31 Pokemon</a></p>
            )}
            <div className='keyboardContainer flex-center'>
                {displayKeyboard && (
                    <Keyboard
                        addLetter={addLetter}
                        deleteLetter={deleteLetter}
                        updateBirthDate={updateBirthDate}
                        currentText={currentText.join('')}
                        dateKey={dateKey}
                        setFailedDayAttempt={setFailedDayAttempt}
                    />
                )}
            </div>
        </div>
    )

    // return (
    //     <div className='flex-center'>
    //         <div className='inputContainer flex-center'>
    //             <TextDisplay
    //                 currentText={currentText}
    //                 displayKeyboard={displayKeyboard}
    //                 toggleDisplayKeyboard={toggleDisplayKeyboard}
    //             />
    //         </div>
    //         <div className='keyboardContainer flex-center'>
    //             {displayKeyboard && (
    //                 <Keyboard
    //                     addLetter={addLetter}
    //                     deleteLetter={deleteLetter}
    //                     updateBirthDate={updateBirthDate}
    //                     currentText={currentText}
    //                     dateKey={dateKey}
    //                 />
    //             )}
    //         </div>
    //     </div>
    // )
}