console.log("sceipt hentet");

const div = document.querySelector(".product_list_container"); 
fetch('https://kea-alt-del.dk/t7/api/products?limit=100')

.then((Response) => Response.json())
.then(showList); 
function showList(products){
    console.log(products); //man kan også skrive data i stedet for products//
let markup ="";
 products.map((product)=> {
    markup += `<div class="product_card available">
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp
" alt="Sahara Team India Fanwear" />
    <h3> ${product.productdisplayname}</h3>
    <p> ${product.articletype} | ${product.brandname}</p>
    <p>DKK ${product.price},-</p>
    <a href="produkt.html?id=/${product.id}" class="button">Read More</a>
  </div>`
})
.join(""); 
console.log(markup);
div.innerHTML = markup;
}
