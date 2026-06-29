const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    title: "ROG Zephyrus G14",
    badge: "RTX 4070",
    rating: "★★★★★",
    price: 185000,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    title: "MSI Raider GE78",
    badge: "RTX 4080",
    rating: "★★★★★",
    price: 245000,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1591799265444-d66432b91588?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    title: "ASUS TUF Gaming A15",
    badge: "Ryzen 7",
    rating: "★★★★☆",
    price: 129000,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    title: "HyperX Alloy Elite 2",
    badge: "Механика",
    rating: "★★★★★",
    price: 24000,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    title: "RTX 4090 Suprim X",
    badge: "24GB GDDR6X",
    rating: "★★★★★",
    price: 320000,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    title: "Acer Predator Orion",
    badge: "i9 / 32GB",
    rating: "★★★★★",
    price: 310000,
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    title: "LG UltraGear 27GP850",
    badge: "165Hz",
    rating: "★★★★★",
    price: 86000,
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    title: "NZXT Kraken X63",
    badge: "RGB Cooling",
    rating: "★★★★☆",
    price: 38000,
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    title: "Corsair Vengeance DDR5",
    badge: "32GB RAM",
    rating: "★★★★★",
    price: 52000,
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    title: "Razer BlackWidow V4",
    badge: "Клавиатура",
    rating: "★★★★★",
    price: 28000,
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    title: "Alienware Aurora R15",
    badge: "RTX 4070 Ti",
    rating: "★★★★★",
    price: 299000,
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    title: "SteelSeries Arctis Nova",
    badge: "7.1 Audio",
    rating: "★★★★☆",
    price: 32000,
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1575024357670-2b5164f470c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    title: "Logitech G Pro X",
    badge: "Кастомная",
    rating: "★★★★★",
    price: 26000,
  },
  {
    id: 14,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    title: "RTX 4070 Ti Super",
    badge: "16GB GDDR6X",
    rating: "★★★★★",
    price: 245000,
  },
  {
    id: 15,
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    title: "AORUS Xtreme 27",
    badge: "240Hz",
    rating: "★★★★★",
    price: 98000,
  },
  {
    id: 16,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    title: "DeepCool FK120",
    badge: "ARGB Fans",
    rating: "★★★★☆",
    price: 17000,
  },
  {
    id: 17,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    title: "Kingston Fury SSD 2TB",
    badge: "PCIe 4.0",
    rating: "★★★★★",
    price: 33000,
  },
  {
    id: 18,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    title: "BenQ MOBIUZ EX2710",
    badge: "144Hz",
    rating: "★★★★☆",
    price: 74000,
  },
  {
    id: 19,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    title: "Cooler Master H500",
    badge: "RGB Case",
    rating: "★★★★★",
    price: 62000,
  },
  {
    id: 20,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    title: "Razer DeathAdder V3",
    badge: "Мышь",
    rating: "★★★★★",
    price: 18000,
  },
  {
    id: 21,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    title: "RTX 4060 Ti Build",
    badge: "Игровая сборка",
    rating: "★★★★★",
    price: 210000,
  },
  {
    id: 22,
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    title: "NVIDIA Shield Monitor",
    badge: "4K / 60Hz",
    rating: "★★★★☆",
    price: 114000,
  },
];

const STORAGE_KEY_FAVORITES = "neogear-favorites";
const favorites = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY_FAVORITES)) || []);

const productGrid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");
const cartPanel = document.getElementById("cartPanel");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const closeCart = document.getElementById("closeCart");
const cartButton = document.querySelector(".cart-btn");
const checkoutButton = document.getElementById("checkoutButton");
const favoritesButton = document.getElementById("favoritesButton");
const favoritesPanel = document.getElementById("favoritesPanel");
const closeFavorites = document.getElementById("closeFavorites");
const favoritesItems = document.getElementById("favoritesItems");
const favoritesCount = document.getElementById("favoritesCount");
const overlay = document.getElementById("overlay");
const checkoutModal = document.getElementById("checkoutModal");
const closeCheckout = document.getElementById("closeCheckout");
const checkoutForm = document.getElementById("checkoutForm");
const checkoutSuccess = document.getElementById("checkoutSuccess");

let cart = [];

function formatPrice(price) {
  return `${price.toLocaleString("ru-RU")} сом`;
}

function saveFavorites() {
  localStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify([...favorites]));
}

function updateFavoriteBadge() {
  const count = favorites.size;
  favoritesCount.textContent = count;
  favoritesButton.classList.toggle("active", count > 0);
}

function getProductById(id) {
  return products.find((item) => item.id === Number(id));
}

