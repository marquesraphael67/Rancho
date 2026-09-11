/* ============================================================
   RANCHO CASA DE LANCHES
   SISTEMA COMPLETO DO CARDÁPIO + CARRINHO + WHATSAPP
============================================================ */


/* ============================================================
   PRODUTOS
============================================================ */

const products = [

    /* =========================
       HAMBÚRGUERES
    ========================= */

    {
        id: 1,
        name: "Vaca Burguer",
        price: 25,
        category: "hamburgueres",
        description: "Hambúrguer bovino da casa, muçarela e pão francês bola.",
        addons: true
    },

    {
        id: 2,
        name: "Vaca Burguer Bacon",
        price: 30,
        category: "hamburgueres",
        description: "Hambúrguer bovino da casa, muçarela e bacon da casa.",
        addons: true
    },

    {
        id: 3,
        name: "Vaca",
        price: 30,
        category: "hamburgueres",
        description: "Hambúrguer bovino, muçarela, alface americana, tomate e maionese da casa.",
        addons: true
    },

    {
        id: 4,
        name: "Vaca Bacon",
        price: 35,
        category: "hamburgueres",
        description: "Hambúrguer bovino, muçarela, bacon, alface americana, tomate e maionese da casa.",
        addons: true
    },

    {
        id: 5,
        name: "Mignon",
        price: 33.50,
        category: "hamburgueres",
        description: "Filé mignon em bifes, muçarela, alface americana e tomate, pão baguete.",
        addons: true
    },

    {
        id: 6,
        name: "Cordeiro",
        price: 34,
        category: "hamburgueres",
        description: "Hambúrguer de cordeiro, muçarela, maionese de hortelã, rúcula e tomate.",
        addons: true
    },

    {
        id: 7,
        name: "Rancheiro",
        price: 47,
        category: "hamburgueres",
        description: "Hambúrguer bovino, muçarela, bacon, calabresa, pimentão, cebola, ovo frito, maionese e tomate.",
        addons: true
    },

    {
        id: 8,
        name: "Dona Aline",
        price: 34.50,
        category: "hamburgueres",
        description: "Hambúrguer bovino, queijo fresco grelhado com orégano, maionese da casa e tomate.",
        addons: true
    },

    {
        id: 9,
        name: "VGP",
        price: 35,
        category: "hamburgueres",
        description: "Hambúrguer bovino, american cheese, polenghi empanado e frito, geleia de abacaxi com pimenta.",
        addons: true
    },

    {
        id: 10,
        name: "VGBacon",
        price: 44,
        category: "hamburgueres",
        description: "Hambúrguer bovino, queijo fresco, bacon, geleia de abacaxi com pimenta e rúcula.",
        addons: true
    },

    {
        id: 11,
        name: "Mignon aos 4 Queijos",
        price: 44,
        category: "hamburgueres",
        description: "Filé mignon, gorgonzola, provolone, muçarela, Catupiry, alface, rúcula e tomate.",
        addons: true
    },

    {
        id: 12,
        name: "Mignon Carbonada",
        price: 44,
        category: "hamburgueres",
        description: "Filé mignon, creme Carbonada com bacon, muçarela, Catupiry e creme de leite.",
        addons: true
    },

    {
        id: 13,
        name: "Porco Oriental",
        price: 29.50,
        category: "hamburgueres",
        description: "Copa lombo suína, muçarela, cebola caramelizada, shoyu, rúcula, tomate e cebolinha.",
        addons: true
    },

    {
        id: 14,
        name: "Civeta",
        price: 38,
        category: "hamburgueres",
        description: "Hambúrguer bovino, bacon, calabresa, alho, muçarela, maionese, tomate e orégano.",
        addons: true
    },

    {
        id: 15,
        name: "Galinha",
        price: 27,
        category: "hamburgueres",
        description: "Sobrecoxa desossada, muçarela, molho de mostarda e mel, rúcula e tomate.",
        addons: true
    },

    {
        id: 16,
        name: "Medalhão",
        price: 35,
        category: "hamburgueres",
        description: "Sobrecoxa desossada, bacon da casa, muçarela, Catupiry Original, alface e tomate.",
        addons: true
    },

    {
        id: 17,
        name: "Sobrecoxa ao Gorgonzola",
        price: 36,
        category: "hamburgueres",
        description: "Sobrecoxa desossada, creme de gorgonzola, muçarela, rúcula e tomate seco.",
        addons: true
    },

    {
        id: 18,
        name: "Vaca Burguer Duplo",
        price: 39,
        category: "hamburgueres",
        description: "2 carnes + 2x muçarela.",
        addons: true
    },

    {
        id: 19,
        name: "Vaca Burguer Bacon Duplo",
        price: 49,
        category: "hamburgueres",
        description: "2 carnes + 2x muçarela + bacon da casa.",
        addons: true
    },

    {
        id: 20,
        name: "Vaca Duplo",
        price: 49,
        category: "hamburgueres",
        description: "2 carnes, muçarela, alface americana, tomate e maionese da casa.",
        addons: true
    },

    {
        id: 21,
        name: "Vaca Bacon Duplo",
        price: 59,
        category: "hamburgueres",
        description: "2 carnes, muçarela, bacon, alface americana, tomate e maionese.",
        addons: true
    },

    {
        id: 22,
        name: "Mignon Duplo",
        price: 61,
        category: "hamburgueres",
        description: "2 filés mignon, muçarela, alface americana e tomate.",
        addons: true
    },


    /* =========================
       KIDS
    ========================= */

    {
        id: 30,
        name: "Vaca Burguer Kids",
        price: 22,
        category: "kids",
        description: "Hambúrguer bovino, muçarela e pão francês bola."
    },

    {
        id: 31,
        name: "Vaca Burguer Bacon Kids",
        price: 25,
        category: "kids",
        description: "Hambúrguer bovino, muçarela, bacon e pão francês bola."
    },

    {
        id: 32,
        name: "Vaca Kids",
        price: 26,
        category: "kids",
        description: "Hambúrguer bovino, muçarela, alface americana, tomate e maionese."
    },

    {
        id: 33,
        name: "Vaca Bacon Kids",
        price: 30,
        category: "kids",
        description: "Hambúrguer bovino, muçarela, bacon, alface, tomate e maionese."
    },

    {
        id: 34,
        name: "Galizé Kids",
        price: 23.50,
        category: "kids",
        description: "Sobrecoxa de frango desossada, muçarela, alface, tomate e maionese."
    },

    {
        id: 35,
        name: "Pepitas de Frango",
        price: 18,
        category: "kids",
        description: "4 unidades de nuggets da casa."
    },

    {
        id: 36,
        name: "Fritas Individual",
        price: 8,
        category: "kids",
        description: "100g de fritas in natura."
    },


    /* =========================
       PORÇÕES
    ========================= */

    {
        id: 40,
        name: "Pão de Alho da Casa",
        price: 10,
        category: "porcoes",
        description: "Pão de alho preparado pela casa."
    },

    {
        id: 41,
        name: "Fritas P",
        price: 8,
        category: "porcoes",
        description: "Porção pequena de fritas."
    },

    {
        id: 42,
        name: "Fritas G",
        price: 22,
        category: "porcoes",
        description: "Porção grande de fritas."
    },

    {
        id: 43,
        name: "Fritas com Bacon P",
        price: 12,
        category: "porcoes",
        description: "Fritas com bacon."
    },

    {
        id: 44,
        name: "Fritas com Bacon G",
        price: 29,
        category: "porcoes",
        description: "Fritas com bacon."
    },

    {
        id: 45,
        name: "Fritas com Catupiry e Bacon P",
        price: 15,
        category: "porcoes",
        description: "Fritas com Catupiry e bacon."
    },

    {
        id: 46,
        name: "Fritas com Catupiry e Bacon G",
        price: 33,
        category: "porcoes",
        description: "Fritas com Catupiry e bacon."
    },

    {
        id: 47,
        name: "Fritas com Muçarela e Bacon P",
        price: 15,
        category: "porcoes",
        description: "Fritas com muçarela e bacon."
    },

    {
        id: 48,
        name: "Fritas com Muçarela e Bacon G",
        price: 33,
        category: "porcoes",
        description: "Fritas com muçarela e bacon."
    },

    {
        id: 49,
        name: "Fritas Carbonada P",
        price: 15,
        category: "porcoes",
        description: "Fritas com creme Carbonada."
    },

    {
        id: 50,
        name: "Fritas Carbonada G",
        price: 33,
        category: "porcoes",
        description: "Fritas com creme Carbonada."
    },

    {
        id: 51,
        name: "Mignon com Fritas",
        price: 86,
        category: "porcoes",
        description: "Serve até 2 pessoas."
    },

    {
        id: 52,
        name: "Frango com Fritas",
        price: 62,
        category: "porcoes",
        description: "Porção de frango com fritas."
    },

    {
        id: 53,
        name: "Bolinhos da Casa — 5",
        price: 21,
        category: "porcoes",
        description: "5 unidades."
    },

    {
        id: 54,
        name: "Bolinhos da Casa — 10",
        price: 40,
        category: "porcoes",
        description: "10 unidades."
    },

    {
        id: 55,
        name: "Pepitas de Frango — 4",
        price: 18,
        category: "porcoes",
        description: "4 unidades."
    },

    {
        id: 56,
        name: "Pepitas de Frango — 8",
        price: 33,
        category: "porcoes",
        description: "8 unidades."
    },


    /* =========================
       BEBIDAS
    ========================= */

    {
        id: 60,
        name: "Água sem Gás",
        price: 3,
        category: "bebidas",
        description: "Água mineral."
    },

    {
        id: 61,
        name: "Água com Gás",
        price: 3.50,
        category: "bebidas",
        description: "Água mineral com gás."
    },

    {
        id: 62,
        name: "Suco Natural",
        price: 10,
        category: "bebidas",
        description: "500ml — laranja ou limão."
    },

    {
        id: 63,
        name: "Suco de Polpa",
        price: 10,
        category: "bebidas",
        description: "500ml — maracujá ou morango, com água."
    },

    {
        id: 64,
        name: "Suco de Polpa com Leite",
        price: 11,
        category: "bebidas",
        description: "500ml — maracujá ou morango com leite."
    },

    {
        id: 65,
        name: "Refrigerante Lata",
        price: 7,
        category: "bebidas",
        description: "Coca-Cola, Coca-Cola Zero, Sprite, Fanta ou Guaraná Antarctica."
    },

    {
        id: 66,
        name: "Refrigerante PET 600ml",
        price: 10,
        category: "bebidas",
        description: "Coca-Cola, Coca-Cola Zero ou Guaraná Antarctica."
    },

    {
        id: 67,
        name: "Refrigerante PET 1L",
        price: 11,
        category: "bebidas",
        description: "Coca-Cola, Coca-Cola Zero ou Guaraná Antarctica."
    },

    {
        id: 68,
        name: "Coca-Cola 2L",
        price: 15,
        category: "bebidas",
        description: "Garrafa 2 litros."
    },

    {
        id: 69,
        name: "Guaraná Antarctica 2L",
        price: 13,
        category: "bebidas",
        description: "Garrafa 2 litros."
    },

    {
        id: 70,
        name: "Tubaína 2L",
        price: 8.50,
        category: "bebidas",
        description: "Garrafa 2 litros."
    },


    /* =========================
       SOBREMESAS
    ========================= */

    {
        id: 80,
        name: "Torta Holandesa",
        price: 22,
        category: "sobremesas",
        description: "Sobremesa da casa."
    },

    {
        id: 81,
        name: "Pavê de Chocolate e Creme Branco",
        price: 18,
        category: "sobremesas",
        description: "Chocolate e creme branco."
    },

    {
        id: 82,
        name: "Pavê de Chocolate, Morango e Creme Branco",
        price: 18,
        category: "sobremesas",
        description: "Chocolate, morango e creme branco."
    },

    {
        id: 83,
        name: "Pavê de Frappuccino de Caramelo",
        price: 18,
        category: "sobremesas",
        description: "Chocolate + café + caramelo."
    },

    {
        id: 84,
        name: "Doce de Leite do Sítio",
        price: 8,
        category: "sobremesas",
        description: "Doce de leite."
    },

    {
        id: 85,
        name: "Fatia de Bolo de Brigadeiro",
        price: 20,
        category: "sobremesas",
        description: "Fatia de bolo de brigadeiro."
    },

    {
        id: 86,
        name: "Pudim de Leite Moça",
        price: 12,
        category: "sobremesas",
        description: "Pudim de leite."
    }

];


