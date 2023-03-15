
const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const text = input.value;
        if (text !== "") {
                const li = document.createElement("li");
                const p = document.createElement("p");

                p.textContent = text;
                li.appendChild(p);
                li.appendChild(addDeleteBtn());
                ul.appendChild(li);

                input.value = "";
        }

        // Comprobar si la lista de tareas está vacía y mostrar el mensaje correspondiente
        const items = ul.querySelectorAll("li");
        if (items.length === 0) {
                empty.style.display = "block";
        } else {
                empty.style.display = "none";
        }
});

function addDeleteBtn() {
        const deleteBtn = document.createElement("button");

        deleteBtn.textContent = "x";
        deleteBtn.className = "btn-delete";
        deleteBtn.addEventListener("click", (e) => {
                const li = e.target.parentElement;
                ul.removeChild(li);

                // Comprobar si la lista de tareas está vacía y mostrar el mensaje correspondiente
                const items = ul.querySelectorAll("li");
                if (items.length === 0) {
                        empty.style.display = "block";
                } else {
                        empty.style.display = "none";
                }
        });

        return deleteBtn;
}
