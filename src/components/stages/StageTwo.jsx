import { CardsSelection } from "../CardsSelection";
export const StageTwo = ({ updateBirthDate }) => {
    return (
        <div className='stageContainer'>
            <CardsSelection updateBirthDate={updateBirthDate} />
        </div>
    )
}