/* ============================================================
   ADICIONAIS
============================================================ */

const addons = [

    {
        id: "beef",
        name: "Hambúrguer bovino",
        description: "200g da casa",
        price: 17
    },

    {
        id: "mignon",
        name: "Filé mignon",
        description: "Aproximadamente 150g",
        price: 23
    },

    {
        id: "lamb",
        name: "Hambúrguer de cordeiro",
        description: "200g da casa",
        price: 18
    },

    {
        id: "chicken",
        name: "Sobrecoxa",
        description: "250g desossada",
        price: 15
    },

    {
        id: "pork",
        name: "Copa lombo suína",
        description: "Aproximadamente 200g",
        price: 15
    },

    {
        id: "bacon",
        name: "Bacon artesanal",
        description: "Aproximadamente 75g",
        price: 8
    },

    {
        id: "sausage",
        name: "Calabresa",
        description: "Aproximadamente 75g",
        price: 6
    },

    {
        id: "egg",
        name: "Ovo frito",
        description: "",
        price: 2
    },

    {
        id: "mozzarella",
        name: "Muçarela",
        description: "",
        price: 4
    },

    {
        id: "catupiry",
        name: "Catupiry Original",
        description: "",
        price: 7
    },

    {
        id: "four-cheese",
        name: "Creme de 4 queijos",
        description: "Muçarela, Catupiry, gorgonzola e provolone",
        price: 14
    },

    {
        id: "carbonada",
        name: "Creme Carbonada",
        description: "Bacon, muçarela, Catupiry e creme",
        price: 14
    },

    {
        id: "lettuce",
        name: "Alface",
        description: "",
        price: 1.50
    },

    {
        id: "arugula",
        name: "Rúcula",
        description: "",
        price: 1.50
    },

    {
        id: "tomato",
        name: "Tomate",
        description: "",
        price: 1.50
    },

    {
        id: "onion",
        name: "Cebola com orégano",
        description: "",
        price: 3
    },

    {
        id: "pepper-jam",
        name: "Geleia de pimenta",
        description: "",
        price: 4.50
    }

];


