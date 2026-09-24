// ==========================================
// MSI PRINTS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // DARK / LIGHT MODE
    // ==========================================

    const themeBtn = document.getElementById("themeBtn");

    if (themeBtn) {

        const icon = themeBtn.querySelector("i");

        function updateThemeIcon() {

            if (document.body.classList.contains("light-mode")) {

                if (icon) {
                    icon.className = "fa-solid fa-sun";
                }

            } else {

                if (icon) {
                    icon.className = "fa-solid fa-moon";
                }

            }

        }


        themeBtn.addEventListener("click", function () {

            document.body.classList.toggle("light-mode");

            const isLight =
                document.body.classList.contains("light-mode");

            localStorage.setItem(
                "theme",
                isLight ? "light" : "dark"
            );

            updateThemeIcon();

        });


        const savedTheme =
            localStorage.getItem("theme");

        if (savedTheme === "light") {
            document.body.classList.add("light-mode");
        }

        updateThemeIcon();
    }


    // ==========================================
    // MOBILE MENU
    // ==========================================

    const menuBtn =
        document.getElementById("menuBtn");

    const navbar =
        document.getElementById("navbar");


    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", function () {

            navbar.classList.toggle("show");

            const icon =
                menuBtn.querySelector("i");

            if (
                icon &&
                navbar.classList.contains("show")
            ) {

                icon.className =
                    "fa-solid fa-xmark";

                menuBtn.setAttribute(
                    "aria-label",
                    "Close menu"
                );

            } else {

                if (icon) {
                    icon.className =
                        "fa-solid fa-bars";
                }

                menuBtn.setAttribute(
                    "aria-label",
                    "Open menu"
                );

            }

        });


        // Close mobile menu after clicking a link

        const navLinks =
            navbar.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navbar.classList.remove("show");

                const icon =
                    menuBtn.querySelector("i");

                if (icon) {
                    icon.className =
                        "fa-solid fa-bars";
                }

                menuBtn.setAttribute(
                    "aria-label",
                    "Open menu"
                );

            });

        });

    }


    // ==========================================
    // PRODUCT SEARCH
    // ==========================================

    const searchInput =
        document.getElementById("searchInput");

    const products =
        document.querySelectorAll(".product-card");


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            function () {

                const search =
                    searchInput.value
                        .toLowerCase()
                        .trim();


                products.forEach(function (product) {

                    const nameElement =
                        product.querySelector(
                            ".product-name"
                        );


                    const categoryElement =
                        product.querySelector(
                            ".product-category"
                        );


                    const name =
                        nameElement
                            ? nameElement.textContent
                                .toLowerCase()
                            : "";


                    const category =
                        categoryElement
                            ? categoryElement.textContent
                                .toLowerCase()
                            : "";


                    if (
                        name.includes(search) ||
                        category.includes(search)
                    ) {

                        product.style.display = "";

                    } else {

                        product.style.display = "none";

                    }

                });

            }
        );

    }


    // ==========================================
    // CATEGORY FILTER
    // ==========================================

    const categoryButtons =
        document.querySelectorAll(
            ".category-btn"
        );


    categoryButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                categoryButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add("active");


                const category =
                    button.dataset.category;


                if (searchInput) {
                    searchInput.value = "";
                }


                products.forEach(
                    function (product) {

                        if (
                            category === "all" ||
                            product.dataset.category ===
                                category
                        ) {

                            product.style.display =
                                "";

                        } else {

                            product.style.display =
                                "none";

                        }

                    }
                );

            }
        );

    });


    // ==========================================
    // WHATSAPP
    // ==========================================

    const whatsappNumber =
        "2347044030909";


    const whatsappButtons =
        document.querySelectorAll(
            'a[href*="wa.me"]'
        );


    whatsappButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const productCard =
                        button.closest(
                            ".product-card"
                        );


                    let message;


                    // Product message

                    if (productCard) {

                        const productNameElement =
                            productCard.querySelector(
                                ".product-name"
                            );


                        const productName =
                            productNameElement
                                ? productNameElement
                                    .textContent
                                    .trim()
                                : "your products";


                        message =
                            `Hi M.S.I PRINTS 

I'm interested in ${productName}.

Please send me more details, availability and other available products.

Thank you.`;

                    }


                    // General message

                    else {

                        message =
                            `Hi M.S.I PRINTS 👋

I'm interested in your Printing serices 
Please send me your available products and more details.

Thank you.`;

                    }


                    const whatsappURL =
                        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                            message
                        )}`;


                    button.href =
                        whatsappURL;

                }
            );

        }
    );


    // ==========================================
    // FOOTER YEAR
    // ==========================================

    const year =
        document.getElementById("year");


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    // ==========================================
    // BACK TO TOP
    // ==========================================

    const topBtn =
        document.getElementById("topBtn");


    if (topBtn) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 500) {

                    topBtn.classList.add("show");

                } else {

                    topBtn.classList.remove("show");

                }

            }
        );


        topBtn.addEventListener(
            "click",
            function () {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }


    // ==========================================
    // CEO 3D MOUSE EFFECT
    // ==========================================

    const ceoCard =
        document.querySelector(
            ".ceo-photo-card"
        );


    // Only enable the mouse effect on devices
    // that actually support hover.

    if (
        ceoCard &&
        window.matchMedia(
            "(hover: hover)"
        ).matches
    ) {

        ceoCard.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    ceoCard.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateY =
                    ((x - centerX) /
                        centerX) * 10;


                const rotateX =
                    ((centerY - y) /
                        centerY) * 10;


                ceoCard.style.transform =
                    `rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)
                     scale(1.03)`;

            }
        );


        ceoCard.addEventListener(
            "mouseleave",
            function () {

                ceoCard.style.transform =
                    "rotateY(-12deg) rotateX(5deg)";

            }
        );

    }


    // ==========================================
    // ACTIVE NAVIGATION
    // ==========================================

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    window.addEventListener(
        "scroll",
        function () {

            let current = "";


            sections.forEach(
                function (section) {

                    const sectionTop =
                        section.offsetTop - 120;


                    if (
                        window.scrollY >=
                        sectionTop
                    ) {

                        current =
                            section.getAttribute(
                                "id"
                            );

                    }

                }
            );


            navLinks.forEach(
                function (link) {

                    link.classList.remove(
                        "active"
                    );


                    if (
                        link.getAttribute(
                            "href"
                        ) === `#${current}`
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                }
            );

        }
    );

    // ==========================================
