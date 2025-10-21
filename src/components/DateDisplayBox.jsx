export const DateDisplayBox = ({ active, birthDate, dateType, content, separator }) => {
    return (
        <>
            {separator && <p>/</p>}
            <div
                className={active ? 'activeDateContainer' : 'inactiveDateContainer'}
                title={`${dateType} : ${content}`}
            >
                <p className={birthDate[dateType] ? 'datePopulated' : 'dateBlank'}>
                    {content}
                </p>
            </div>
        </>
    )
}