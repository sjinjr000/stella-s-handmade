const products = [

    {
        name: "Fruit friends",

        price: "$",

        image: "images/fruit.jpg",

        description:
            "Inspiration from fruits",

        formLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSfL0EA8tIduWa1n70XeBVTyw2VnxXRIHQwAcsAKVKa8C9_qNA/viewform?usp=pp_url&entry.1000027=Fruit+friends&entry.231817578=Kiwi"
    },


    {
        name: "Best friends",

        price: "$",

        image: "images/bff.jpg",

        description:
            "For our BFF",

        formLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSfL0EA8tIduWa1n70XeBVTyw2VnxXRIHQwAcsAKVKa8C9_qNA/viewform?usp=pp_url&entry.1000027=Best+friends&entry.231817578=BFF"
    },


    {
        name: "Classic",

        price: "$",

        image: "images/chevron.jpg",

        description:
            "A classical chevron pattern",

        formLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSfL0EA8tIduWa1n70XeBVTyw2VnxXRIHQwAcsAKVKa8C9_qNA/viewform?usp=pp_url&entry.1000027=Classic&entry.231817578=Classic"
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

