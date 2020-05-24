window.addEventListener('load',()=>{
     let long;
     let lat;

     if(navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(position =>{
             long = position.coords.logitude;
             lat = position.coords.latitude;
             /*no longer accepting sign ups can't create api key*/
        
        });
    
    }

});