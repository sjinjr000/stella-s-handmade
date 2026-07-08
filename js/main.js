const products = [

    {
        name: "Fruit friends",

        price: "$8",

        image: "images/fruit.jpg",

        description:
            "Inspiration from fruits",

        formLink:
            "https://forms.gle/cZs3nH5p5qJp5mHc7"
    },


    {
        name: "Best friends",

        price: "$8",

        image: "images/bff.jpg",

        description:
            "For our BFF",

        formLink:
            "https://forms.gle/cZs3nH5p5qJp5mHc7"
    },


    {
        name: "Classic",

        price: "$8",

        image: "images/chevron.jpg",

        description:
            "A classical chevron pattern",

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


        <div class="card-footer">

    <div class="price">
        ${product.price}
    </div>

    <a class="request-btn"
       href="${product.formLink}"
       target="_blank">

        Request

    </a>

</div>

    `;


    productList.appendChild(card);

});
