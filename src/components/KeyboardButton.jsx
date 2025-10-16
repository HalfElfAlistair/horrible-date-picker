import { BackSpace } from './svgs/BackSpace';
import { Tick } from './svgs/Tick';
export const KeyboardButton = ({ title, buttonClass, buttonEvent }) => {
    const buttonContent = () => {
        switch (title) {
            case 'Backspace':
                return <BackSpace height='24px' width='24px' fill='#111010' />
            case 'Tick':
                return <Tick height='24px' width='24px' fill='#111010' />
            default:
                return title
        }
    }
    return (
        <button
            className={buttonClass}
            onClick={() => buttonEvent(title)}
        >
            {buttonContent()}
        </button>
    )
}