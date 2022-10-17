const div2=document.querySelector(".div2")


div2.addEventListener("mousedown",()=>{
    div2.addEventListener("mousemove",dnd )
});
document.addEventListener("mouseup",()=>{
    div2.removeEventListener("mousemove",dnd )
})

function dnd({movementX,movementY}){
    let getStyle=window.getComputedStyle(div2);
    //  console.log(getStyle)
    let left=parseInt(getStyle.left);
    let top=parseInt(getStyle.top);
    div2.style.left=`${left+movementX}px`
    div2.style.top=`${top+movementY}px`
    //  console.log(parseInt(left),top)
}


const fill=document.querySelector(".fill")
const emptys=document.querySelectorAll(".empty")

fill.addEventListener("dragstart",()=>{
  fill.classList.add("dragS")
})
fill.addEventListener("drag",()=>{
    fill.classList.add("dragging")
})
fill.addEventListener("dragend",()=>{
    fill.classList.remove("dragging")
    fill.classList.remove("dragS")
    fill.classList.add("fill")
})


for (const empty of emptys){
empty.addEventListener("dragenter",(e)=>{
        e.preventDefault()
        e.target.classList.remove("hover")
        e.target.classList.add("enter")
})
empty.addEventListener("dragover",(e)=>{
    e.preventDefault()
    e.target.classList.add("hover")
})
empty.addEventListener("dragleave",(e)=>{
    e.target.classList.remove("drop")
    e.target.classList.remove("hover")
    e.target.classList.remove("enter")
    e.target.classList.add("empty")
})
empty.addEventListener("drop",(e)=>{
    e.target.classList.add("drop")
    e.target.append(fill)
})
}