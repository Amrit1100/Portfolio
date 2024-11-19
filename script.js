// document.addEventListener("mousemove", (e)=>{
//     const viewportWidth = window.innerWidth;
//     const viewportHeight = window.innerHeight;
//     let mouseX = e.clientX
//     let mouseY = e.clientY
//     document.querySelector(".chaser").style.opacity = 1
//     document.querySelector(".chaser").style.transform = `translate(${mouseX}px, ${mouseY}px)`
// })
   
let elementOne = document.querySelector(".hoverme")

let intervalOne = setInterval(()=>{
    elementOne.classList.toggle("show")
}, 1000)

let elementTwo = document.querySelector(".myimage")

elementTwo.addEventListener("mouseenter", ()=>{
    elementOne.classList.remove("show")
    clearInterval(intervalOne)
})