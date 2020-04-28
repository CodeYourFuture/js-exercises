// Setup my page for onload
window.onload = setup;
let unOrdredList_El;
// Setup function for create elements and fetch data
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
    p_El.textContent = 'Connected to the API Server';

    body_El.appendChild(callApi_El);
    body_El.appendChild(addNewRandom_El);
    body_El.appendChild(br_El);    
    // Fetch data from API Server
    callApi_El.addEventListener('click',()=>{
        // Promise fetch data from this URL
        fetch('https://dog.ceo/api/breeds/image/random')    
        .then((response)=>{ // if fetch it was success return jason file(objects)
            return response.json();
        })
        .then((data)=>{ // Then If data recived show message and declare click event for addNewRandom
            body_El.appendChild(p_El);
            body_El.appendChild(unOrdredList_El);
            // Call showImage in click event
            addNewRandom_El.addEventListener('click',showImage);
        });                
    });
}
// showImage function
function showImage(){
    // Promise fetch data from this URL
    fetch('https://dog.ceo/api/breeds/image/random')    
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{                        
        let li_El = document.createElement('li');
        let img_El = document.createElement('img');
        img_El.className = 'img_CSS';
        img_El.src = data.message;
        unOrdredList_El.appendChild(li_El);
        li_El.appendChild(img_El)              
    });
}