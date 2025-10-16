export const Heading = ({ birthDate }) => {
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
        <header className='flex-center'>
            <h1>Horrible Date Picker</h1>
            {birthDate && (
                <div className='flex-center dateContainer'>
                    <div className='dayContainer'>
                        <p className={birthDate.day ? 'datePopulated' : 'dateBlank'}>{dateDisplay(birthDate.day, 'day')}</p>
                    </div>
                    <p>/</p>
                    <div className='monthContainer'>
                        <p className={birthDate.month ? 'datePopulated' : 'dateBlank'}>{dateDisplay(birthDate.month, 'month')}</p>
                    </div>
                    <p>/</p>
                    <div className='yearContainer'>
                        <p className={birthDate.year ? 'datePopulated' : 'dateBlank'}>{dateDisplay(birthDate.year, 'year')}</p>
                    </div>
                </div>
            )}
        </header>
    )
}