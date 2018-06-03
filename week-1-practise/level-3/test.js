function century(year){
    var century=1;
        for (y=100; y<=2000; y=y+100){
            
            if(year <= y){
                break;
            }
            else{
                century = century + 1;
            }
            
        }
        return century;
    
}
var result = century(70);
var result2 =century(1998);
var result3 = century(1888);
console.log("we are in century "+result);
console.log("we are in century "+result2);
console.log("we are in century "+result3);