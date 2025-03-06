function togglePasswordVisibility(fieldId){
    const field= document.getElementById(fieldId);
    if(field.type==='password'){
        field.type='text';
    }else{
        field.type='password'
    }
};

/*Carga categorias*/
let categorias=["Esmaltes","Removedores","Decoracion","Herramientas","Equipos"]

/*metodo para cargar categorias a la lista*/

function CrearCategorias(array) {
    /*obtner el contenedor donde se insertara la lsita*/
    const contenedor= document.getElementById("listasContainer")
    
    //Creamos la lista desordenada
    const ul= document.createElement("ul");
    
    //reecooremos el array y cremaos los elementos de la lista
    array.forEach(item=>{
        const li=document.createElement("li");
        li.textContent=item;
        ul.appendChild(li);
    });
    //limpiamos el contenedor antes de agregar la nueva lista

    contenedor.innerHTML='';
    contenedor.appendChild(ul);
};

//ejemplo de uso
CrearCategorias(categorias)