/* ============================================================
   CONFIGURAÇÕES
============================================================ */

const WHATSAPP = "5518981567633";


const categoryLabels = {
    todos: "Todos",
    hamburgueres: "Hambúrgueres",
    kids: "Rancho Kids",
    porcoes: "Porções",
    bebidas: "Bebidas",
    sobremesas: "Sobremesas"
};


const categoryMarks = {
    hamburgueres: "HAMBÚRGUERES",
    kids: "RANCHO KIDS",
    porcoes: "PORÇÕES",
    bebidas: "BEBIDAS",
    sobremesas: "SOBREMESAS"
};


/* ============================================================
   ESTADO
============================================================ */

let shoppingCart = loadCart();

let currentCategory = "todos";

let selectedProduct = null;

let editingIndex = null;


/* ============================================================
   ELEMENTOS
============================================================ */

const productsContainer =
    document.getElementById("products");

const emptyProducts =
    document.getElementById("emptyProducts");

const searchInput =
    document.getElementById("searchInput");

const categoriesContainer =
    document.getElementById("categories");

const cartButton =
    document.getElementById("cartButton");

const cartDrawer =
    document.getElementById("cartDrawer");

const overlay =
    document.getElementById("overlay");

const closeCartButton =
    document.getElementById("closeCart");

