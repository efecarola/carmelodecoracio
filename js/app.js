
function buildProductCard(product){

    const div = document.createElement('div');
    
    const title = domBuilder.h2(product.name);
    const image = domBuilder.img(product.img);
    const description = domBuilder.p(product.description);
    const price = domBuilder.p(product.price);
    const button = domBuilder.button('Seleccionar','btnProduct', product.id);
    


    // elementos al contenedor (html) DIV 
    div.appendChild(title);
    div.appendChild(image);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(button);
    
    return div;
}

// Funcion hace click
function onSelectClick(event) {

    const idProduct = event.target.dataset.id;

    selectedProduct = products.find(function(product){
        if (product.id == idProduct){
            return product;
        }
    });
    

    selectedProducts.push(selectedProduct);   
    

    buildCart();
}



function buildCart(){

    const lastProduct = selectedProducts[selectedProducts.length -1];
    const card = buildProductCard(lastProduct);
    selectedContainer.appendChild(card);

    totalProductsContainer.textContent = selectedProducts.length;
}



const domBuilder = new DomBuilder();

let selectedProducts = [];


window.addEventListener('load', function(){
   
    const productContainer = document.getElementById('productContainer');
    const selectedContainer = document.getElementById('selectedContainer');
    const totalProductsContainer = document.getElementById('totalProducts');
 
    products.forEach(function(product){

        if(product.available){

            const card = buildProductCard(product);

            productContainer.appendChild(card);
        }
    });


    const btnProducts = document.querySelectorAll('.btnProduct');

    btnProducts.forEach(function(btnProduct){

        btnProduct.addEventListener('click', onSelectClick );
    })
})