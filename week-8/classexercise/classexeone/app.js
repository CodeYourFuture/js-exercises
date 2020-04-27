const display = document.getElementById('show')
fetch("users.json")
.then( res => res.json())
.then((data)=> {
  
  console.log(data)
  data.forEach(element => {
    const hello= document.createElement('p')
    display.append(hello)
    hello.innerHTML=`${element.name}`
    });
  
})
.catch((error)=>{
  console.log(error)
})
fetch("https://www.randomuser.me/api")
.then( res => res.json())
.then((data)=> {
  console.log(data)
 

  
  // data.forEach(element=>{
  //   const p = document.createElement('p')
  //   display.append(p)
  //   p.innerHTML= `${element.name.title} ${element.name.first} ${element.name.last}`

  // })
  
})
.catch((error)=>{
  console.log(error)
})


// function displayPerson(person) {
//   const div = document.getElementById('content')
//   // const p = document.createElement('p')
//   // const name = person.name.first
//   // const picture = person.picture.medium
//   // p.innerHTML = name
//   // const img = document.createElement('img')
//   // img.src = picture
//   // div.appendChild(p)
//   // div.appendChild(img)
//   div.innerHTML = `
//     <p>${person.name.first}<p>
//     <img src="${person.picture.medium}" />
//   `
// }
// fetch('https://www.randomuser.me/api').then((response) => {
//   console.log(response)
//   return response.json()
// })
//   .then((data) => {
//     const person = data.results[0]
//     displayPerson(person)
//   })
