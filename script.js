document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MENU MOBILE
    ========================= */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });

    }


    /* =========================
       PRODUTOS
    ========================= */

    const products = [

        // HAMBÚRGUERES

        {
            id: 1,
            name: "Vaca Burguer",
            category: "hamburgueres",
            categoryName: "Hambúrgueres",
            price: 25,
            description: "Hambúrguer bovino da casa, muçarela e pão francês bola."
        },

        {
            id: 2,
            name: "Vaca Burguer Bacon",
            category: "hamburgueres",
            categoryName: "Hambúrgueres",
            price: 30,
            description: "Hambúrguer bovino da casa, muçarela e bacon da casa."
        },

        {
            id: 3,
            name: "Vaca",
            category: "hamburgueres",
            categoryName: "Hambúrgueres",
            price: 30,
            description: "Hambúrguer bovino, muçarela, alface americana, tomate e maionese da casa."
        },

        {
            id: 4,
            name: "Vaca Bacon",
            category: "hamburgueres",
            categoryName: "Hambúrgueres",
            price: 35,
            description: "Hambúrguer bovino, muçarela, bacon, alface americana, tomate e maionese da casa."
        },

        {
            id: 5,
            name: "Mignon",
            category: "hamburgueres",
            categoryName: "Hambúrgueres",
            price: 33.5,
            description: "Filé mignon em bifes, muçarela, alface americana e tomate, pão baguete."
        },

        {
            id: 6,
            name: "Cordeiro",
            category: "hamburgueres",
            categoryName: "Hambúrgueres",
            price: 34,
            description: "Hambúrguer de cordeiro, muçarela, maionese de hortelã, rúcula e tomate."
        },

        {
            id: 7,
            name: "Rancheiro",
            category: "hamburgueres",
            categoryName: "Hambúrgueres",
            price: 47,
            description: "Hambúrguer bovino, muçarela, bacon, calabresa, pimentão, cebola, ovo frito, maionese e tomate."
        },

        {
            id: 8,
            name: "Dona Aline",
            category: "hamburgueres",
            categoryName: "Hambúrgueres",
            price: 34.5,
            description: "Hambúrguer bovino, queijo fresco grelhado com orégano, maionese da casa e tomate."
        },

        {
            id: 9,
            name: "VGP",
            category: "hamburgueres",
            categoryName: "Hambúrgueres",
            price: 35,
            description: "Hambúrguer bovino, american cheese, Polenghi empanado e frito, geleia de abacaxi com pimenta."
        },

        {
            id: 10,
            name: "VGBacon",
            category: "hamburgueres",
            categoryName: "Hambúrgueres",
            price: 44,
            description: "Hambúrguer bovino, queijo fresco, bacon, geleia de abacaxi com pimenta e rúcula."
        },

        {
            id: 11,
            name: "Mignon aos 4 Queijos",
            category: "hamburgueres",
            categoryName: "Hambúrgueres",
            price: 44,
            description: "Filé mignon, gorgonzola, provolone, muçarela, Catupiry, alface, rúcula e tomate."
        },

        {
            id: 12,
            name: "Mignon Carbonada",
            category: "hamburgueres",
            categoryName: "Hambúrgueres",
            price: 44,
            description: "Filé mignon, creme Carbonada com bacon, muçarela, Catupiry e creme de leite."
        },

        {
            id: 13,
            name: "Porco Oriental",
            category: "hamburgueres",
            categoryName: "Hambúrgueres",
            price: 29.5,
            description: "Copa lombo suína, muçarela, cebola caramelizada, shoyu, rúcula, tomate e cebolinha."
        },

        {
            id: 14,
            name: "Civeta",
            category: "hamburgueres",
            categoryName: "Hambúrgueres",
            price: 38,
            description: "Hambúrguer bovino, bacon, calabresa, alho, muçarela, maionese, tomate e orégano."
        },

        {
            id: 15,
            name: "Galinha",
            category: "hamburgueres",
            categoryName: "Hambúrgueres",
            price: 27,
            description: "Sobrecoxa desossada, muçarela, molho de mostarda e mel, rúcula e tomate."
        },

        {
            id: 16,
            name: "Medalhão",
            category: "hamburgueres",
            categoryName: "Hambúrgueres",
            price: 35,
            description: "Sobrecoxa desossada, bacon da casa, muçarela, Catupiry Original, alface e tomate."
        },

        {
            id: 17,
            name: "Sobrecoxa ao Gorgonzola",
            category: "hamburgueres",
            categoryName: "Hambúrgueres",
            price: 36,
            description: "Sobrecoxa desossada, creme de gorgonzola, muçarela, rúcula e tomate seco."
        },

        {
            id: 18,
            name: "Vaca Burguer Duplo",
            category: "hamburgueres",
            categoryName: "Hambúrgueres",
            price: 39,
            description: "2 carnes + 2x muçarela."
        },

        {
            id: 19,
            name: "Vaca Burguer Bacon Duplo",
            category: "hamburgueres",
            categoryName: "Hambúrgueres",
            price: 49,
            description: "2 carnes + 2x muçarela + bacon da casa."
        },

        {
            id: 20,
            name: "Vaca Duplo",
            category: "hamburgueres",
            categoryName: "Hambúrgueres",
            price: 49,
            description: "2 carnes, muçarela, alface americana, tomate e maionese da casa."
        },

        {
            id: 21,
            name: "Vaca Bacon Duplo",
            category: "hamburgueres",
            categoryName: "Hambúrgueres",
            price: 59,
            description: "2 carnes, muçarela, bacon, alface americana, tomate e maionese."
        },

        {
            id: 22,
            name: "Mignon Duplo",
            category: "hamburgueres",
            categoryName: "Hambúrgueres",
            price: 61,
            description: "2 filés mignon, muçarela, alface americana e tomate."
        },


        // KIDS

        {
            id: 30,
            name: "Vaca Burguer Kids",
            category: "kids",
            categoryName: "Rancho Kids",
            price: 22,
            description: "Hambúrguer bovino, muçarela e pão francês bola."
        },

        {
            id: 31,
            name: "Vaca Burguer Bacon Kids",
            category: "kids",
            categoryName: "Rancho Kids",
            price: 25,
            description: "Hambúrguer bovino, muçarela, bacon e pão francês bola."
        },

        {
            id: 32,
            name: "Vaca Kids",
            category: "kids",
            categoryName: "Rancho Kids",
            price: 26,
            description: "Hambúrguer bovino, muçarela, alface americana, tomate e maionese."
        },

        {
            id: 33,
            name: "Vaca Bacon Kids",
            category: "kids",
            categoryName: "Rancho Kids",
            price: 30,
            description: "Hambúrguer bovino, muçarela, bacon, alface, tomate e maionese."
        },

        {
            id: 34,
            name: "Galizé Kids",
            category: "kids",
            categoryName: "Rancho Kids",
            price: 23.5,
            description: "Sobrecoxa de frango desossada, muçarela, alface, tomate e maionese."
        },

        {
            id: 35,
            name: "Pepitas de Frango",
            category: "kids",
            categoryName: "Rancho Kids",
            price: 18,
            description: "4 unidades de nuggets da casa."
        },

        {
            id: 36,
            name: "Fritas Individual",
            category: "kids",
            categoryName: "Rancho Kids",
            price: 8,
            description: "100g de fritas in natura."
        },


        // PORÇÕES

        {
            id: 40,
            name: "Pão de Alho da Casa",
            category: "porcoes",
            categoryName: "Porções",
            price: 10,
            description: "Pão de alho preparado pela casa."
        },

        {
            id: 41,
            name: "Fritas P",
            category: "porcoes",
            categoryName: "Porções",
            price: 8,
            description: "Porção pequena de fritas."
        },

        {
            id: 42,
            name: "Fritas G",
            category: "porcoes",
            categoryName: "Porções",
            price: 22,
            description: "Porção grande de fritas."
        },

        {
            id: 43,
            name: "Fritas com Bacon P",
            category: "porcoes",
            categoryName: "Porções",
            price: 12,
            description: "Fritas com bacon."
        },

        {
            id: 44,
            name: "Fritas com Bacon G",
            category: "porcoes",
            categoryName: "Porções",
            price: 29,
            description: "Porção grande de fritas com bacon."
        },

        {
            id: 45,
            name: "Fritas com Catupiry e Bacon P",
            category: "porcoes",
            categoryName: "Porções",
            price: 15,
            description: "Fritas com Catupiry e bacon."
        },

        {
            id: 46,
            name: "Fritas com Catupiry e Bacon G",
            category: "porcoes",
            categoryName: "Porções",
            price: 33,
            description: "Porção grande de fritas com Catupiry e bacon."
        },

        {
            id: 47,
            name: "Fritas com Muçarela e Bacon P",
            category: "porcoes",
            categoryName: "Porções",
            price: 15,
            description: "Fritas com muçarela e bacon."
        },

        {
            id: 48,
            name: "Fritas com Muçarela e Bacon G",
            category: "porcoes",
            categoryName: "Porções",
            price: 33,
            description: "Porção grande de fritas com muçarela e bacon."
        },

        {
            id: 49,
            name: "Fritas Carbonada P",
            category: "porcoes",
            categoryName: "Porções",
            price: 15,
            description: "Fritas com creme Carbonada."
        },

        {
            id: 50,
            name: "Fritas Carbonada G",
            category: "porcoes",
            categoryName: "Porções",
            price: 33,
            description: "Porção grande de fritas com creme Carbonada."
        },

        {
            id: 51,
            name: "Mignon com Fritas",
            category: "porcoes",
            categoryName: "Porções",
            price: 86,
            description: "Mignon com fritas. Serve até 2 pessoas."
        },

        {
            id: 52,
            name: "Frango com Fritas",
            category: "porcoes",
            categoryName: "Porções",
            price: 62,
            description: "Frango acompanhado de fritas."
        },

        {
            id: 53,
            name: "Bolinhos da Casa — 5 unidades",
            category: "porcoes",
            categoryName: "Porções",
            price: 21,
            description: "5 bolinhos da casa."
        },

        {
            id: 54,
            name: "Bolinhos da Casa — 10 unidades",
            category: "porcoes",
            categoryName: "Porções",
            price: 40,
            description: "10 bolinhos da casa."
        },

        {
            id: 55,
            name: "Pepitas de Frango — 4 unidades",
            category: "porcoes",
            categoryName: "Porções",
            price: 18,
            description: "4 unidades."
        },

        {
            id: 56,
            name: "Pepitas de Frango — 8 unidades",
            category: "porcoes",
            categoryName: "Porções",
            price: 33,
            description: "8 unidades."
        },


        // BEBIDAS

        {
            id: 60,
            name: "Água sem Gás",
            category: "bebidas",
            categoryName: "Bebidas",
            price: 3,
            description: "Água mineral sem gás."
        },

        {
            id: 61,
            name: "Água com Gás",
            category: "bebidas",
            categoryName: "Bebidas",
            price: 3.5,
            description: "Água mineral com gás."
        },

        {
            id: 62,
            name: "Suco Natural",
            category: "bebidas",
            categoryName: "Bebidas",
            price: 10,
            description: "500ml. Laranja ou limão."
        },

        {
            id: 63,
            name: "Suco de Polpa",
            category: "bebidas",
            categoryName: "Bebidas",
            price: 10,
            description: "500ml. Maracujá ou morango, com água."
        },

        {
            id: 64,
            name: "Suco de Polpa com Leite",
            category: "bebidas",
            categoryName: "Bebidas",
            price: 11,
            description: "500ml. Maracujá ou morango com leite."
        },

        {
            id: 65,
            name: "Refrigerante Lata",
            category: "bebidas",
            categoryName: "Bebidas",
            price: 7,
            description: "Coca-Cola, Coca-Cola Zero, Sprite, Fanta ou Guaraná Antarctica."
        },

        {
            id: 66,
            name: "Refrigerante PET 600ml",
            category: "bebidas",
            categoryName: "Bebidas",
            price: 10,
            description: "Coca-Cola, Coca-Cola Zero ou Guaraná Antarctica."
        },

        {
            id: 67,
            name: "Refrigerante PET 1L",
            category: "bebidas",
            categoryName: "Bebidas",
            price: 11,
            description: "Coca-Cola, Coca-Cola Zero ou Guaraná Antarctica."
        },

        {
            id: 68,
            name: "Coca-Cola 2L",
            category: "bebidas",
            categoryName: "Bebidas",
            price: 15,
            description: "Coca-Cola 2 litros."
        },

        {
            id: 69,
            name: "Guaraná Antarctica 2L",
            category: "bebidas",
            categoryName: "Bebidas",
            price: 13,
            description: "Guaraná Antarctica 2 litros."
        },

        {
            id: 70,
            name: "Tubaína 2L",
            category: "bebidas",
            categoryName: "Bebidas",
            price: 8.5,
            description: "Tubaína 2 litros."
        },


        // SOBREMESAS

        {
            id: 80,
            name: "Torta Holandesa",
            category: "sobremesas",
            categoryName: "Sobremesas",
            price: 22,
            description: "Torta holandesa."
        },

        {
            id: 81,
            name: "Pavê de Chocolate e Creme Branco",
            category: "sobremesas",
            categoryName: "Sobremesas",
            price: 18,
            description: "Chocolate e creme branco."
        },

        {
            id: 82,
            name: "Pavê de Chocolate, Morango e Creme Branco",
            category: "sobremesas",
            categoryName: "Sobremesas",
            price: 18,
            description: "Chocolate, morango e creme branco."
        },

        {
            id: 83,
            name: "Pavê de Frappuccino de Caramelo",
            category: "sobremesas",
            categoryName: "Sobremesas",
            price: 18,
            description: "Chocolate + café + caramelo."
        },

        {
            id: 84,
            name: "Doce de Leite do Sítio",
            category: "sobremesas",
            categoryName: "Sobremesas",
            price: 8,
            description: "Doce de leite."
        },

        {
            id: 85,
            name: "Fatia de Bolo de Brigadeiro",
            category: "sobremesas",
            categoryName: "Sobremesas",
            price: 20,
            description: "Fatia de bolo de brigadeiro."
        },

        {
            id: 86,
            name: "Pudim de Leite Moça",
            category: "sobremesas",
            categoryName: "Sobremesas",
            price: 12,
            description: "Pudim de leite."
        }

    ];


    /* =========================
       ACRÉSCIMOS
    ========================= */

    const addons = [

        {
            id: "bovino",
            name: "Hambúrguer bovino",
            price: 17,
            description: "200g da casa"
        },

        {
            id: "mignon",
            name: "Filé mignon",
            price: 23,
            description: "Aproximadamente 150g"
        },

        {
            id: "cordeiro",
            name: "Hambúrguer de cordeiro",
            price: 18,
            description: "200g da casa"
        },

        {
            id: "sobrecoxa",
            name: "Sobrecoxa",
            price: 15,
            description: "250g desossada"
        },

        {
            id: "copa",
            name: "Copa lombo suína",
            price: 15,
            description: "Aproximadamente 200g"
        },

        {
            id: "bacon",
            name: "Bacon artesanal",
            price: 8,
            description: "Aproximadamente 75g"
        },

        {
            id: "calabresa",
            name: "Calabresa",
            price: 6,
            description: "Aproximadamente 75g"
        },

        {
            id: "ovo",
            name: "Ovo frito",
            price: 2,
            description: ""
        },

        {
            id: "mucarela",
            name: "Muçarela",
            price: 4,
            description: ""
        },

        {
            id: "catupiry",
            name: "Catupiry Original",
            price: 7,
            description: ""
        },

        {
            id: "quatroqueijos",
            name: "Creme de 4 queijos",
            price: 14,
            description: "Muçarela, Catupiry, gorgonzola e provolone"
        },

        {
            id: "carbonada",
            name: "Creme Carbonada",
            price: 14,
            description: "Bacon, muçarela, Catupiry e creme"
        },

        {
            id: "alface",
            name: "Alface",
            price: 1.5,
            description: ""
        },

        {
            id: "rucula",
            name: "Rúcula",
            price: 1.5,
            description: ""
        },

        {
            id: "tomate",
            name: "Tomate",
            price: 1.5,
            description: ""
        },

        {
            id: "cebola",
            name: "Cebola com orégano",
            price: 3,
            description: ""
        },

        {
            id: "geleia",
            name: "Geleia de pimenta",
            price: 4.5,
            description: ""
        }

    ];


    /* =========================
       STORAGE
    ========================= */

    let cart = JSON.parse(
        localStorage.getItem("ranchoCart") || "[]"
    );


    function saveCart() {

        localStorage.setItem(
            "ranchoCart",
            JSON.stringify(cart)
        );

        updateCartCount();
    }


    /* =========================
       FORMATAÇÃO
    ========================= */

    function money(value) {

        return value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

    }


    /* =========================
       CONTADOR
    ========================= */

    function updateCartCount() {

        const count = cart.reduce(
            (total, item) => total + item.quantity,
            0
        );

        document
            .querySelectorAll("#cartCount")
            .forEach(element => {
                element.textContent = count;
            });

    }

    updateCartCount();


    /* =========================
       CARDÁPIO
    ========================= */

    const menuContainer =
        document.getElementById("menuContainer");

    const searchInput =
        document.getElementById("searchInput");

    let selectedCategory = "todos";


    function renderMenu() {

        if (!menuContainer) return;

        const search =
            searchInput?.value
                .toLowerCase()
                .trim() || "";


        const filtered = products.filter(product => {

            const categoryMatch =
                selectedCategory === "todos" ||
                product.category === selectedCategory;

            const searchMatch =
                product.name
                    .toLowerCase()
                    .includes(search) ||

                product.description
                    .toLowerCase()
                    .includes(search);

            return categoryMatch && searchMatch;

        });


        const categories = [
            {
                id: "hamburgueres",
                title: "Hambúrgueres"
            },
            {
                id: "kids",
                title: "Rancho Kids"
            },
            {
                id: "porcoes",
                title: "Porções"
            },
            {
                id: "bebidas",
                title: "Bebidas"
            },
            {
                id: "sobremesas",
                title: "Sobremesas"
            }
        ];


        menuContainer.innerHTML = "";


        categories.forEach(category => {

            const categoryProducts =
                filtered.filter(
                    product =>
                        product.category === category.id
                );


            if (!categoryProducts.length) return;


            const section =
                document.createElement("section");

            section.className = "menu-category";


            section.innerHTML = `

                <div class="menu-category-title">

                    <h2>
                        ${category.title}
                    </h2>

                </div>

                <div class="products-grid"></div>

            `;


            const grid =
                section.querySelector(".products-grid");


            categoryProducts.forEach(product => {

                const card =
                    document.createElement("article");

                card.className = "product-card";


                card.innerHTML = `

                    <div class="product-info">

                        <div class="product-category">
                            ${product.categoryName}
                        </div>

                        <div class="product-name">
                            ${product.name}
                        </div>

                        <div class="product-description">
                            ${product.description}
                        </div>

                        <div class="product-price">
                            ${money(product.price)}
                        </div>

                    </div>

                    <button
                        class="product-add"
                        data-product="${product.id}">
                        +
                    </button>

                `;


                grid.appendChild(card);

            });


            menuContainer.appendChild(section);

        });


        if (!filtered.length) {

            menuContainer.innerHTML = `

                <div class="empty-cart">

                    <h2>
                        Não encontramos.
                    </h2>

                    <p>
                        Tente procurar por outro produto.
                    </p>

                </div>

            `;

        }

    }


    renderMenu();


    /* =========================
       FILTROS
    ========================= */

    document
        .querySelectorAll(".category-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                document
                    .querySelectorAll(".category-btn")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                button.classList.add("active");

                selectedCategory =
                    button.dataset.category;

                renderMenu();

            });

        });


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            renderMenu
        );

    }


    /* =========================
       CUSTOMIZADOR
    ========================= */

    const customizerModal =
        document.getElementById("customizerModal");

    const customizerTitle =
        document.getElementById("customizerTitle");

    const customizerDescription =
        document.getElementById("customizerDescription");

    const customizerPrice =
        document.getElementById("customizerPrice");

    const addonsContainer =
        document.getElementById("addonsContainer");

    const addCustomized =
        document.getElementById("addCustomized");

    const closeCustomizer =
        document.getElementById("closeCustomizer");


    let selectedProduct = null;


    function openCustomizer(product) {

        selectedProduct = product;


        customizerTitle.textContent =
            product.name;

        customizerDescription.textContent =
            product.description;

        customizerPrice.textContent =
            money(product.price);


        addonsContainer.innerHTML = "";


        addons.forEach(addon => {

            const item =
                document.createElement("label");

            item.className = "addon-item";


            item.innerHTML = `

                <div class="addon-item-left">

                    <input
                        type="checkbox"
                        value="${addon.id}"
                    >

                    <div>

                        <strong>
                            ${addon.name}
                        </strong>

                        ${
                            addon.description
                                ? `<small>${addon.description}</small>`
                                : ""
                        }

                    </div>

                </div>

                <span class="addon-price">
                    + ${money(addon.price)}
                </span>

            `;


            const checkbox =
                item.querySelector("input");


            checkbox.addEventListener(
                "change",
                updateCustomizerPrice
            );


            addonsContainer.appendChild(item);

        });


        customizerModal.classList.add("show");

    }


    function updateCustomizerPrice() {

        let total =
            selectedProduct.price;


        document
            .querySelectorAll(
                "#addonsContainer input:checked"
            )
            .forEach(input => {

                const addon =
                    addons.find(
                        item =>
                            item.id === input.value
                    );

                if (addon) {
                    total += addon.price;
                }

            });


        customizerPrice.textContent =
            money(total);

    }


    document.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    ".product-add"
                );


            if (!button) return;


            const product =
                products.find(
                    item =>
                        item.id ===
                        Number(button.dataset.product)
                );


            if (product) {
                openCustomizer(product);
            }

        }
    );


    if (closeCustomizer) {

        closeCustomizer.addEventListener(
            "click",
            () => {
                customizerModal.classList.remove("show");
            }
        );

    }


    if (customizerModal) {

        customizerModal.addEventListener(
            "click",
            event => {

                if (
                    event.target === customizerModal
                ) {
                    customizerModal.classList.remove(
                        "show"
                    );
                }

            }
        );

    }


    /* =========================
       ADICIONAR AO CARRINHO
    ========================= */

    if (addCustomized) {

        addCustomized.addEventListener(
            "click",
            () => {

                if (!selectedProduct) return;


                const selectedAddons = [];


                document
                    .querySelectorAll(
                        "#addonsContainer input:checked"
                    )
                    .forEach(input => {

                        const addon =
                            addons.find(
                                item =>
                                    item.id ===
                                    input.value
                            );

                        if (addon) {
                            selectedAddons.push(addon);
                        }

                    });


                const addonTotal =
                    selectedAddons.reduce(
                        (sum, addon) =>
                            sum + addon.price,
                        0
                    );


                const existing =
                    cart.find(item =>
                        item.productId === selectedProduct.id &&
                        JSON.stringify(item.addons) ===
                        JSON.stringify(
                            selectedAddons.map(a => a.id)
                        )
                    );


                if (existing) {

                    existing.quantity++;

                } else {

                    cart.push({

                        id:
                            Date.now(),

                        productId:
                            selectedProduct.id,

                        name:
                            selectedProduct.name,

                        price:
                            selectedProduct.price,

                        addons:
                            selectedAddons.map(
                                addon => ({
                                    id: addon.id,
                                    name: addon.name,
                                    price: addon.price
                                })
                            ),

                        addonTotal:
                            addonTotal,

                        quantity:
                            1

                    });

                }


                saveCart();

                updateCartUI();

                customizerModal.classList.remove(
                    "show"
                );

                showToast(
                    "Adicionado ao carrinho"
                );

            }
        );

    }


    /* =========================
       TOAST
    ========================= */

    function showToast(message) {

        const toast =
            document.getElementById("toast");

        if (!toast) return;

        toast.textContent = message;

        toast.classList.add("show");


        setTimeout(() => {

            toast.classList.remove("show");

        }, 2200);

    }


    /* =========================
       CARRINHO
    ========================= */

    const cartPageContainer =
        document.getElementById(
            "cartPageContainer"
        );


    function getCartItemTotal(item) {

        return (
            item.price +
            (item.addonTotal || 0)
        );

    }


    function getCartTotal() {

        return cart.reduce(
            (total, item) =>
                total +
                getCartItemTotal(item) *
                item.quantity,
            0
        );

    }


    function updateCartUI() {

        updateCartCount();


        if (!cartPageContainer) return;


        if (!cart.length) {

            cartPageContainer.innerHTML = `

                <div class="empty-cart">

                    <h2>
                        Seu carrinho está vazio.
                    </h2>

                    <p>
                        Escolha alguma coisa deliciosa
                        no cardápio.
                    </p>

                    <a
                        href="cardapio.html"
                        class="btn btn-primary">

                        VER CARDÁPIO

                    </a>

                </div>

            `;

            return;

        }


        cartPageContainer.innerHTML = `

            <div class="cart-layout">

                <div class="cart-items">

                    ${cart.map((item, index) => `

                        <article class="cart-item">

                            <div>

                                <h3>
                                    ${item.name}
                                </h3>

                                ${
                                    item.addons?.length
                                    ?
                                    `<p>
                                        Acréscimos:
                                        ${item.addons
                                            .map(a => a.name)
                                            .join(", ")}
                                    </p>`
                                    :
                                    ""
                                }

                                <div class="cart-item-price">
                                    ${money(
                                        getCartItemTotal(item)
                                    )}
                                </div>


                                <div class="cart-controls">

                                    <button
                                        class="qty-btn"
                                        data-action="decrease"
                                        data-index="${index}">
                                        −
                                    </button>

                                    <strong>
                                        ${item.quantity}
                                    </strong>

                                    <button
                                        class="qty-btn"
                                        data-action="increase"
                                        data-index="${index}">
                                        +
                                    </button>

                                    <button
                                        class="remove-btn"
                                        data-action="remove"
                                        data-index="${index}">
                                        Remover
                                    </button>

                                </div>

                            </div>

                            <strong class="cart-item-price">
                                ${money(
                                    getCartItemTotal(item) *
                                    item.quantity
                                )}
                            </strong>

                        </article>

                    `).join("")}

                </div>


                <aside class="cart-summary">

                    <h2>
                        Resumo
                    </h2>

                    <div class="summary-line">

                        <span>
                            Subtotal
                        </span>

                        <strong>
                            ${money(getCartTotal())}
                        </strong>

                    </div>

                    <div class="summary-line">

                        <span>
                            Total
                        </span>

                        <strong class="summary-total">
                            ${money(getCartTotal())}
                        </strong>

                    </div>

                    <button
                        class="btn btn-primary full-btn"
                        id="openCheckout">

                        FINALIZAR PEDIDO

                    </button>

                </aside>

            </div>

        `;


        document
            .querySelectorAll("[data-action]")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const index =
                            Number(
                                button.dataset.index
                            );

                        const action =
                            button.dataset.action;


                        if (action === "increase") {

                            cart[index].quantity++;

                        }


                        if (action === "decrease") {

                            cart[index].quantity--;

                            if (
                                cart[index].quantity <= 0
                            ) {
                                cart.splice(index, 1);
                            }

                        }


                        if (action === "remove") {

                            cart.splice(index, 1);

                        }


                        saveCart();

                        updateCartUI();

                    }
                );

            });


        const openCheckout =
            document.getElementById(
                "openCheckout"
            );


        if (openCheckout) {

            openCheckout.addEventListener(
                "click",
                () => {

                    document
                        .getElementById(
                            "checkoutModal"
                        )
                        .classList.add("show");

                }
            );

        }

    }


    updateCartUI();


    /* =========================
       CHECKOUT
    ========================= */

    const closeCheckout =
        document.getElementById(
            "closeCheckout"
        );


    if (closeCheckout) {

        closeCheckout.addEventListener(
            "click",
            () => {

                document
                    .getElementById(
                        "checkoutModal"
                    )
                    .classList.remove("show");

            }
        );

    }


    const sendWhatsApp =
        document.getElementById(
            "sendWhatsApp"
        );


    if (sendWhatsApp) {

        sendWhatsApp.addEventListener(
            "click",
            () => {

                const name =
                    document
                        .getElementById(
                            "customerName"
                        )
                        .value
                        .trim();


                const observation =
                    document
                        .getElementById(
                            "customerObservation"
                        )
                        .value
                        .trim();


                if (!name) {

                    alert(
                        "Digite seu nome antes de continuar."
                    );

                    return;

                }


                let message =
                    `*NOVO PEDIDO - RANCHO CASA DE LANCHES*%0A%0A`;


                message +=
                    `*Cliente:* ${name}%0A%0A`;


                message +=
                    `*PEDIDO:*%0A`;


                cart.forEach(item => {

                    message +=
                        `${item.quantity}x ${item.name}`;


                    if (
                        item.addons &&
                        item.addons.length
                    ) {

                        message +=
                            `%0A   + ` +
                            item.addons
                                .map(
                                    addon =>
                                        addon.name
                                )
                                .join(", ");

                    }


                    message +=
                        `%0A   ${money(
                            getCartItemTotal(item) *
                            item.quantity
                        )}%0A%0A`;

                });


                message +=
                    `*TOTAL: ${money(
                        getCartTotal()
                    )}*%0A`;


                if (observation) {

                    message +=
                        `%0A*Observações:* ${observation}`;

                }


                const phone =
                    "5518981567633";


                const url =
                    `https://wa.me/${phone}?text=${message}`;


                window.open(
                    url,
                    "_blank"
                );

            }
        );

    }

});