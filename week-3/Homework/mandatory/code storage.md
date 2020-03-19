   const locations =[];
      const transport =[];
      const firstRow = londonLocations[0].filter(element=>element.length>4);
      const secondRow = londonLocations[1].filter(element=>element.length>10);
      const thirdRow = londonLocations[2].filter(element=>element.length>5);
      const forthRow =  londonLocations[3].filter(element=>element.length>4 && element.length<10);
      const landTransport = londonLocations[0].filter(element=>element.length<5);
      const seaTransport = londonLocations[3].filter(element=>element.length>9);
      transport.push(landTransport,seaTransport);
      locations.push(firstRow,secondRow,thirdRow,forthRow);
     
      const ldnLocations = locations.flatMap(element=>element);
      if(transportType==='tube'){
        let tube = ldnLocations.slice(0,3);
        console.log(tube)
      } else if ( transportType=== 'bus'){
        let bus = londonLocations.slice(2,4)
         console.log(bus);
      } else if (transportType ==='river boat'){
       let boat = londonLocations.slice(2, 4)
        console.log(boat);  
      }  





const capitalAToZ = passwords.map(element=>/A-Z/.test(element));  
 const smallAToZ  = passwords.map(element=>/a-z /.test(element));
 const numbers = passwords.map(element=>/0-9 /.test(element));
 const symbols = passwords.map(element =>/"!", "#", "$", "%", "." /.test(element));
 const notIncludeOldPass = passwords.map(element => !element.includes("fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."));
 validatedPassArr.push(greaterThanFour,capitalAToZ,smallAToZ,numbers,symbols,notIncludeOldPass);
console.log(validatedPassArr)
 return validatedPassArr;





const Arr =['red Lane','yellow','black Lane'];

arr.filter(element=>element.includes('Lane'))

