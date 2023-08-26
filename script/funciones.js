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