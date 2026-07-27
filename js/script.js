document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(".card, .product, .hero-box");

    elements.forEach((element, index) => {

        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";

        setTimeout(() => {

            element.style.transition = "0.6s ease";
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }, index * 150);

    });

});


// Recherche des produits

function searchProduct(){

    let input = document
    .getElementById("search")
    .value
    .toLowerCase();

    let products = document.querySelectorAll(".product");

    products.forEach(product => {

        let text = product.innerText.toLowerCase();

        if(text.includes(input)){
            product.style.display = "block";
        }
        else{
            product.style.display = "none";
        }

    });

}