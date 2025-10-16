export const Nav = ({ stage, updateStage, birthDate }) => {
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
    return (
        <div className={`navContainer ${stageCheck ? 'navContainerDoubleButtons' : 'navContainerSingleButton'}`}>
            <button
                onClick={() => updateStage(stage > 1 ? stage - 1 : 2)}
                className={stage > 1 ? 'navButtonLeft' : 'navButtonRight'}
            >
                {stage > 1 ? 'Previous' : 'Next'}
            </button>
            {stageCheck && (
                <button
                    onClick={() => updateStage(stage + 1)}
                    className='navButtonRight'
                    disabled={stage === 4 && (datePopulatedCheck(day) || datePopulatedCheck(month) || datePopulatedCheck(year))}
                >
                    {stage < 5 ? 'Next' : 'Complete'}
                </button>
            )}
        </div>
    )
}