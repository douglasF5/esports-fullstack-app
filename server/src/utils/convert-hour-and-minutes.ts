export function convertHourToMinutes(hourString: string) {
    const [hours, minutes] = hourString.split(':').map(Number);

    const minutesAmount = (hours * 60) + minutes;
    return minutesAmount;
};

export function convertMinutesToHour(minutesNumber: number) {
    const minutes = minutesNumber % 60;
    const hours = (minutesNumber - minutes) / 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
};