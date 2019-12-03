export const StringToMs = (time) => {

    let timeParts = time.split(":");
    return (+timeParts[0] * (60000 * 60)) + (+timeParts[1] * 60000);
}

export const MsToHours = (duration) => {
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;

    return hours + ":" + minutes;
}