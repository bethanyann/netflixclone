
//Converts time to hours & minutes
export const calcTime = (time: any) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;

    return `${hours} hours and ${minutes} minutes`;
}

//Converts a number to readable USD currency format
export const convertMoney = (money: number) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    });

    return formatter.format(money);
}