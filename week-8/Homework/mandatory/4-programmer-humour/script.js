function getHumour(){
    fetch ('https://xkcd.now.sh/?comic=latest')
    .then((response )=> {
        return response.json();
       })
       
       .then((data)=> {
           console.log(data.title);
           console.log(data.alt);
                      
          getData(data)
       })
    
       .catch((error) => {
            console.log(error);
            
        })
    }

    const main = document.getElementById('main')
    const imgEl =document.createElement('img')
    main.append(imgEl)

    const getData= (data) => {
        
        imgEl.src = data.img
        
    }

    getHumour()