/* =========================================
   SENOMARKET - JAVASCRIPT PRINCIPAL
========================================= */


/*
=================================================
IMPORTANT

La connexion Supabase n'est PAS créée ici.

Elle est créée directement dans index.html,
dans la partie dédiée aux avis clients.

Cela évite d'avoir deux fois :

    const supabaseClient = ...

dans la même page.

Avant cette correction, le navigateur pouvait
bloquer le deuxième script à cause d'une
redéclaration de "supabaseClient".
=================================================
*/


/* =========================================
   ANIMATION DES ÉLÉMENTS
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const elements =
            document.querySelectorAll(
                ".card, .product, .hero-box"
            );


        elements.forEach(
            (element, index) => {

                element.style.opacity =
                    "0";

                element.style.transform =
                    "translateY(30px)";


                setTimeout(
                    () => {

                        element.style.transition =
                            "0.6s ease";

                        element.style.opacity =
                            "1";

                        element.style.transform =
                            "translateY(0)";

                    },
                    index * 150
                );

            }
        );

    }
);


/* =========================================
   RECHERCHE DES PRODUITS
========================================= */

function searchProduct() {

    const searchInput =
        document.getElementById(
            "search"
        );


    if (!searchInput) {

        return;

    }


    const input =
        searchInput.value.toLowerCase();


    const products =
        document.querySelectorAll(
            ".product"
        );


    products.forEach(
        product => {

            const text =
                product.innerText.toLowerCase();


            if (
                text.includes(input)
            ) {

                product.style.display =
                    "block";

            }
            else {

                product.style.display =
                    "none";

            }

        }
    );

}
