fetch('https://xkcd.now.sh/?comic=latest').then(response => {
    console.log(response);
    return response.json();
})

.then(data => {
    console.log(data);
})