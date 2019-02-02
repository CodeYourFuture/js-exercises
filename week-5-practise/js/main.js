//blue btn
document.getElementById('blueBtn').addEventListener('click', function () {
    document.querySelector('.primary-content .jumbotron').style.backgroundColor = '#588fbd';
    document.querySelector('.primary-content .jumbotron .btn-primary').style.backgroundColor = '#ffa500';
    document.querySelector('.primary-content .jumbotron .btn-secondary').style.backgroundColor = 'black';
    document.querySelector('.primary-content .jumbotron .btn-secondary').style.color = 'white';
})
//orange btn
document.getElementById('orangeBtn').addEventListener('click', function () {
    document.querySelector('.primary-content .jumbotron').style.backgroundColor = '#f0ad4e';
    document.querySelector('.primary-content .jumbotron .btn-primary').style.backgroundColor = '#5751fd';
    document.querySelector('.primary-content .jumbotron .btn-secondary').style.backgroundColor = '#31b0d5';
    document.querySelector('.primary-content .jumbotron .btn-secondary').style.color = 'white';
})
//green btn
document.getElementById('greenBtn').addEventListener('click', function () {
    document.querySelector('.primary-content .jumbotron').style.backgroundColor = '#87ca8a';
    document.querySelector('.primary-content .jumbotron .btn-primary').style.backgroundColor = 'black';
    document.querySelector('.primary-content .jumbotron .btn-secondary').style.backgroundColor = '#8c9c08';
})
//register with usform validation
document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();
    const email = document.getElementById('exampleInputEmail1');
    const name = document.getElementById('example-text-input');
    const describe = document.getElementById('exampleTextarea');
    const x = email.value.indexOf('@');
    const y = email.value.indexOf('.');
    if (x > 0 && y > 3 && y - x > 2 && email.value.length > y + 2) {
        name.required = true;
        describe.required = true;
        email.style.backgroundColor = 'white';
        document.getElementById("emailHelp").innerHTML =
            '<strong style="color: green">' + email.value + ' is valid</strong>';
        name.focus();
        if (name.value.length > 2) {
            name.style.backgroundColor = 'white';
            describe.focus();
            if (describe.value.length > 3){
                describe.style.backgroundColor = 'white';
                alert("Thank you for filling out the form");
                document.getElementById('register').reset();
                document.getElementById("emailHelp").innerHTML =
                    "We'll never share your email with anyone else.";
            }
            else {
                describe.focus();
                describe.style.backgroundColor = 'red';
            }
        } 
        else {
            name.focus();
            name.style.backgroundColor = 'red';
        }
    } else {
        document.getElementById('emailHelp').innerHTML = '<strong style="color: red">Email is not valid</strong>';
        email.focus();
        email.style.backgroundColor = 'red';
    }
});