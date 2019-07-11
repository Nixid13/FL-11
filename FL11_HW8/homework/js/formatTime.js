function formatTime(num) {
    let days = Math.floor(num / 1440);
    let hours = Math.floor((num % 1440) / 60);
    let minutes = Math.floor(num % 60);
    return `${days} day(s) ${hours} hour(s) ${minutes} minute(s).`
}

formatTime(120);
formatTime(59);
formatTime(3601);
