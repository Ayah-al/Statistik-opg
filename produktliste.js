const productContainer = document.querySelector(".productContainer");
const productId = 1530;
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
    <figure>
        <img
          src="https://kea-alt-del.dk/t7/images/webp/640/${dataId}.webp
"
          alt="Produktbillede"
          class="productImage"
        />
        <span class="saleLabel">Udsalg!</span>
      </figure>
      <section class="productDetails">
        <h2 class="productName">Produktnavn</h2>
        <div>
        <p class="articleType"><span class="bold">Type:</span> ${data.articletype}</p>
          <p class="productCategory"><span class="bold">Kategori:</span> ${data.category}</p>
          <p class="productPrice"><span class="bold">Pris:</span> ${data.price},-</p>
        </div>
        <button class="buyButton">Køb nu</button>
      </section>
    `;
  });

