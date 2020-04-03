/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  let content = document.getElementById("content");
  arrayOfPeople.forEach(item => {
    let createH1 = document.createElement("h1");
    let createH2 = document.createElement("h2");
    createH1.textContent = item.name;
    createH2.textContent = item.job;
    content.appendChild(createH1);
    content.appendChild(createH2)}
  )
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  //Write your code in here

  let getContent = document.getElementById("content");
  let createList = document.createElement("ul");
  getContent.appendChild(createList)
  for (let i = 0; i<shopping.length; i++){
  let createEl = document.createElement("li");
  createEl.innerHTML = shopping[i];
  createList.appendChild(createEl)
  }
}

// }

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books){
let content = document.getElementById("content");
let bookUnorderedList = document.createElement("ul")  
books.forEach(function(item){
let listEl = document.createElement("li");
listEl.style.padding = "10px";
listEl.style.margin = "10px"
let phagraphEl = document.createElement("p")
phagraphEl.textContent = `${item.title} - ${item.author}`;
listEl.style.backgroundColor = item.alreadyRead ? "green" : "red";
listEl.appendChild(phagraphEl);
bookUnorderedList.appendChild(listEl)
let imageTag = document.createElement("img");
imageTag.src = item.url;
listEl.appendChild(imageTag);
})
bookUnorderedList.style.display = "flex";
bookUnorderedList.style.listStyleType = "none";
content.appendChild(bookUnorderedList);
}


