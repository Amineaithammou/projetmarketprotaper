products = [
    { id: 0, name: "vilbrequin", brand: "polini", photo: "vilbrokan (1).jpg", price: 2000 },
    {
      id: 1,
      name: "po d'echappement",
      brand: "akrapovich",
      photo: "akra (1).jpg",
      price: 400,
    },
    {
      id: 2,
      name: "volant viper rs6",
      brand: "audi",
      photo: "volant (1).jpg",
      price: 2000,
    },
    {
      id: 3,
      name: "embreage",
      brand: "jcosta",
      photo: "clutch (1).jpg",
      price: 700,
    },
    {
      id: 4,
      name: "frein",
      brand: "brembo",
      photo: "frein (1).jpg",
      price: 500,
    },
    {
      id: 5,
      name: "engine V8 supercharged",
      brand: "dodge",
      photo: "dodgeengine (1).jpg",
      price: 100000,
    },
    { id: 6, name: "pneu offroad", brand: "michelin", photo: "pneu.jpg", price: 1000 },
    
  ];
  
  cart = [];
  cartObj = [];
  
  function addCart(n) {
    cart.push(n);
    cartObj = cart.map((e) => products.find((g) => g.id == e));
  }
  
  function li(txt) {
    el = document.createElement("li");
    el.innerHTML = txt;
    cartList.appendChild(el);
  }
  
  function liObj(n) {
    let prodFind = products.find((e) => e.id == n);
    li(prodFind.name + " - " + "dh" + prodFind.price);
  }
  
  function somar() {
    S = 0;
    let resultado = cartObj.map((a, b) => (S += a.price));
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").innerHTML =
      "<b>Total:</b> dh " + S.toFixed(2);
  }
  
  function limpar() {
    cartObj = [];
    cartList.innerHTML = "";
    somar();
  }
  
  function adicionar(photo, name, brand, price, id) {
    estrutura = `
          <div class="card">
                  <img src="${photo}" class="card-photo" >
                  <div class="card-body">
                      <div class="card-names">
                      <h5 class="card-name">${name}</h5>
                      <h5 class="card-brand">${brand}</h5>
                      </div>
                  <p class="card-price">${price} dh</p>
                  <button onclick="liObj(${id}); addCart(${id});somar()" class="button">acheter</button>
                  </div>
          </div>
      `;
  
    div_produtos.innerHTML += estrutura;
  }
  
  products.map((products) =>
    adicionar(
      "img/" + products.photo,
      products.name + " -",
      products.brand,
      " " + products.price,
      products.id
    )
  );
  