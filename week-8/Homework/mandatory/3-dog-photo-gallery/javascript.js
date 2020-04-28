window.onload = setup;
let unOrdredList_El;
function setup(){   
    let body_El = document.querySelector('body')
    let callApi_El = document.createElement('button');
    let addNewRandom_El = document.createElement('button');
    unOrdredList_El = document.createElement('ul');
    let br_El = document.createElement('br');   
    let p_El = document.createElement('p')
    
    body_El.id = 'body_El_JS'
    body_El.className = 'body_CSS';
    callApi_El.id = 'callApi_JS';
    callApi_El.className = 'callApi_CSS';
    addNewRandom_El.id = 'addNewRandom_JS'
    addNewRandom_El.className = 'addNewRandom_CSS';
    unOrdredList_El.id = 'unOrdredList_JS';
    unOrdredList_El.className = 'unOrdredList_CSS';
    p_El.className = 'P_CSS';
    
    callApi_El.textContent = ' Call Api ';
    addNewRandom_El.textContent = ' Add New Random Image';
    p_El.textContent = 'Connected to the API';

    body_El.appendChild(callApi_El);
    body_El.appendChild(addNewRandom_El);
    body_El.appendChild(br_El);    

    callApi_El.addEventListener('click',()=>{
        fetch('https://dog.ceo/api/breeds/image/random')    
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            body_El.appendChild(p_El);
            body_El.appendChild(unOrdredList_El);
            addNewRandom_El.addEventListener('click',showImage);
        });                
    });
}

function showImage(){
    fetch('https://dog.ceo/api/breeds/image/random')    
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{                
        // console.log(data.message)
        let li_El = document.createElement('li');
        let img_El = document.createElement('img');
        img_El.className = 'img_CSS';
        img_El.src = data.message;
        unOrdredList_El.appendChild(li_El);
        li_El.appendChild(img_El)              
    });
}