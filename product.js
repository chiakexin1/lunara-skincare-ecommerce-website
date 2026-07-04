const products = [
  // Skintific
  {
    id: 1,
    brand: "skintific",
    name: "Barrier Repair Cream",
    price: "RM 79.00",
    image: "image/Moisturizer.jpg",
    description: "Moisturizer that hydrates and strengthens skin barrier."
  },
  {
    id: 2,
    brand: "skintific",
    name: "Toner",
    price: "RM 39.00",
    image: "image/Toner.jpg",
    description: "Moisturizer that hydrates and strengthens skin barrier."
  },
  {
    id: 3,
    brand: "skintific",
    name: "377 Serum",
    price: "RM 56.00",
    image: "image/377Serum.jpg",
    description: "377 Dark Spot Serum suitable for all skin types."
  },
  {
    id: 4,
    brand: "skintific",
    name: "Skintific Gel Cleanser",
    price: "RM 30.00",
    image: "image/GelCleanser.jpg",
    description: "Smooth Skin pencuci muka Panoxyl Face Wash Amino Acid Oil Control"
  },
  {
    id: 5,
    brand: "skintific",
    name: "Sunscreen",
    price: "RM 69.00",
    image: "image/Sunscreen.jpg",
    description: "SPF50+PA++++UV Protection Oil Control Fast-Absorbing Light Physical Tinted Sunscreen"
  },
  {
    id: 6,
    brand: "skintific",
    name: "Eye Cream",
    price: "RM 59.00",
    image: "image/EyeCream.jpg",
    description: "Removes Fine Lines Dark Circles Reduces wrinkles Anti-aging"
  },

  // La Roche-Posay
  {
    id: 7,
    brand: "laroche",
    name: "Anthelios Sunscreen SPF50+",
    price: "RM 120.00",
    image: "image/Anthelios.jpg",
    description: "Dermatologist-tested sun protection for sensitive skin."
  },
  {
    id: 8,
    brand: "laroche",
    name: "Cicaplast Baume B5+",
    price: "RM 55.00",
    image: "image/Cicaplast.jpg",
    description: "Soothing Multi-Purpose Balm - Dry-Skin Irritations 100ml"
  },
  {
    id: 9,
    brand: "laroche",
    name: "Mela B3 Serum",
    price: "RM 66.00",
    image: "image/MelaB3.jpg",
    description: "Intensive anti-dark spots concentrate serum, anti-recurrence 30ml"
  },
  {
     id: 10,
    brand: "laroche",
    name: "Effaclar Serum",
    price: "RM 66.00",
    image: "image/Effaclar.jpg",
    description: "Anti-Acne Serum with Salicylic, Glycolic Acid, Niacinamide for Oily Acne-Prone Skin 30ml"
  },

  // CosRx
  {
    id: 11,
    brand: "cosrx",
    name: "Original Clear Pad",
    price: "RM 55.20",
    image: "image/ClearPad.jpg",
    description: "COSRX One Step Original CLear Pad (70 Pads)"
  },
  {
    id: 12,
    brand: "cosrx",
    name: "Propolis Synergy Toner",
    price: "RM 57.50",
    image: "image/Propolis.jpg",
    description: "COSRX Full Fit Propolis Synergy Toner 150ml"
  },
  {
    id: 13,
    brand: "cosrx",
    name: "COSRX Low PH Gel CLeanser",
    price: "RM 40.50",
    image: "image/COSRXcleanser.jpg",
    description: "COSRX Low PH Good Morning Gel Cleanser 150ml"
  },
  {
    id: 14,
    brand: "cosrx",
    name: "Acne treatment torner",
    price: "RM 46.30",
    image: "image/AcneToner.jpg",
    description: "COSRX AHA/BHA Clarifying Treatment Toner 150ml"
  },
  {
    id: 15,
    brand: "cosrx",
    name: "Acne Pimple Master Patch",
    price: "RM 24",
    image: "image/MasterPatch.jpg",
    description: "COSRX Acne Pimple Master Patch (24 Patches)"
  },

  // Eucerin
  {
    id: 16,
    brand: "eucerin",
    name: "Dry Lip Moiturizer",
    price: "RM 20.00",
    image: "image/LipMoisturizer.jpg",
    description: "Eucerin Active Dry Lip Moiturizer SPF20 (4.8g)"
  },
  {
    id: 17,
    brand: "eucerin",
    name: "Spotless Brightening Cleansing Foam",
    price: "RM 30.00",
    image: "image/BrighteningFoam.jpg",
    description: "Eucerin Spotless Brightening Cleansing Foam 50g/150g | Brighten & Cleanse | Anti Dark Spots | Hyperpigmentation Skin"
  },
];

// Function to display products
function displayProducts(filterBrand = "all") {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  const filtered = filterBrand === "all" 
    ? products 
    : products.filter(p => p.brand === filterBrand);

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "col-md-3";
    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${p.image}" class="card-img-top" alt="${p.name}">
        <div class="card-body">
          <h5 class="card-title">${p.name}</h5>
          <p class="small text-muted">${p.description}</p>
          <p class="fw-bold">${p.price}</p>
          <a href="detail.html?id=${p.id}" class="btn btn-dark w-100">View detail</a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Run when page loads
window.onload = () => {
  const params = new URLSearchParams(window.location.search);
  const brand = params.get("brand") || "all";
  displayProducts(brand);
};
