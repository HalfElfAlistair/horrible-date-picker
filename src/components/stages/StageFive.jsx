export const StageFive = ({ birthDate }) => {

    const { year, month, day } = birthDate;

    const date = new Date(year, month - 1, day);
    const timestamp = date.getTime();
    const currentTimeStamp = Date.now();

    const checkAge = () => {
        if ((currentTimeStamp - 3153600000000) > timestamp) {
            return 'Wait are you an elf? Congratulations on clearing 100, you definitely pass this one, you big oldie!'
        } else if ((currentTimeStamp - 567648000000) > timestamp) {
            return "Nice one, you're over 18 and pass the verification test."
        } else if (timestamp > currentTimeStamp) {
            return "Ah a time traveller, how interesting. Please do get in touch and let me know the lottery numbers for next week."
        } else {
            return "Ah sorry, you're not old enough for this page."
        }
    }

    return (
        <div className='stageContainer flex-center'>
            <div className='textContainer'>
                <p>{checkAge()}</p>
            </div>
        </div>
    )
}