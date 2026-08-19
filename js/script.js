/* =========================================
   SENOMARKET - JAVASCRIPT PRINCIPAL
========================================= */


/* =========================================
   CONNEXION SUPABASE
========================================= */

const SUPABASE_URL =
    "https://vfnqwdwgkocpkkaofrum.supabase.com";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_BOFyx3zpbcwtN6h-3N0wLw_L1QOJWR-";


const supabaseClient =
    supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );


/* =========================================
   ANIMATION DES ÉLÉMENTS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const elements =
        document.querySelectorAll(
            ".card, .product, .hero-box"
        );


    elements.forEach((element, index) => {

        element.style.opacity = "0";
        element.style.transform =
            "translateY(30px)";


        setTimeout(() => {

            element.style.transition =
                "0.6s ease";

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0)";

        }, index * 150);

    });

});


/* =========================================
   RECHERCHE DES PRODUITS
========================================= */

function searchProduct() {

    const searchInput =
        document.getElementById("search");


    if (!searchInput) {
        return;
    }


    const input =
        searchInput.value.toLowerCase();


    const products =
        document.querySelectorAll(".product");


    products.forEach(product => {

        const text =
            product.innerText.toLowerCase();


        if (text.includes(input)) {

            product.style.display =
                "block";

        } else {

            product.style.display =
                "none";

        }

    });

}
