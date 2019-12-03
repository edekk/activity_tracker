const miliseconds = (time) => {

    let timeParts = time.split(":");
    return (+timeParts[0] * (60000 * 60)) + (+timeParts[1] * 60000)
}

export default miliseconds;