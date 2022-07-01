
//Converts time to hours & minutes
export const calcTime = (time: number) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    
    return `${hours}h ${minutes}m`;
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

//use for session storage
export const isPersistedState = (stateName: any) => {
    //gets item from session storage with the name that is passed in
    const sessionState = sessionStorage.getItem(stateName);
    return sessionState && JSON.parse(sessionState);
}