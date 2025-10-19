import { Next } from "./svgs/Next";
import { Previous } from "./svgs/Previous";
import { DateDisplayBox } from "./DateDisplayBox";
export const Nav = ({ stage, updateStage, birthDate, landing }) => {
    const stageCheck = stage > 1 && stage < 5;
    const { year, month, day } = birthDate;
    const datePopulatedCheck = (type) => {
        if (!type) {
            return true;
        } else if (type.length < 1) {
            return true;
        } else {
            return false;
        }
    }
    const dateDisplay = (date, type) => {
        if (date) {
            return date
        } else {
            switch (type) {
                case 'day':
                    return 'DD'
                case 'month':
                    return 'MM'
                case 'year':
                    return 'YYYY'
            }
        }
    }
    return (
        <div className={`navContainer ${stageCheck ? 'navContainerDoubleButtons' : 'navContainerSingleButton'}`}>
            <button
                onClick={() => updateStage(stage > 1 ? stage - 1 : 2)}
                className={stage > 1 ? 'btnTransparent' : 'btnTransparent'}
            >
                {stage > 1 ? <Previous height='40%' width='40%' /> : <Next height='40%' width='40%' />}
            </button>

            {!landing && (
                <div className='flex-center dateContainer'>
                    {[{ dateType: 'day', stageNum: 4 }, { dateType: 'month', stageNum: 3 }, { dateType: 'year', stageNum: 2 }]
                        .map((dateObj, i) => {
                            const { dateType, stageNum } = dateObj;
                            return (
                                <DateDisplayBox
                                    key={stageNum}
                                    active={stage === stageNum}
                                    birthDate={birthDate}
                                    dateType={dateType}
                                    content={dateDisplay(birthDate[dateType], dateType)}
                                    separator={i > 0}
                                />
                            )
                        })}
                </div>
            )}

            {stageCheck && (
                <button
                    onClick={() => updateStage(stage + 1)}
                    className='btnTransparent'
                    disabled={stage === 4 && (datePopulatedCheck(day) || datePopulatedCheck(month) || datePopulatedCheck(year))}
                >
                    {stage < 5 ? <Next height='40%' width='40%' fill='#D2C3FE' /> : 'Complete'}
                </button>
            )}
        </div>
    )
}