const products = [

    {
        name: "Crochet Bee",

        price: "$18",

        image: "images/bee.jpg",

        description:
            "A cute handmade bee made with soft yarn.",

        formLink:
            "https://forms.gle/cZs3nH5p5qJp5mHc7"
    },


    {
        name: "Crochet Turtle",

        price: "$25",

        image: "images/turtle.jpg",

        description:
            "A friendly little turtle gift.",

        formLink:
            "https://forms.gle/cZs3nH5p5qJp5mHc7"
    },


    {
        name: "Sunflower",

        price: "$22",

        image: "images/sunflower.jpg",

        description:
            "A handmade sunflower decoration.",

        formLink:
            "https://forms.gle/cZs3nH5p5qJp5mHc7"
    },


    {
        name: "Crochet Octopus",

        price: "$20",

        image: "images/octopus.jpg",

        description:
            "A colorful handmade octopus.",

        formLink:
            "https://forms.gle/cZs3nH5p5qJp5mHc7"
    }

];



const productList =
    document.getElementById("product-list");



products.forEach(product => {


    const card =
        document.createElement("div");


    card.className = "card";


    card.innerHTML = `

        <img src="${product.image}"
             alt="${product.name}">


        <h3>
            ${product.name}
        </h3>


        <p>
            ${product.description}
        </p>


        <div class="price">
            ${product.price}
        </div>


        <a class="request-btn"
           href="${product.formLink}"
           target="_blank">

            Request This Item

        </a>

    `;


    productList.appendChild(card);

});