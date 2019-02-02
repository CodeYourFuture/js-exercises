/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
function changeColor() {document.body.style.backgroundColor = 'red';}


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
document.querySelector('#alertBtn').addEventListener('click', function () { alert('Thanks for visiting Bikes for Refugees!');} );


/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
document.querySelector('#addTextBtn').addEventListener('click', function(){
    const p = document.createElement('p');
    p.innerText = 'Read more below';
    document.querySelector('.buttons')
.appendChild(p);});


/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
document.querySelector('#largerLinksBtn').addEventListener('click', function()
{
    document.querySelectorAll('a').forEach(a => a.style.fontSize = 'x-large');

});