const cartBody =
    document.getElementById("cartBody");

const cartEmpty =
    document.getElementById("cartEmpty");

const cartFooter =
    document.getElementById("cartFooter");

const cartTotalElement =
    document.getElementById("cartTotal");

const cartCountElement =
    document.getElementById("cartCount");

const goMenuButton =
    document.getElementById("goMenu");

const customizerModal =
    document.getElementById("customizerModal");

const closeCustomizerButton =
    document.getElementById("closeCustomizer");

const customizerTitle =
    document.getElementById("customizerTitle");

const customizerDescription =
    document.getElementById("customizerDescription");

const addonsList =
    document.getElementById("addonsList");

const customizerTotal =
    document.getElementById("customizerTotal");

const saveCustomizerButton =
    document.getElementById("saveCustomizer");

const checkoutModal =
    document.getElementById("checkoutModal");

const closeCheckoutButton =
    document.getElementById("closeCheckout");

const checkoutButton =
    document.getElementById("checkoutButton");

const checkoutForm =
    document.getElementById("checkoutForm");

const checkoutTotal =
    document.getElementById("checkoutTotal");

const addressGroup =
    document.getElementById("addressGroup");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");

const header =
    document.getElementById("header");


/* ============================================================
   FORMATAÇÃO
============================================================ */

function money(value) {

    return value.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}


/* ============================================================
   SEGURANÇA HTML
============================================================ */

