
// Esta clase va a permitir crear elementos en el HTML sin especificacion

class DomBuilder{
    constructor(){

    }
    h2(title){
        const h2 = document.createElement('h2');
        h2.textContent = title;
        return h2;
    }

    img(src) {
        const img = document.createElement('img');
        img.src = src;

        return img;
    }

    p(content){
        const p = document.createElement('p');
        p.textContent = content;

        return p;
    }

    // El parametro id es para identificar el boton y el producto que selecciono
    button(content, className, id){
        const button = document.createElement('button');
        button.textContent = content;
    // Class list es lo que tengo que usar para darle los estilos al html, creando la clase en css
        button.classList.add(className);
        // Metodo que permite agregar atributo al boton
        button.setAttribute('data-id', id);

        return button;
    }
}