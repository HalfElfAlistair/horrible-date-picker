import { Card } from "./svgs/Card";
import { Tick } from "./svgs/Tick";
import { useState } from 'react';
export const CardsSelection = ({ updateBirthDate }) => {
    const defaultCards = {
        sa: {
            text: 'A',
            value: 1,
            symbol: 'spade'
        },
        s2: {
            text: '2',
            value: 2,
            symbol: 'spade'
        },
        s3: {
            text: '3',
            value: 3,
            symbol: 'spade'
        },
        s4: {
            text: '4',
            value: 4,
            symbol: 'spade'
        },
        s5: {
            text: '5',
            value: 5,
            symbol: 'spade'
        },
        s6: {
            text: '6',
            value: 6,
            symbol: 'spade'
        },
        s7: {
            text: '7',
            value: 7,
            symbol: 'spade'
        },
        s8: {
            text: '8',
            value: 8,
            symbol: 'spade'
        },
        s9: {
            text: '9',
            value: 9,
            symbol: 'spade'
        },
        s10: {
            text: '10',
            value: 0,
            symbol: 'spade'
        },
        sj: {
            text: 'J',
            value: 0,
            symbol: 'spade'
        },
        sq: {
            text: 'Q',
            value: 0,
            symbol: 'spade'
        },
        sk: {
            text: 'K',
            value: 0,
            symbol: 'spade'
        },
        ha: {
            text: 'A',
            value: 1,
            symbol: 'heart'
        },
        h2: {
            text: '2',
            value: 2,
            symbol: 'heart'
        },
        h3: {
            text: '3',
            value: 3,
            symbol: 'heart'
        },
        h4: {
            text: '4',
            value: 4,
            symbol: 'heart'
        },
        h5: {
            text: '5',
            value: 5,
            symbol: 'heart'
        },
        h6: {
            text: '6',
            value: 6,
            symbol: 'heart'
        },
        h7: {
            text: '7',
            value: 7,
            symbol: 'heart'
        },
        h8: {
            text: '8',
            value: 8,
            symbol: 'heart'
        },
        h9: {
            text: '9',
            value: 9,
            symbol: 'heart'
        },
        h10: {
            text: '10',
            value: 0,
            symbol: 'heart'
        },
        hj: {
            text: 'J',
            value: 0,
            symbol: 'heart'
        },
        hq: {
            text: 'Q',
            value: 0,
            symbol: 'heart'
        },
        hk: {
            text: 'K',
            value: 0,
            symbol: 'heart'
        },
        ca: {
            text: 'A',
            value: 1,
            symbol: 'club'
        },
        c2: {
            text: '2',
            value: 2,
            symbol: 'club'
        },
        c3: {
            text: '3',
            value: 3,
            symbol: 'club'
        },
        c4: {
            text: '4',
            value: 4,
            symbol: 'club'
        },
        c5: {
            text: '5',
            value: 5,
            symbol: 'club'
        },
        c6: {
            text: '6',
            value: 6,
            symbol: 'club'
        },
        c7: {
            text: '7',
            value: 7,
            symbol: 'club'
        },
        c8: {
            text: '8',
            value: 8,
            symbol: 'club'
        },
        c9: {
            text: '9',
            value: 9,
            symbol: 'club'
        },
        c10: {
            text: '10',
            value: 0,
            symbol: 'club'
        },
        cj: {
            text: 'J',
            value: 0,
            symbol: 'club'
        },
        cq: {
            text: 'Q',
            value: 0,
            symbol: 'club'
        },
        ck: {
            text: 'K',
            value: 0,
            symbol: 'club'
        },
        da: {
            text: 'A',
            value: 1,
            symbol: 'diamond'
        },
        d2: {
            text: '2',
            value: 2,
            symbol: 'diamond'
        },
        d3: {
            text: '3',
            value: 3,
            symbol: 'diamond'
        },
        d4: {
            text: '4',
            value: 4,
            symbol: 'diamond'
        },
        d5: {
            text: '5',
            value: 5,
            symbol: 'diamond'
        },
        d6: {
            text: '6',
            value: 6,
            symbol: 'diamond'
        },
        d7: {
            text: '7',
            value: 7,
            symbol: 'diamond'
        },
        d8: {
            text: '8',
            value: 8,
            symbol: 'diamond'
        },
        d9: {
            text: '9',
            value: 9,
            symbol: 'diamond'
        },
        d10: {
            text: '10',
            value: 0,
            symbol: 'diamond'
        },
        dj: {
            text: 'J',
            value: 0,
            symbol: 'diamond'
        },
        dq: {
            text: 'Q',
            value: 0,
            symbol: 'diamond'
        },
        dk: {
            text: 'K',
            value: 0,
            symbol: 'diamond'
        },
    };
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
                    const { text, symbol } = currentCards[cardID];
                    const lockedStatus = currentCards[cardID].locked;
                    return (
                        <div
                            key={cardID}
                            className='cardContainer'
                            onClick={() => lockedStatus ? unLockFunction(cardID) : lockFunction(cardID, i)}
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