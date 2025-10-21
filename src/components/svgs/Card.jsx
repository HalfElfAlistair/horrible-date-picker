import { Padlock } from "./Padlock";
import { Spade } from "./Spade";
import { Heart } from "./Heart";
import { Club } from "./Club";
import { Diamond } from "./Diamond";
export const Card = ({ colour, text, symbol, lockedStatus }) => {
    const symbolSelect = () => {
        switch (symbol) {
            case 'spade':
                return <Spade fill={colour} />
            case 'heart':
                return <Heart fill={colour} />
            case 'club':
                return <Club fill={colour} />
            case 'diamond':
                return <Diamond fill={colour} />
        }
    }
    const upperTextXPos = () => {
        return text.length > 1 ? '3' : '4';
    }
    const lowerTextXPos = () => {
        return text.length > 1 ? '30' : '40';
    }
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 77"
            width="100%"
            fill="#004953"
        >
            <rect width="50" height="75" x="1" y="2" rx="5" ry="5" fill="none" stroke={colour} strokeWidth='1' />

            <text x={upperTextXPos()} y="18" fill={colour}>{text}</text>
            <text x={lowerTextXPos()} y="73" fill={colour}>{text}</text>

            {symbolSelect()}

            {lockedStatus && (
                <Padlock width='150%' />
            )}
        </svg>
    )
}