function escapeHtml(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* ============================================================
   PREÇO DO ITEM
============================================================ */

function itemUnitPrice(item) {

    const addonsTotal =
        (item.addons || []).reduce(
            (sum, addon) => sum + addon.price,
            0
        );

    return item.basePrice + addonsTotal;

}


/* ============================================================
   TOTAL DO CARRINHO
============================================================ */

function cartTotal() {

    return shoppingCart.reduce(
        (total, item) => {

            return total +
                itemUnitPrice(item) *
                item.quantity;

        },
        0
    );

}


/* ============================================================
   QUANTIDADE NO CARRINHO
============================================================ */

function cartQuantity() {

    return shoppingCart.reduce(
        (total, item) => {

            return total + item.quantity;

        },
        0
    );

}


/* ============================================================
   LOCAL STORAGE
============================================================ */

function saveCart() {

    localStorage.setItem(
        "rancho-cart",
        JSON.stringify(shoppingCart)
    );

}


function loadCart() {

    try {

        const saved =
            localStorage.getItem("rancho-cart");

        if (!saved) {
            return [];
        }

        const parsed =
            JSON.parse(saved);

        return Array.isArray(parsed)
            ? parsed
            : [];

    } catch (error) {

        console.error(
            "Erro ao carregar carrinho:",
            error
        );

        return [];

    }

}


/* ============================================================
   RENDER PRODUTOS
============================================================ */

function renderProducts() {

    const searchTerm =
        searchInput.value
            .trim()
            .toLowerCase();


    const filteredProducts =
        products.filter(product => {

            const matchesCategory =
                currentCategory === "todos" ||
                product.category === currentCategory;


            const searchable =
                `
                ${product.name}
                ${product.description}
                ${categoryLabels[product.category]}
                `
                    .toLowerCase();


            const matchesSearch =
                !searchTerm ||
                searchable.includes(searchTerm);


            return matchesCategory &&
                matchesSearch;

        });


    productsContainer.innerHTML = "";


    if (filteredProducts.length === 0) {

        emptyProducts.classList.add("show");

        return;

    }


    emptyProducts.classList.remove("show");


    filteredProducts.forEach(
        (product, index) => {

            const card =
                document.createElement("article");

            card.className =
                "product-card reveal visible";


            card.innerHTML = `

                <span class="product-category">
                    ${escapeHtml(
                        categoryMarks[product.category]
                    )}
                </span>

                <h3 class="product-name">
                    ${escapeHtml(product.name)}
                </h3>

                <p class="product-description">
                    ${escapeHtml(product.description)}
                </p>

                <div class="product-bottom">

                    <strong class="product-price">
                        ${money(product.price)}
                    </strong>

                    <button
                        class="add-product"
                        data-product-id="${product.id}"
                        aria-label="Adicionar ${escapeHtml(product.name)}"
                    >
                        +
                    </button>

                </div>

            `;


            card.style.transitionDelay =
                `${Math.min(index * 0.025, 0.2)}s`;


            productsContainer.appendChild(card);

        }
    );

}


/* ============================================================
   CATEGORIA
============================================================ */

categoriesContainer.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(".category");

        if (!button) {
            return;
        }


        currentCategory =
            button.dataset.category;


        document
            .querySelectorAll(".category")
            .forEach(category => {

                category.classList.toggle(
                    "active",
                    category === button
                );

            });


        renderProducts();

    }
);


/* ============================================================
   BUSCA
============================================================ */

searchInput.addEventListener(
    "input",
    renderProducts
);


/* ============================================================
   ADICIONAR PRODUTO
============================================================ */

productsContainer.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(".add-product");

        if (!button) {
            return;
        }


        const productId =
            Number(button.dataset.productId);


        const product =
            products.find(
                item => item.id === productId
            );


        if (!product) {
            return;
        }


        if (product.addons) {

            openCustomizer(
                product
            );

            return;

        }


        addToCart(
            product,
            []
        );

    }
);


/* ============================================================
   ABRIR CUSTOMIZADOR
============================================================ */

