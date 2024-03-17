const btnAgregar = document.querySelector('.agregar');
const btnBorrar = document.getElementById('borrar');

const inputTarea = document.getElementById('inputTarea');
const containerTareas = document.getElementById('containerTareas');

btnAgregar.addEventListener('click', agregarTarea);

const tareas = [];

function agregarTarea(){
    let tarea = inputTarea.value;

    if(!tarea){
        alert("Debes agregar una tarea al campo de texto");
        return;
    }

    let li = document.createElement('li');

    let texto = document.createElement('p');
    texto.innerText = tarea;
    tareas.push(tarea);

    let span = document.createElement('span');
    span.innerText = "🗑";

    li.appendChild(texto);
    li.appendChild(span);
    containerTareas.appendChild(li);

    span.addEventListener('click',(event) =>{
       const listItem = event.target.closest("li");

       if(listItem){
        listItem.parentNode.removeChild(listItem);
       }

    });
}



