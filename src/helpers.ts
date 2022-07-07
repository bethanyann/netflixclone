
//Converts time to hours & minutes
export const calcTime = (time: number) : string => {
    const hours: number = Math.floor(time / 60);
    const minutes: number = time % 60;
    
    return `${hours}h ${minutes}m`;
}

//Converts a number to readable USD currency format
export const convertMoney = (money: number) : string => {
    const formatter: Intl.NumberFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    });

    return formatter.format(money);
}

export const embedTrailer = (trailerUrl : string) : string => {
    const autoplayValue = "?autoplay=1";
    const youtubeId = trailerUrl.substring(trailerUrl.indexOf('?v=') + 3);
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeId}${autoplayValue}`;

    console.log(youtubeId);
    return youtubeEmbedUrl;
}

//use for session storage
export const isPersistedState = (stateName: string) : any => {
    //gets item from session storage with the name that is passed in
    const sessionState = sessionStorage.getItem(stateName.toString());
    return sessionState && JSON.parse(sessionState);
}