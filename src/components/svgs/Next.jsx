export const Next = ({ height, width }) => {
    return (
        <svg className='nextIcon' xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 100 100" width={width}>
            <circle r="45" cx="50" cy="50" fill='none' strokeWidth='10' />
            <path d="M40 30 L60 50 L40 70" strokeWidth='10' fill='none' className='nextArrow' stroke='black' />
        </svg>
    )
}