function renderProducts() {
  productGrid.innerHTML = products
    .map((product) => {
      const isFavorite = favorites.has(product.id) ? "active" : "";
      return `
        <article class="product-card">
          <button class="favorite-toggle ${isFavorite}" data-id="${product.id}" type="button" aria-label="Избранное">❤</button>
          <span class="badge">${product.badge}</span>
          <div class="product-image-wrap">
            <img src="${product.image}" alt="${product.title}" />
          </div>
          <div class="product-info">
            <h3>${product.title}</h3>
            <div class="rating">${product.rating}</div>
            <div class="price-row">
              <span class="price">${formatPrice(product.price)}</span>
            </div>
            <button class="add-btn" data-id="${product.id}" type="button">В корзину</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">Корзина пока пуста.</p>';
    cartTotal.textContent = "0 сом";
  } else {
    cartItems.innerHTML = cart
      .map(
        (item) => `
          <div class="cart-item">
            <span>${item.title}</span>
            <strong>${formatPrice(item.price)}</strong>
          </div>
        `
      )
      .join("");

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = formatPrice(total);
  }

  cartCount.textContent = cart.length;
  cartCount.classList.remove("pop");
  void cartCount.offsetWidth;
  cartCount.classList.add("pop");
}

function renderFavorites() {
  if (favorites.size === 0) {
    favoritesItems.innerHTML = '<p class="cart-empty">Список избранного пуст.</p>';
  } else {
    favoritesItems.innerHTML = [...favorites]
      .map((id) => {
        const product = getProductById(id);
        if (!product) return "";
        return `
          <div class="favorite-item">
            <div>
              <strong>${product.title}</strong>
              <div>${formatPrice(product.price)}</div>
            </div>
            <div class="favorite-actions">
              <button class="favorite-add" data-id="${product.id}" type="button">В корзину</button>
              <button class="favorite-remove" data-id="${product.id}" type="button">Удалить</button>
            </div>
          </div>
        `;
      })
      .join("");
  }
  updateFavoriteBadge();
}

function addToCart(id) {
  const selected = getProductById(id);
  if (!selected) return;
  cart.push(selected);
  renderCart();
}

function toggleFavorite(id) {
  const productId = Number(id);
  if (favorites.has(productId)) {
    favorites.delete(productId);
  } else {
    favorites.add(productId);
  }
  saveFavorites();
  renderProducts();
  renderFavorites();
}

function openFavoritesPanel() {
  favoritesPanel.classList.add("open");
  overlay.classList.add("show");
  document.body.classList.add("modal-open");
}

function closeFavoritesPanel() {
  favoritesPanel.classList.remove("open");
  if (!checkoutModal.classList.contains("show") && !cartPanel.classList.contains("open")) {
    overlay.classList.remove("show");
    document.body.classList.remove("modal-open");
  }
}

function openCheckoutModal() {
  checkoutModal.classList.add("show");
  overlay.classList.add("show");
  document.body.classList.add("modal-open");
  checkoutForm.reset();
  checkoutSuccess.classList.remove("show");
}

function closeCheckoutModal() {
  checkoutModal.classList.remove("show");
  checkoutSuccess.classList.remove("show");
  if (!favoritesPanel.classList.contains("open") && !cartPanel.classList.contains("open")) {
    overlay.classList.remove("show");
    document.body.classList.remove("modal-open");
  }
}

productGrid.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest(".favorite-toggle");
  if (favoriteButton) {
    toggleFavorite(favoriteButton.dataset.id);
    return;
  }

  const addButton = event.target.closest(".add-btn");
  if (!addButton) return;
  addToCart(addButton.dataset.id);
});

favoritesButton.addEventListener("click", openFavoritesPanel);
closeFavorites.addEventListener("click", closeFavoritesPanel);

favoritesItems.addEventListener("click", (event) => {
  const addButton = event.target.closest(".favorite-add");
  if (addButton) {
    addToCart(addButton.dataset.id);
    return;
  }

  const removeButton = event.target.closest(".favorite-remove");
  if (removeButton) {
    toggleFavorite(removeButton.dataset.id);
  }
});

cartButton.addEventListener("click", () => {
  cartPanel.classList.add("open");
  overlay.classList.add("show");
  document.body.classList.add("modal-open");
});

closeCart.addEventListener("click", () => {
  cartPanel.classList.remove("open");
  if (!favoritesPanel.classList.contains("open") && !checkoutModal.classList.contains("show")) {
    overlay.classList.remove("show");
    document.body.classList.remove("modal-open");
  }
});

checkoutButton.addEventListener("click", () => {
  cartPanel.classList.remove("open");
  openCheckoutModal();
});

closeCheckout.addEventListener("click", closeCheckoutModal);

overlay.addEventListener("click", () => {
  if (favoritesPanel.classList.contains("open")) {
    closeFavoritesPanel();
  } else if (checkoutModal.classList.contains("show")) {
    closeCheckoutModal();
  } else if (cartPanel.classList.contains("open")) {
    cartPanel.classList.remove("open");
    overlay.classList.remove("show");
    document.body.classList.remove("modal-open");
  }
});

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!checkoutForm.checkValidity()) {
    checkoutForm.reportValidity();
    return;
  }

  checkoutSuccess.classList.add("show");
  checkoutForm.reset();

  setTimeout(() => {
    cart = [];
    renderCart();
    closeCheckoutModal();
  }, 1600);
});

renderProducts();
renderCart();
renderFavorites();

closeCart.addEventListener("click", () => {
  cartPanel.classList.remove("open");
});

renderProducts();
renderCart();
