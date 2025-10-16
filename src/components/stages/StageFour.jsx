import { InputSystem } from "../InputSystem";
export const StageFour = ({ updateBirthDate }) => {
    return (
        <div className='stageContainer'>
            <InputSystem updateBirthDate={updateBirthDate} dateKey='day' placeHolder='I choose you!' />
        </div>
    )
}