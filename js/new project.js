let alis=Array.from(document.querySelectorAll(".project1 ul li"))  
console.log(alis)
let viewedfeature=Array.from(document.querySelectorAll(".project1 .progress-container")) 
console.log(viewedfeature)
alis.forEach((li)=>{
li.addEventListener(("click"),(e)=>{
 alis.forEach((li)=>{
    li.classList.remove("active")
 })   
 e.currentTarget.classList.add("active")
 viewedfeature.forEach((view)=>{
view.classList.remove("active")
 })
    document.querySelector(e.currentTarget.dataset.content).classList.add("active")

})
})

const fun=()=>{
    let alis=Array.from(document.querySelectorAll(".project2 ul li"))  
    console.log(alis)
    let viewedfeature=Array.from(document.querySelectorAll(".project2 .progress-container2")) 
    console.log(viewedfeature)
    alis.forEach((li)=>{
    li.addEventListener(("click"),(e)=>{
     alis.forEach((li)=>{
        li.classList.remove("active")
     })   
     e.currentTarget.classList.add("active")
     viewedfeature.forEach((view)=>{
    view.classList.remove("active")
     })
        document.querySelector(e.currentTarget.dataset.content).classList.add("active")
    
    })
    })
}
fun()
const fun3=()=>{
    let alis=Array.from(document.querySelectorAll(".project3 ul li"))  
    console.log(alis)
    let viewedfeature=Array.from(document.querySelectorAll(".project3 .progress-container3")) 
    console.log(viewedfeature)
    alis.forEach((li)=>{
    li.addEventListener(("click"),(e)=>{
     alis.forEach((li)=>{
        li.classList.remove("active")
     })   
     e.currentTarget.classList.add("active")
     viewedfeature.forEach((view)=>{
    view.classList.remove("active")
     })
        document.querySelector(e.currentTarget.dataset.content).classList.add("active")
    
    })
    })
}
fun3()