function openCustomizer(
    product,
    existingAddons = [],
    editIndex = null
) {

    selectedProduct = product;

    editingIndex = editIndex;


    customizerTitle.textContent =
        product.name;


    customizerDescription.textContent =
        product.description;


    addonsList.innerHTML = "";


    addons.forEach(addon => {

        const isChecked =
            existingAddons.some(
                selected =>
                    selected.id === addon.id
            );


        const item =
            document.createElement("div");

        item.className =
            "addon-item";


        item.innerHTML = `

            <label class="addon-check">

                <input
                    type="checkbox"
                    data-addon-id="${addon.id}"
                    data-price="${addon.price}"
                    ${isChecked ? "checked" : ""}
                >

                <span class="custom-checkbox"></span>

                <span class="addon-info">

                    <span class="addon-name">
                        ${escapeHtml(addon.name)}
                    </span>

                    ${
                        addon.description
                            ? `
                            <span class="addon-description">
                                ${escapeHtml(addon.description)}
                            </span>
                            `
                            : ""
                    }

                </span>

            </label>

            <span class="addon-price">
                + ${money(addon.price)}
            </span>

        `;


        addonsList.appendChild(item);

    });


    updateCustomizerTotal();


    customizerModal.classList.add("active");

    document.body.classList.add("no-scroll");

}


/* ============================================================
   FECHAR CUSTOMIZADOR
============================================================ */

function closeCustomizer() {

    customizerModal.classList.remove("active");

    document.body.classList.remove("no-scroll");

    selectedProduct = null;

    editingIndex = null;

}


closeCustomizerButton.addEventListener(
    "click",
    closeCustomizer
);


/* ============================================================
   TOTAL CUSTOMIZADOR
============================================================ */

addonsList.addEventListener(
    "change",
    updateCustomizerTotal
);


function getSelectedAddons() {

    const checked =
        addonsList.querySelectorAll(
            'input[type="checkbox"]:checked'
        );


    return Array.from(checked)
        .map(input => {

            const addon =
                addons.find(
                    item =>
                        item.id ===
                        input.dataset.addonId
                );

            return addon;

        })
        .filter(Boolean);

}


function updateCustomizerTotal() {

    if (!selectedProduct) {
        return;
    }


    const selectedAddons =
        getSelectedAddons();


    const addonsPrice =
        selectedAddons.reduce(
            (sum, addon) =>
                sum + addon.price,
            0
        );


    customizerTotal.textContent =
        money(
            selectedProduct.price +
            addonsPrice
        );

}


/* ============================================================
   SALVAR CUSTOMIZAÇÃO
============================================================ */

saveCustomizerButton.addEventListener(
    "click",
    () => {

        if (!selectedProduct) {
            return;
        }


        const selectedAddons =
            getSelectedAddons();


        const item = {

            productId:
                selectedProduct.id,

            name:
                selectedProduct.name,

            basePrice:
                selectedProduct.price,

            addons:
                selectedAddons,

            quantity: 1

        };


        if (editingIndex !== null) {

            shoppingCart[
                editingIndex
            ] = item;


            showToast(
                "Adicionais atualizados"
            );

        } else {

            shoppingCart.push(item);


            showToast(
                "Adicionado ao carrinho"
            );

        }


        saveCart();

        updateCartUI();

        closeCustomizer();

        openCart();

    }
);


/* ============================================================
   ADICIONAR AO CARRINHO
============================================================ */

function addToCart(
    product,
    selectedAddons
) {

    const addonsKey =
        selectedAddons
            .map(addon => addon.id)
            .sort()
            .join("|");


    const existingIndex =
        shoppingCart.findIndex(item => {

            const existingKey =
                (item.addons || [])
                    .map(addon => addon.id)
                    .sort()
                    .join("|");


            return (
                item.productId === product.id &&
                existingKey === addonsKey
            );

        });


    if (existingIndex >= 0) {

        shoppingCart[
            existingIndex
        ].quantity++;

    } else {

        shoppingCart.push({

            productId: product.id,

            name: product.name,

            basePrice: product.price,

            addons: selectedAddons,

            quantity: 1

        });

    }


    saveCart();

    updateCartUI();

    showToast(
        `${product.name} adicionado`
    );

}


/* ============================================================
   RENDER CARRINHO
============================================================ */

