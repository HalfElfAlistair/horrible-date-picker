import { useState } from 'react'
import { KeyboardButton } from './KeyboardButton';
export const Keyboard = ({ addLetter, deleteLetter, updateBirthDate, currentText, dateKey, setFailedDayAttempt }) => {

    const numberKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const alphabetKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const [letterKeys, setLetterKeys] = useState(alphabetKeys);

    const monthSelect = () => {
        const date = new Date(`${currentText} 1, 2000`);
        const month = date.getMonth();
        updateBirthDate(dateKey, month + 1)
    }

    const daySelect = () => {
        const days = {
            'bulbasaur': 1,
            'ivysaur': 2,
            'venusaur': 3,
            'charmander': 4,
            'charmeleon': 5,
            'charizard': 6,
            'squirtle': 7,
            'wartortle': 8,
            'blastoise': 9,
            'caterpie': 10,
            'metapod': 11,
            'butterfree': 12,
            'weedle': 13,
            'kakuna': 14,
            'beedrill': 15,
            'pidgey': 16,
            'pidgeotto': 17,
            'pidgeot': 18,
            'rattata': 19,
            'raticate': 20,
            'spearow': 21,
            'fearow': 22,
            'ekans': 23,
            'arbok': 24,
            'pikachu': 25,
            'raichu': 26,
            'sandshrew': 27,
            'sandslash': 28,
            'nidoran': 29,
            'nidorina': 30,
            'nidoqueen': 31,
        }
        if (days[currentText]) {
            updateBirthDate(dateKey, days[currentText]);
        } else {
            setFailedDayAttempt(true);
        }
    }

    const confirmDate = () => {
        switch (dateKey) {
            case 'year':
                updateBirthDate(dateKey, currentText);
                break;
            case 'month':
                monthSelect()
                break;
            case 'day':
                daySelect()
                break;
        }
    }

    const buttonEvent = (letterKey) => {
        if (letterKey.length === 1) {
            addLetter(letterKey.toLowerCase())
            if (dateKey === 'month') {
                setLetterKeys(shuffleKeys(alphabetKeys))
            }
        } else if (letterKey === 'Tick') {
            confirmDate()
        } else (
            deleteLetter()
        )
    }

    const shuffleKeys = (arr) => {
        return arr
            .map((letter) => {
                return { letter, sortNumber: Math.random() }
            })
            .sort((a, b) => a.sortNumber - b.sortNumber)
            .map(obj => obj.letter)
    }



    return (
        <div className='keyboard'>
            {dateKey === 'year' ? (
                numberKeys.map(numberKey => {
                    return (
                        <KeyboardButton
                            key={numberKey}
                            title={numberKey}
                            buttonClass='numberKey'
                            buttonEvent={buttonEvent}
                        />
                    )
                })
            ) : (
                letterKeys.map(letterKey => {
                    return (
                        <KeyboardButton
                            key={letterKey}
                            title={letterKey}
                            buttonClass='letterKey'
                            buttonEvent={buttonEvent}
                        />
                    )
                })
            )}
            <KeyboardButton
                key='Backspace'
                title='Backspace'
                buttonClass='backspace'
                buttonEvent={buttonEvent}
            />
            <KeyboardButton
                key='Tick'
                title='Tick'
                buttonClass='tick'
                buttonEvent={buttonEvent}
            />
        </div>

    )
}