import { InputSystem } from "../InputSystem";
export const StageTwo = ({ updateBirthDate }) => {
    return (
        <div className='stageContainer'>
            <InputSystem updateBirthDate={updateBirthDate} dateKey='year' placeHolder='Which year were you born?' />
        </div>
    )
}