function renderCart() {

    cartBody.innerHTML = "";


    if (shoppingCart.length === 0) {

        cartEmpty.classList.remove(
            "hidden"
        );

        cartFooter.classList.add(
            "hidden"
        );

        return;

    }


    cartEmpty.classList.add(
        "hidden"
    );

    cartFooter.classList.remove(
        "hidden"
    );


    shoppingCart.forEach(
        (item, index) => {

            const element =
                document.createElement("div");

            element.className =
                "cart-item";


            const addonsText =
                item.addons &&
                item.addons.length

                    ? item.addons
                        .map(
                            addon =>
                                `${addon.name} (+${money(addon.price)})`
                        )
                        .join(", ")

                    : "Sem adicionais";


            element.innerHTML = `

                <div class="cart-item-top">

                    <div>

                        <h3 class="cart-item-name">
                            ${escapeHtml(item.name)}
                        </h3>

                        <p class="cart-item-addons">
                            ${escapeHtml(addonsText)}
                        </p>

                    </div>

                    <strong class="cart-item-price">
                        ${money(
                            itemUnitPrice(item) *
                            item.quantity
                        )}
                    </strong>

                </div>


                <div class="cart-item-actions">

                    <div class="quantity">

                        <button
                            data-action="decrease"
                            data-index="${index}"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            data-action="increase"
                            data-index="${index}"
                        >
                            +
                        </button>

                    </div>


                    <div>

                        ${
                            item.addons?.length
                            ? `
                            <button
                                class="cart-edit"
                                data-action="edit"
                                data-index="${index}"
                            >
                                EDITAR ADICIONAIS
                            </button>
                            `
                            : ""
                        }

                        <button
                            class="cart-remove"
                            data-action="remove"
                            data-index="${index}"
                        >
                            REMOVER
                        </button>

                    </div>

                </div>

            `;


            cartBody.appendChild(element);

        }
    );

}


/* ============================================================
   AÇÕES DO CARRINHO
============================================================ */

cartBody.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest("button");

        if (!button) {
            return;
        }


        const action =
            button.dataset.action;


        const index =
            Number(button.dataset.index);


        if (
            Number.isNaN(index) ||
            !shoppingCart[index]
        ) {
            return;
        }


        if (action === "increase") {

            shoppingCart[index].quantity++;

        }


        if (action === "decrease") {

            shoppingCart[index].quantity--;

            if (
                shoppingCart[index].quantity <= 0
            ) {

                shoppingCart.splice(
                    index,
                    1
                );

            }

        }


        if (action === "remove") {

            shoppingCart.splice(
                index,
                1
            );

            showToast(
                "Item removido"
            );

        }


        if (action === "edit") {

            const item =
                shoppingCart[index];


            const product =
                products.find(
                    product =>
                        product.id ===
                        item.productId
                );


            if (product) {

                openCustomizer(
                    product,
                    item.addons || [],
                    index
                );

            }

            return;

        }


        saveCart();

        updateCartUI();

    }
);


/* ============================================================
   ATUALIZAR UI CARRINHO
============================================================ */

function updateCartUI() {

    renderCart();


    const total =
        cartTotal();


    const quantity =
        cartQuantity();


    cartTotalElement.textContent =
        money(total);


    checkoutTotal.textContent =
        money(total);


    cartCountElement.textContent =
        quantity;


    cartCountElement.style.display =
        quantity > 0
            ? "grid"
            : "none";

}


/* ============================================================
   ABRIR CARRINHO
============================================================ */

function openCart() {

    cartDrawer.classList.add("active");

    overlay.classList.add("active");

    document.body.classList.add("no-scroll");

}


/* ============================================================
   FECHAR CARRINHO
============================================================ */

function closeCart() {

    cartDrawer.classList.remove("active");

    overlay.classList.remove("active");

    document.body.classList.remove("no-scroll");

}


cartButton.addEventListener(
    "click",
    openCart
);


closeCartButton.addEventListener(
    "click",
    closeCart
);


overlay.addEventListener(
    "click",
    closeCart
);


