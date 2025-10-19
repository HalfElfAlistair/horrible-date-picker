export const Previous = ({ height, width }) => {
    return (
        <svg className='previousIcon' xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 100 100" width={width} >
            <circle r="45" cx="50" cy="50" fill='none' strokeWidth='10' />
            <path d="M60 30 L40 50 L60 70" strokeWidth='10' fill='none' className='nextArrow' stroke='black' />
        </svg>
    )
}