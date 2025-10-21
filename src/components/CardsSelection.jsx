import { Card } from "./svgs/Card";
import { Tick } from "./svgs/Tick";
import { useState } from 'react';
export const CardsSelection = ({ updateBirthDate }) => {
    let defaultCards = {};
    ['spades', 'hearts', 'clubs', 'diamonds'].forEach(suit => {
        ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'].forEach(card => {
            const cardLetterNumber = card[0];
            const cardID = `${suit[0]}${card === '10' ? '10' : cardLetterNumber.toLowerCase()}`
            const assignValue = () => {
                if (card.length > 1) {
                    return card === 'Ace' ? 1 : 0;
                } else {
                    return +card;
                }
            }
            defaultCards[cardID] = {
                name: `${card} of ${suit}`,
                text: card === '10' ? '10' : cardLetterNumber,
                value: assignValue(),
                symbol: suit
            }
        })
    })
    const defaultCardIDs = Object.keys(defaultCards);
    const [currentCards, setCurrentCards] = useState({});
    const drawCards = () => {
        let currentCardsCopy = { ...currentCards };
        let currentCardIDs = [];
        let currentCardIndexes = [];
        for (const cardID in currentCardsCopy) {
            const { locked, cardIndex } = currentCardsCopy[cardID];
            if (locked) {
                currentCardIDs.push(cardID);
                currentCardIndexes.push(cardIndex)
            } else {
                delete currentCardsCopy[cardID];
            }
        }
        let availableCardIDs = defaultCardIDs.filter(cardID => {
            return !currentCardIDs.includes(cardID);
        })
        let numberOfAvailableCards = availableCardIDs.length;
        const availableIndexes = [0, 1, 2, 3].filter(n => {
            return !currentCardIndexes.includes(n);
        })
            .forEach(n => {
                const drawIndex = Math.floor(Math.random() * (numberOfAvailableCards));
                const cardID = availableCardIDs[drawIndex];
                currentCardsCopy[cardID] = {
                    ...defaultCards[cardID],
                    cardIndex: n
                }
                availableCardIDs.splice(drawIndex, 1);
                numberOfAvailableCards--;
            })
        setCurrentCards(currentCardsCopy);
    }
    const sortedCurrentCardIDs = Object.keys(currentCards).sort((a, b) => currentCards[a].cardIndex - currentCards[b].cardIndex);
    const lockFunction = (cardID) => {
        let currentCardsCopy = { ...currentCards };
        currentCardsCopy[cardID].locked = true;
        setCurrentCards(currentCardsCopy);
    }
    const unLockFunction = (cardID) => {
        let currentCardsCopy = { ...currentCards };
        currentCardsCopy[cardID].locked = false;
        setCurrentCards(currentCardsCopy);
    }
    const confirmYear = () => {
        const year = sortedCurrentCardIDs.map(cardID => currentCards[cardID].value).join('')
        updateBirthDate('year', year)
    }

    return (
        <div className='inputSystemContainer flex-center'>
            <div className='cardsActions'>
                <button className='drawButton' onClick={() => drawCards()}>Draw</button>
                <button className='tickButton flex-center' onClick={() => confirmYear()}>
                    <Tick height='36px' width='36px' fill='#D2C3FE' />
                </button>
            </div>
            <div className='cardsHand'>
                {sortedCurrentCardIDs.map((cardID, i) => {
                    const { text, symbol, name } = currentCards[cardID];
                    const lockedStatus = currentCards[cardID].locked;
                    return (
                        <div
                            key={cardID}
                            className='cardContainer'
                            onClick={() => lockedStatus ? unLockFunction(cardID) : lockFunction(cardID, i)}
                            title={`${name} - ${lockedStatus ? 'unlock' : 'lock'}`}
                        >
                            <Card
                                cardID={cardID}
                                colour={(symbol === 'spade' || symbol === 'club') ? '#9FC5FD' : '#D2C3FE'}
                                text={text}
                                symbol={symbol}
                                lockedStatus={lockedStatus}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}