goMenuButton.addEventListener(
    "click",
    () => {

        closeCart();

        document
            .getElementById("cardapio")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* ============================================================
   CHECKOUT
============================================================ */

checkoutButton.addEventListener(
    "click",
    () => {

        if (shoppingCart.length === 0) {

            showToast(
                "Seu carrinho está vazio"
            );

            return;

        }


        checkoutTotal.textContent =
            money(cartTotal());


        checkoutModal.classList.add(
            "active"
        );

        document.body.classList.add(
            "no-scroll"
        );

    }
);


/* ============================================================
   FECHAR CHECKOUT
============================================================ */

closeCheckoutButton.addEventListener(
    "click",
    () => {

        checkoutModal.classList.remove(
            "active"
        );

        document.body.classList.remove(
            "no-scroll"
        );

    }
);


/* ============================================================
   TIPO DE PEDIDO
============================================================ */

document
    .querySelectorAll(
        'input[name="orderType"]'
    )
    .forEach(input => {

        input.addEventListener(
            "change",
            () => {

                const delivery =
                    document.querySelector(
                        'input[name="orderType"]:checked'
                    ).value === "Entrega";


                addressGroup.classList.toggle(
                    "show",
                    delivery
                );


                document
                    .getElementById(
                        "customerAddress"
                    )
                    .required = delivery;

            }
        );

    });


/* ============================================================
   ENVIAR WHATSAPP
============================================================ */

checkoutForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        if (shoppingCart.length === 0) {

            showToast(
                "Seu carrinho está vazio"
            );

            return;

        }


        const name =
            document
                .getElementById("customerName")
                .value
                .trim();


        const orderType =
            document.querySelector(
                'input[name="orderType"]:checked'
            ).value;


        const address =
            document
                .getElementById("customerAddress")
                .value
                .trim();


        const note =
            document
                .getElementById("customerNote")
                .value
                .trim();


        let message =
            `*NOVO PEDIDO — RANCHO CASA DE LANCHES*\n\n`;


        message +=
            `*Cliente:* ${name}\n`;


        message +=
            `*Tipo:* ${orderType}\n`;


        if (
            orderType === "Entrega" &&
            address
        ) {

            message +=
                `*Endereço:* ${address}\n`;

        }


        message +=
            `\n*ITENS DO PEDIDO:*\n`;


        shoppingCart.forEach(
            (item, index) => {

                message +=
                    `\n${index + 1}. *${item.name}* x${item.quantity}\n`;


                if (
                    item.addons &&
                    item.addons.length
                ) {

                    item.addons.forEach(
                        addon => {

                            message +=
                                `   + ${addon.name} — ${money(addon.price)}\n`;

                        }
                    );

                }


                message +=
                    `   Subtotal: ${money(
                        itemUnitPrice(item) *
                        item.quantity
                    )}\n`;

            }
        );


        message +=
            `\n*TOTAL: ${money(cartTotal())}*`;


        if (note) {

            message +=
                `\n\n*Observação:*\n${note}`;

        }


        message +=
            `\n\nOlá! Gostaria de confirmar meu pedido.`;


        const url =
            `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;


        window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );


        shoppingCart = [];

        saveCart();

        updateCartUI();


        checkoutForm.reset();


        addressGroup.classList.remove(
            "show"
        );


        checkoutModal.classList.remove(
            "active"
        );


        closeCart();


        document.body.classList.remove(
            "no-scroll"
        );


        showToast(
            "Pedido preparado no WhatsApp"
        );

    }
);


/* ============================================================
   TOAST
============================================================ */

let toastTimer;


function showToast(message) {

    toastMessage.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* ============================================================
   MENU MOBILE
============================================================ */

menuToggle.addEventListener(
    "click",
    () => {

        navMenu.classList.toggle(
            "active"
        );

        const isOpen =
            navMenu.classList.contains(
                "active"
            );


        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    }
);


/* Fechar menu ao clicar em link */

navMenu
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navMenu.classList.remove(
                    "active"
                );

            }
        );

    });


/* ============================================================
   HEADER NO SCROLL
============================================================ */

window.addEventListener(
    "scroll",
    () => {

        header.classList.toggle(
            "scrolled",
            window.scrollY > 20
        );

    },
    {
        passive: true
    }
);


/* ============================================================
   ESC FECHA MODAIS
============================================================ */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") {
            return;
        }


        closeCart();


        closeCustomizer();


        checkoutModal.classList.remove(
            "active"
        );

        document.body.classList.remove(
            "no-scroll"
        );

    }
);


/* ============================================================
   CLICAR FORA DOS MODAIS
============================================================ */

customizerModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            customizerModal
        ) {

            closeCustomizer();

        }

    }
);


checkoutModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            checkoutModal
        ) {

            checkoutModal.classList.remove(
                "active"
            );

            document.body.classList.remove(
                "no-scroll"
            );

        }

    }
);


/* ============================================================
   ANIMAÇÕES AO ENTRAR NA TELA
============================================================ */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(
            element
        );

    });


/* ============================================================
   LOADER
============================================================ */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                document
                    .getElementById("loader")
                    .classList.add("hidden");

            },
            500
        );

    }
);


/* ============================================================
   INICIALIZAÇÃO
============================================================ */

renderProducts();

updateCartUI();
