import { useState } from 'react'
export const TextDisplay = ({ currentText, displayKeyboard, toggleDisplayKeyboard, placeHolder }) => {
    const textPresent = currentText.length > 0;
    return (
        <div
            className={`textDisplay ${displayKeyboard ? 'textDisplayActive' : ''} ${textPresent ? 'textDisplayTextPresent' : ''}`}
            onClick={(e) => { toggleDisplayKeyboard(e, true) }}
        >
            <p className={textPresent ? 'inputLabelSmall' : 'inputLabelNormal'}>{placeHolder}</p>
            {textPresent && (
                <p className='inputText'>{currentText}</p>
            )}
        </div>
    )
}