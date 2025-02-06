
let productContainer = document.querySelector(".productContainer");

const myId = new URLSearchParams (window.location.search).get("id");
fetch(`https://kea-alt-del.dk/t7/api/products/${myId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
       <div class="produkt_grid">
        <div class="produkt_billede">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp
" alt="Sahara Team India Fanwear" />
        </div>
        <div class="produkt_tekst">
          <h2>Product Information</h2>
          <h3>Model name</h3>
          <p>${data.productdisplayname	}</p>
          <h3>Color</h3>
          <p>${data.basecolour}</p>
          <h3>Inventory number</h3>
          <p>${data.relid}</p>
          <div class="nike">
            <h2>${data.brandname	}</h2>
            <p>${data.brandbio}</p>
          </div>
        </div>
        <div class="basket">
          <h2 class="h22">${data.productdisplayname}</h2>
          <p class="p2">${data.brandname} | ${data.articletype	}</p>
          <div class="size">
            <form action="/submit-size" method="post">
              <label for="size">Select a size:</label>
              <select id="size" name="size" required>
                <option value="">--Select a size--</option>
                <option value="small">S</option>
                <option value="medium">M</option>
                <option value="large">L</option>
                <option value="xlarge">XL</option>
              </select>
            </form>
          </div>
          <a href="basket.html" class="kurv"> Add to Basket</a>
        </div>
      </div>
    `;
  });