// 3D PRODUCT CARD EFFECT
// ==========================================

const productCards = document.querySelectorAll(".product-card");

productCards.forEach(function (card) {

    const image = card.querySelector(".product-image img");

    // PC / mouse
    card.addEventListener("mousemove", function (e) {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 8;
        const rotateX = ((centerY - y) / centerY) * 8;

        card.classList.add("is-3d");

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-7px)`;

        if (image) {
            const moveX = ((x - centerX) / centerX) * 8;
            const moveY = ((y - centerY) / centerY) * 8;

            image.style.transform =
                `scale(1.05)
                 translate(${moveX}px, ${moveY}px)`;
        }
    });

    // Return to normal
    card.addEventListener("mouseleave", function () {

        card.classList.remove("is-3d");

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";

        if (image) {
            image.style.transform = "";
        }
    });

    // ======================================
    // TOUCH SUPPORT FOR PHONES
    // ======================================

    card.addEventListener(
        "touchmove",
        function (e) {

            const touch = e.touches[0];

            const rect = card.getBoundingClientRect();

            const x = touch.clientX - rect.left;
            const y = touch.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateY =
                ((x - centerX) / centerX) * 5;

            const rotateX =
                ((centerY - y) / centerY) * 5;

            card.classList.add("is-3d");

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-4px)`;

        },
        { passive: true }
    );

    card.addEventListener("touchend", function () {

        card.classList.remove("is-3d");

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";

        if (image) {
            image.style.transform = "";
        }
    });

});


    // ==========================================
    // WEBSITE LOADED
    // ==========================================

    console.log(
        "A.D.S Shoes & Bags Store loaded successfully."
    );

});

// ==========================================
// SCREEN READER
// ==========================================

const screenReaderBtn =
    document.getElementById("screenReaderBtn");

const accessibilityPanel =
    document.getElementById("accessibilityPanel");

const readPageBtn =
    document.getElementById("readPageBtn");

const stopReadingBtn =
    document.getElementById("stopReadingBtn");


// Open / close accessibility panel

if (screenReaderBtn && accessibilityPanel) {

    screenReaderBtn.addEventListener("click", function () {

        accessibilityPanel.classList.toggle("show");

        const isOpen =
            accessibilityPanel.classList.contains("show");

        screenReaderBtn.setAttribute(
            "aria-expanded",
            isOpen
        );
    });
}


// Read page

if (readPageBtn) {

    readPageBtn.addEventListener("click", function () {

        // Stop anything currently being read
        window.speechSynthesis.cancel();

        // Get page text
        const pageText = document.body.innerText;

        const speech =
            new SpeechSynthesisUtterance(pageText);

        speech.lang = "en-US";

        speech.rate = 0.9;

        speech.pitch = 1;

        speech.volume = 1;

        window.speechSynthesis.speak(speech);
    });
}


// Stop reading

if (stopReadingBtn) {

    stopReadingBtn.addEventListener("click", function () {

        window.speechSynthesis.cancel();

    });
}