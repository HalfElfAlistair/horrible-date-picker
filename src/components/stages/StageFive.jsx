export const StageFive = ({ birthDate }) => {

    const { year, month, day } = birthDate;

    const date = new Date(birthDate.year, birthDate.month - 1, birthDate.day);
    const timestamp = date.getTime();
    const currentTimeStamp = Date.now();

    console.log('date', date)

    const checkAge = (type) => {
        return (currentTimeStamp - type) > timestamp;
    }

    return (
        <div className='stageContainer flex-center'>
            <div className='textContainer'>
                {checkAge(3153600000000) ? (
                    <p>Wait are you an elf? Congratulations on clearing 100, you definitely pass this one, you big oldie!</p>
                ) : (
                    checkAge(567648000000) ? (
                        <p>Nice one, you're over 18 and pass the verification test.</p>
                    ) : (
                        <p>Ah sorry, you're not old enough for this page.</p>
                    )
                )}
            </div>
        </div>
    )
}