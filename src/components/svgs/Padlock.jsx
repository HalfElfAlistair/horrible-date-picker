export const Padlock = ({ width }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width={width}
            fill="none"
            className='padlock'
            x='-13.5'
        >
            <rect
                width="30"
                height="25"
                x="35"
                y="44"
                rx="3"
                ry="3"
                fill="none"
                stroke='white'
                strokeWidth='5'
                strokeOpacity='70%'
            />

            <path
                d='M41,42 C40,25 60,25 59,42'
                stroke='white'
                strokeWidth='5'
                strokeOpacity='70%'
            />

            <circle
                r="4"
                cx="50"
                cy="56"
                fill="white"
                fillOpacity='70%' />
        </svg>
    )
}