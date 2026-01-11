let set=document.querySelector("a")
// set.href="https://www.google.com";
set.setAttribute("href", "https://www.google.com")

let img=document.querySelector("img")
img.setAttribute("src","https://images.unsplash.com/photo-1760835249990-ff68773c7c4c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=415")


let vijays=document.querySelector("#vijay")
console.log(vijays.getAttribute("href"))

let h=document.querySelector("h1")
h.classList.toggle("lulu")
h.textContent="Hello Vijay"
document.body.prepend(h)

let h3=document.createElement("h2")
h3.textContent="Mr Vijay"
document.body.append(h3)


img.remove();

h3.style.color="blue"
console.dir(h3)

let bo=document.querySelectorAll(".h4")
console.log(bo);
   
    function says(){
      alert("Hello")
    }

let addbtn=document.querySelector("#addbutton")
let rembtn=document.querySelector("removebutton")
addbtn.addEventListener("click",says)
rembtn.addEventListener("click",function(){
    addbtn.addEventListener("click",says)
        alert("Listen removed")
    
})

let bos=document.querySelector(".Orders")
bos.addEventListener("dblclick",function(){
  bos.style.color="red"
})

let h10=document.querySelector("h6")
h10.addEventListener("dblclick",function(){
  h10.style.color="red"
})