function formatSeconds(seconds) {

    if (seconds > 60) {
        let minutes = seconds / 60;
        let remainder = seconds % 60;
    }
    return `${minutes}:${remainder}`
}
return `${seconds}`
}


console.log(`expect formatSeconds(10) == "10", was `
    $ {
        formatSeconds(10)
    }
    `);
console.log(`
    expect formatSeconds(100) == "1:40", was `${formatSeconds(100)}`);
console.log(`expect formatSeconds(60) == "1:00", was `
    $ {
        formatSeconds(60)
    }
    `);
console.log(`
    expect formatSeconds(61) == "1:01", was `${formatSeconds(60)}`);

// DO NOT EDIT BELOW HERE