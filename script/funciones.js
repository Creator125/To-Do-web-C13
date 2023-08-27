//Funcion para agregar una nueva tarea
function crearTarea(item){
    const nuevoItem = {
        thing: item.value,
        checked: false,
        inativo: true,
        priority: "Alta",
        category: "Casa"
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
    const verTodos = inputController;

    verTodos.forEach((elemento) => {
        const comprobar = elemento.querySelector(".toggle");
        elemento.style.display = "";
    });

    localStorage.setItem("items", JSON.stringify(itemsArray));
}


//Funcion para eliminar una tarea
function eliminarTarea(item){
    itemsArray.splice(item, 1); //Eliminar el objeto dentro del array
    localStorage.setItem("items", JSON.stringify(itemsArray));
    // Recarga la página actual para reflejar los cambios en la lista de elementos
    location.reload();
}