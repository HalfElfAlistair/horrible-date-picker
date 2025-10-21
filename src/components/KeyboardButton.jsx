import { BackSpace } from './svgs/BackSpace';
import { Tick } from './svgs/Tick';
export const KeyboardButton = ({ title, buttonClass, buttonEvent }) => {
    const buttonContent = () => {
        switch (title) {
            case 'Backspace':
                return <BackSpace height='36px' width='36px' fill='#111010' />
            case 'Tick':
                return <Tick height='36px' width='36px' fill='#111010' />
            default:
                return title
        }
    }
    return (
        <button
            className={buttonClass}
            onClick={() => buttonEvent(title)}
            title={title === 'Tick' ? 'Confirm' : title}
        >
            {buttonContent()}
        </button>
    )
}