//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

 let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

 exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    url : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjN2hAarOb06RWqIwgkQcw9SWYnB4xXSR3gGWrH8wGdz717zSayptuuWKOJg&usqp=CAc"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    url : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIWFhUXFx0YGBgXFxcVFxodFRoXFxoYFxcYHiggGBolHRgXITEhJikrLi4uGCAzODMsNygtLisBCgoKDg0OGhAQGy0lHSUtLy0tLS0tLS0tLS0rKy0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwUCBAYBB//EAEUQAAIBAgQCCAMFBgIJBQEAAAECAAMRBBIhMQVBBhMiMlFhccFygbEUI5Gh8AcVQlJi0eHxJCUzgpKissLDNFNjc3QW/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QAJxEBAAICAQQDAAEFAQAAAAAAAAECAxESBCEyMyIxQVETQmGBkSP/2gAMAwEAAhEDEQA/APuMREBERA4n9quFD4an5VL/API0+eYLgile0NTrPqnTqhnooP6/YzlKGEsPPw5fraed1N9X014a7q55OjCkd4j5f47SfB8ApgMrA778j8p01OlaOp5/hM39SV3CHPrwUL3d/ny+f6vM8JgG7RYa8jckctPKXy0bjXWSLRG0ibycVHU4ap18wTvy001/Wk1KfB+ex9Dra9v15zpykzFOIvKZhzJ4Ne1zceBv4+PL9fKYcHW45E68zz13nQMkyVI5yjUOfpcCXS5NvC5+l5vYfABRb+8swk8tImZTEQrjgB4/WBw9R9dzLApPbRuTSt/d3gbQ+CvpcfSWOWeMsbk0qzgN7Ea7f5ynxeHZWyhBpsdSD4bc51mWY1KfOTFtI045aVRd0v8A8V7+one/s/wxXrGItmC6eFiZorT5WnQdFxq/oPeX4LbyQryxqkugiInqMRERAREQEREBERApOlQ+7T4vYzmgs6fpP/s1+L2M5wCeV1XsltweDECZhbwBJEEzLkTuFBZiFUC5JNgANySdhNI8dwun+kUtRcWdTp46Gb2JwyujI4urAqwPMEWIlMU/1mttMmEOg2s1SwFvDQzuIgWlLH0WyZaqHPfJZgc2W98tt7WN/C02xOX4hgMmLwNGgRTVRXfbNYHLewPmxAv485s4TjTImM67tfZWIzABS4IzIDyDWsCdBqDJ4/wjS/AgCUPDuNVKtWiqmnUSojNUNO7dSQoZQzhiNSStiATbyMtOL4g06Lsts1sqcu25CJ/zMsjX4h5gOJU6tEV1b7shjc6WCEg39MpjhmOSvRSsoOVxcX3FiRY256GcnRw5p1KvClvkqOjKeYosM1bXlcoVHm8t+igFJsVhbgCjWLKPCnWAqL8u9OrVhK/tMP14zna3SOoKVLFLTQ0KlUJbMetysxUPpoDcXy6/LWQ8d4piKVao33q0FUdW9NEqUrjv/aDYsovppY2vIikpdSRteeyj4ytRsThOrqqFJdlBTNtTa7XDDNo1gNO8TrL8iczCEQEETMiHkCIS86MjtP6D3lMu8u+jo1f0HvLum9kK83hK9iInrsJERAREQEREBERAqOkY7C/F7Gc/lnQ9IT2F+L2M5rFglGsxU5TqNCLDeeX1XsbcHilAmYE+b1ekH+rlK4tvtZbMQKhzd/LYrsq5QDaw115zu6OMp0zSwzVS1Vl0vdmbKpYsxG2x3lM00tns3it5ojhQGJ+053zGn1ZXs5MoNxyuDe535zOlxegy1HFVclM5XbWwIANr8zqNuZtNb/8AqcHYN9oUKRcE5gNgbXt3v6d/KIiUd09fhQbE08QXYNTRkCjLlIfcnS99ufL1mpS6Oj/SlquHTEtmIy5SvIAHMbgC3Lf1tLDh/E6VcMabE5TZgysjA2uLq4BFxqPGQLx2iXCXdcxAV2putNydglQjKSeXjyvG7HdLgsCyBQ1VnCLlUWyDQWuQO8beOnO15ljOHJWyF83YYMMrsgzDUE5SL285hieMUqdQUnYhiCe61rLbW9rHdRYEm7ASXA8SpVSyo3aW2ZSGRhfYlWANj4yO/wBndI2ETrOut28mS/8ATfNb8fpK+nwKmtdsSDU6xtyXOUiwAUoNCAAALjkOc86TYytTFHqWUZ6yUmuobvnvD0tt5yB8XU/eHU9baiMP1xFkAvmyWLkXtpfcR30RtGnRighXWoUV+sWk1RjSVte0qeROgOgvtJMR0dDh1NesKdRiz0wUCtm3W+XMARpYH6yybH0cjVRVQ00uGbMMotb+LbmJrYvjVCkiO9QAOAU3uwNrEC1+Y3iJs6+0uN4VSqhAym1M9nKzJYEZSOyRdSNCOc3KaACwsBsByHlNBOO4ctlFZb5gttRYtbLe40BuLE6G+l5sY7FinYdXUc2uci5rAbkkkD5XubHSNS5TlJgZp4rjVFKK4gsTTcAqQrG+YXGgGnztIaPSGg9RaYZruSqMabim5UXISoRlbQcjI4yLLLrtLno5u/oPeVDS46P7v6D3l3Te2FeXwldxET1mIiIgIiICIiAiIgVXSDuL8XsZzePB6tyoLHI1lUXJNjYCdH0iHYX4vYylUWnl9V7G3D4OCxOAq/uqnQ+y1BVDKrKFVjZWzl+yToQLeNzL/i7VOuwlenQqVVVagKgBXHWqgW4cjKd732sZfgz0iVc9rNuQ4UmIShjA+GqB2aq62swJqdlVW3abX+K1ra3kdXKtLh9JqFS9JkeooouxXKrKSQBzc5r87EztgsytHI25SjVc4zGdWjgvSUUmZHWmXoqwPaIsNSLX3sZT4vBVGwqM1LFVa4ZDVNS5y5XBcUlJy+hQbbmfQmnlvGRz0nblscztjcI74d7BapsoL9XnyBGqMOyDobjW1+drxRrKOJvowDUVphsjhC6sWyhrWvY/WdNa25tHWqdMwN/MeX9x+M55J25/pdQaotGmtJqv36O4CZhkQ9q5OnPbnIcJhVp8QvSw5Sk2HCErSZEDl84v2QL5bA+GgOxnUjx3mRERbtpG3E8QdxhcZhxQqZi1dixTJSVGLOrBzowy/wAK3N9NJs8TrdZh8KrUaiA16ACst2KoyFiVW+VfG9vznWHymMnkbcviMPUVce3UuxqVVKALmL5adJbi3K6nU2tvGOw+JfEPmodbRZR1X3/VU0uva62la7Nm8QbW0nUieERFzbi3wtf91nC/Z3aqqimR2bNaoNVJbVcovfabnSioQ2BIpVLLXWowVC2RVXLZslwO/sP5TOoyz20nmbRZZb8B3f0HvKtRLXgY1b0HvLOn9kKcvhK4iInrMZERAREQEREBERAq+PLdF+L2Mo7ay+433V+L2MpDvPM6r2NmHxZCehZiJizX0mZakBmYaQgTNI2aHsNSbADX6zmuNdIgH6ilq50ueXInTlYgggzLpZxV6RVFJBewWwNyc2lnGx8iCCJWVKK0KWQowfNd6jWIY2YraxuFGtgQNR4y3Dji1439OMluNJmPtk2Kv3nLE21O99dQuw1H5/jVdIcYtJF6tvvWIyhLgC5A7Wtr325328s2rjRr6Wvy12B9QSd/OUnDENbEvVa/Z2uuxNxox5AX2HPnz9fLFK01EQ83DN7X5TM9kFbjD4e1OrXrFyB2EqNTQAgBRoddFA0HL5DpOB8SxNSj1tB3YjtPTzO7ZSWsVFQFX7h7F1OhtOcenT69qeUuiXKMderNVagyk/xLcFwPFR8rmjgUo5TSLgquXPmsbEEG1rAHtHUa6mefkrFfj+t0ZI1t3XR7jIxCX0zDwvY8rgHUa6EHYy1InzzgWJ+zVFKklNARe+lze1/4je5O501n0JKgIuDcEXEyXrqey2ttinymJMz9Z4VnDp4BMjPBPX2koYqJa8E3b0HvKpJa8F3b0HvL+n9sK8vjK2iInrMZERAREQEREBERAq+Pdxfi9jKVZc8f7i/F7GUs8vqvZLZh8UqieFZjTaSZrzMtYhDPbeckAnlY9knwF4NuF4zTNTiG1+ppFx6myi5AB0uTY3sflNTinFTTFVainKdEBNwbEajbsjfTQHnZiDfnhZauMSlRlZkym/3ikEhrEXUjYbHS0peO9C8RinDdcmUaZMrJZSb6WZidQOYvYaiW48lNxuVV9z9KXAuK2c6A6sSCV0tudbEXvp6+sr8IWVXbChmYkaFQc9wdTbLoLk6k73l5X6K4ulRqU6a0gxPZs1tARbMXC6nXlYX02tNXgfBcZRzs9NC50utSjsNbGzDnrLrZZmJmP9Iri4qLieMrrTUVabLUFQsWLA3VgAEVRa1jc63Ou8s+E0nxD9fV0p3+7TYWGxPl58z5DWQ9FsVXxBqVl7F9AatM5vAaNp5+Vh4zo8Twyoi6GmummZgB8soMvxzWIiba2z3i1p1ES0MQoDac9fQzuOjLk4amT/UPkGNv7TjcFgkCEVa2Z73GTM2/Kzqs6jo9jxpRFyFU2JUKbAgbAnXW97zLntSZ+MtWHBliN2rMQvG8bTwLMgYMzrEZEFp6BMTvAKZa8E3b0HvKhtZb8E3b0HvL+n9sK8vhK2iInrMRERAREQEREBERArOOnsL8XsZS6S6473V+L2MowLmeV1XsltweCQCZL5Txp6BM61JeQ449g/L6iSqbiYYlbqRObd4lEwp6OptqN7G9huDa1973kmJqmwN7Eb2/P5W1kFNddfG+mnlf6H5zLGVABc7kWI8x/mJTSImU9NG8kRIxve557X+siqkXA2P4ae4mNGrpcb3Cg/EwBPrb6zCpiwzuobOosNybMCc1ifwnc31Ono71bTzG8QamugGpsbgkeoH5Tn6xc6kA35+s6MU1dstr67HUa7/KedIuFFsrUk/pIA5cryb2ntH4spwpf61M/rm1c7fX56fSW/RFs1c2tohOhvzA/t+EU+DZBnqIahynsXBAJGmh7xHnceU2ejXD+oytzYZWHkbfQ2/Oc1mrjPmmYmsR2dORPbzEtPRLXm6ZNa0jMzJmJko08lnwM6t6D3lXLXgm7eg95d03thXl8JW0RE9diIiICIiAiIgIiIFXx/uL8XsZSiXPSA9hfi9jKQNPK6r2S3YPBlJEkI3maHWZlzYWJipmUOVTxOgVOYC4O9raHzvNbrA2hXbz/XhLxhfQ218ZXVMNkby3H65yjJ8O8IrjtNvjLQx46tUfl/Fpe2qsGsOQKgHyJkGB4aEzVFeyv/Ce0LseyVbkLnw5y7IuJT4rChDTyswTP3L9i9iRpy11lEXlvjbfwGFKMWNvlLPrQAbzSSpeRYqobTr+pudk15z3VvGcfbnYT3A1OwpdgM4012zDz5yp4hXpLUXrqioL3Fza+XX8B/aZ9FuF4Sua9XqRUXOArOhy6DUIG89z5y6tOUOs9orERDr8NWzIradoA/iJODI1XTSwG34TIA/KWsLP0mUwvAkuXqCWfBd29B7yrBlnwPd/l7y/pvbCvN4St4iJ67CREQEREBERAREQKrpB3F+L2MoV8pe9Ie4vxexnPlp5XVeyW7B4JQZkAf1pI1EyUzMuThpkWkCnWZmEaZl9ZrY86A+f6+k2Jq4xthKs3hKzF5QxRtJrcQw+dCvPceRG0mUz15j/ABr13U/D8fqUbRhyMsWNxKjjmBzjMujjYyk4FxLE1Kv2dQCwBJzHKABpqdfESymPnG6k24/a843hL0qmW2bKeQPnzl9wjBU6VFEoiyWzC5JJza5ieZN5V/urE1Oy/Vop7xVizW55RlGvnL8KFUKBoosLeAE04otWNSzZ8kW1ES8M9tBE9A0lijby9ovMSJ7aSgzS14EdX9B7yqlpwEav6D3l/T+2FeXwlcxET1mIiIgIiICIiAiIgVHSPuL8XsZz/nOg6RjsL8XsZz5E8rqvZLd0/gkRrz0LMB9PeZX/AAmZczBnqzGeiEJFmnigQbnabYaZHWcXpyjTul+M7VZaFeblTBg7aem0gOBYbETJbDeGmuak/bQrneaHQvCf6TiKttlVfxJY/wDTLatg6n8t/mJjwXAVKVVmy2R9WuRuNiAJ108WraYmEZrRNO0r28xYT1tIM2sSITxmkirPCsIYietPSsxaAXWW3A929B7yoWW3A939B7y/pvbCvL4yuIiJ6zGREQEREBERAREQKjpH3F+L2MobS96S9xfi9jKBTaeV1XsltweDOUlPpNTfMqI5dQMyHICtxVazkMQLdU17XtddDe0uidJojhFEFmFMBnDhiLhj1pDPqNRcqPwlNZr/AHLZ3+FDi9JgnaILsEsVcWYhTlN1Fu8tibA5h4yZcdnpl6alrMy2e9L/AGbMjalSbXU8pV4ahhKj2R0qNoezWLMMvV2OjX0y0j8gZa0cIiqyAWVixIud3JLa3uLknaTPCP5RqUWF4vde2mWp1ZqBAc11AB0chRfW1tLW8NZnT4uv3it2WSxtcnssqMGY2sly5Fj/ACnfWR/u6gSSEBNgpIZuShcpsf5bflJv3fT17J7Qse0+twg118EUfI+JumcaNWZpxSl2j1g7JykWJIILg6Wv/A+38hOwmeK4lTpsisSC9spsbG7IlvXM6/Iym4jhKFXsU2TMzMhJLsQQKzMFs3ZcdbUPozA6S04lQpul6qrlUNfNsA6lG1+FiJOqxr7RuZetxZAAbPY9Xaylj9+xVeytyBpe/n46SfA8QWpm3BRmDA8sjul77EE0228JguFpsXJ1Y5QwzE2ydpBlBstr30A385Nh8GlMsyg3Is12Yi2Z32Y2HaqOb+fgBInjpHfaBOKp1YqOrIjAMtxmLAqXJypciyi58PxheM0b5czd8ICUexLFFFmy2K3qIL7doeIkeIwuGUBKhUAg5Q1QjshSGCgtfKFYggaAGDhcNUbKACVYOQrtoVdG5HSzohtyKjSdap/Eo7vBx6hcjOQRcm6VBonWZiLrqo6qpr/SZmeNUgWDZlyuKeqPqSqv2QBcjK4udhIKfBaQUioiOzE3uDYhjUbLYk6Wd9Njcm2slOAw7NfKrOjAntEkMUUai+5QLodwAdd4/wDP/J8ntPjVFstnPbfq1uji7eAJXX19fA23mE1P3dS7AyaUzdBmawINwSt7NY6i97cpsVGnFuP46jf6yQy14Hu/oPeUwMueAnVvQe8t6b2Q4y+MriIiesxkREBERAREQERECn6Sdxfi9jOdYzoekx7CfF7Gc5mnldV7JbsHikQ6T0P5zBWMyVZmXqzGcLqVFqhKnV9Y6sCt7gKioVNrW7oOh8vXw8Org1LV75yunaFgrk2DBiVupykjwvpytFE0OM1KoCGipZlbMRqAwHZyFuV89x8Etre09lVoj7QLwmspqFKmUvfXNU0+6o0wcpuM16bHNe/a3JmzhuG1FqI7PdUQra7G5Ykg2Ogtci99QRcCwtDh8TXp5aWVqp6xw1VlZRbMGXYbZXK3Gg6vznh4xV26lu8dTTqgZRTZ72APazLltex+Yv3MXns53H2zxHCSwdcwyk1GHeB+/vmGYG4tmexGouP5dZanCS+HTDu4KWtVNgC4sdALEL2iDty0tGBxtSpWYFbUggKnI6m5tcMzWBPe0A2sb8phgcXiCyK1PS5ztlZQNX1F/DKg/qz3G15Hz/4fETg9drlsRZmC58gYBmVaakkZ9Ach2s3atm01l/czEMprMVdGUg59M4YDJZ7BVuLDU2G/OaPE6+IXF3piq1NVVsiqcj9mqHTOTkU6UzsSSQBbWWFPiFU0OsNO1QmyqFqW7RyqWBXMq8ybaAEzqZvERMTDnsz4nw1alOnTc2VSL5b6jKVK6knKQfyEgq8FJ6s9Z26eU5yt2LCotRzuLB7EEeDETUFWsPsyuKuZKzrUIzMGRadfI7FQAwzdTyGvKbGGxOItSXKADTDMWVrqV0dGu18xJXL5Bib2F4+Ufqe0/hheCFChaorFKnWAmnzNPq2y9o2v3vUnytO2AvW626mz5wCtyL0lpEA337N7/wBRHnPOFYqq9INVQI9+6ARb/i+YvztebSvpOLWtuduq1jSbNMZEak9zSt3pLeW/R06v6D3lGWlz0bPaf0H1Mu6b2wryx8JX0RE9dhIiICIiAiIgIiIHPdM64Skh/r9jOYoYi/qN/wBeEvP2i1MtBCTb7z/tacZgcWMuhF7actuf+E83qa/OZbsE/BfrU8psKZWUapYd3yPh+vebWbSx22PLeZFrcRZmN5wnRvMlWg+ZSrVMRSyqCHyqzkVKjZj1ig0wo0Fs41Mt6fEKr4WvVd6BQLWAsjEHq3dQT2wMpVbZd9QbnadzTSNOmE9M5zjXEGpotOi2Q9SXRhkCHIAFRcysWJJHZUXsNxzkxfF3L0xSq0grUajnOpOtPq+YYXHaYcu6Tc2tI4yjS/KyIV0vlzrm3tmGb8N5rrjS2H61BctSzKBqCStwL+ukq+j74fq8OOy1bKGJIvVD5T1j1NLo1ywJa29uYiK9kL+lWVxdWDDxBBGhINiPOKhnJ8AxpUYXLiA1Oq9VMlkCixqMpXTMWuADrrmGg0k+F4hVfD1671qTIOvUDq7D7p3UFjn1GVTp4FTc63maaTp0N5heU3EMe61aQRl6pitNsmRmV3sVDK38BUju6i99RNStiMgxzGtqlyFqZWVR1KMOyMpsSSAL6+tzI4utOjVtJFn1lHV4yKdWlRUoKYVM+wCqytlIOba6gaKR5i4E8XizdafvKeT7QKQGU5iGpB75s24JHLkfk4yleLUBkitIE52/GTLacksmeXPRc6v6L7yjQeMu+i/eqei/Uy7pvbCrN4S6KIieuwEREBERAREQEREDg/2wV8mEpt/8v/Y0+fcGxqsoO1vDxN9b+vjO2/bg1sHR/wDu/wDHUnzDo5i+r3sA3iL285kz13uWnDbUPoWF7QBABHj7TbULYoVuG300101B38JR4DiyBdGBvrp9LXvrb8pYvjbi4YXnn2rO2ncLHDYWmncRE8cqhfxtvJiVy5coK22sLWHlOZq8Z3uSOWw19JH9sAA7f9/STwlHJ1q1dhtpt5fKSdYPb6/4zk14oo2J+dtP17yVONAXBb6SOEp26W9738Z6HA0J/QnNDjY1uxHz/wA5nV44ml7keokcZRtfLXTYEeVrQ9QWtpb8pzq8dS+xsfPwinxoBjdb39tL/iDJ4yncLx1S+cKub+awLWt4+EwqgNoRfxvrtKs8aS+XKdf6hb5/nJG4kLd2/wDvACRxk5NtaY/R/LT1ggX2G99vzlevEgdcpH+9eeniQ3I8u9J4ynksw/ht+vxEwDnY+HoDz8JoVMaCpA0J21F/WVNes6nWofxJ3294iu3PJ0ge2oPhz9p0XRBiWqX8F9ec+afan/8AcuPI6/4aTu/2dls1bM5Y5V53G7S/BXWSFeW26y7eIieoxEREBERAREQERED5r+3T/wBLh/8A9H/iqz4hjtx6REot5LqfS74Jv+vGWh5/P/qMRMt/tdDUbn+ucywX6/EREfiI+055ySpuPX+89iQ7Sch6zIbj0P0iJCBd/l7TYxPdHqPqYiQlnT3+R+smw+x+GInMphG23+6fqZOu8RA8r90fKV3Ee5+vOInVfslocM7368DPp37Mf9piPRPq8RLcfshVfxl9AiIm9lIiICIiB//Z"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    url : "data:image/jpeg;base64,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"
  }
];

exerciseThree(books);
