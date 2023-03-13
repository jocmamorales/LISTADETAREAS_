const input = document.querySelector("input"); /*aca llamo al elemento input*/
const addBtn = document.querySelector(".btn-add"); /*aca llamo a la clase */
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) =>{
e.preventDefault();

const text = input.value;
if(text !== "")

const li= document.createElement("li");
const p= document.createElement("p");

p.textContent =  text;
li.appendChild(p);
ul.appendChild(li);
li.appendChild(addDeleteBtn());

input.value ="";
empty.style.display="none";


});

function addDeleteBtn(){

        const addDeleteBtn = document.querySelector("button");

        deleteBtn.textContent = "X";
        deleteBtn.className ="btn-delete";

        /*longitud igual a 0*/
}