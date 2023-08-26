//Funcion para agregar una nueva tarea
function crearTarea(item){
    const nuevoItem = {
        titulo: item.value,
        activo: false,
        inativo: true,
        prioridad: "Alta",
        categoria: "Casa"
    };

    // Agrega el nuevo elemento al arreglo 'itemsArray'
    itemsArray.push(nuevoItem);

    // Almacena el arreglo 'itemsArray' en el 'localStorage' como una cadena de texto
    localStorage.setItem('items', JSON.stringify(itemsArray));

    // Recarga la página actual para reflejar los cambios en la lista de elementos
    location.reload();
}

//Funcion que contará la cantidad de tareas pendientes
function countPend(){
    //Almacenar la canatidad de objetos
    let cant = itemsArray.length;

    localStorage.setItem('items', JSON.stringify(itemsArray));
    return cant;
}

//Funcion para el boton de mostrar todas las tareas
function showAll(){
    const verTodos = document.querySelectorAll(".input-controller");

    verTodos.forEach((elemento) => {
        const comprobar = elemento.querySelector(".toggle");
        elemento.style.display = "";
    });

    localStorage.setItem("items", JSON.stringify(itemsArray));
}