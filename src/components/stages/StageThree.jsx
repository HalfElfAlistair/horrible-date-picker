import { InputSystem } from "../InputSystem";
export const StageThree = ({ updateBirthDate }) => {
    return (
        <div className='stageContainer'>
            <InputSystem updateBirthDate={updateBirthDate} dateKey='month' placeHolder='And the month?' />
        </div>
    )
}