// Cookie functions from the PDF
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Products with extended details
const products = [
  //Skintific
  {
    id: 1,
    brand: "skintific",
    name: "Barrier Repair Cream",
    price: "79.00",
    image: "image/Moisturizer.jpg",
    description: "Moisturizer that hydrates and strengthens skin barrier.<br>- Delivers and rebalance skin moisture.<br>- Keeping the skin hydrated.<br>- Fortifies & Repairs skin barriers",
    ingredients: "Ceramides, Hyaluronic Acid, Centella Asiatica, Marine Collagen",
    usage: "1. Take product as needed using the provided applicators<br>2. Apply evenly to face area<br>3. Repeat the steps until reach the coverage and result as needed"
  },
  {
    id: 2,
    brand: "skintific",
    name: "Toner",
    price: "39.00",
    image: "image/Toner.jpg",
    description: "Hydrating toner for refreshed and smooth skin.<br>Benefit:<br>- smoothing sensitive skin<br>- Calming redness<br>- Maoisturizing and hydrating the skin",
    ingredients: "Ceramide, Centella, Calendula",
    usage: "1. Apply on clean facial skin.<br>2. Can be use with cotton pad or apply it directly to your hands.<br>3. Gently pat or tap it over the entire face, extending to the neck if desired.<br>4. Use 1-2 times a day, after the toner, and continue with your next skincare routine."
  },
  {
    id: 3,
    brand: "skintific",
    name: "377 Serum",
    price: "56.00",
    image: "image/377Serum.jpg",
    description: "Serum containing SymWhite377 with a light texture and low molecular weight, works effectively into the skin layers to brighten black spots on the skin. The SymWhite377 content helps disguise black spots. Equipped with Niacinamide and Tranexamic Acid which help brighten the skin, and lock in skin moisture. Stable content, brightens the skin evenly for younger looking skin.",
    ingredients: "SymWhite 377, Niacinamide, Arbutin",
    usage: "1. Take as much as your skin needs<br>2. Apply all over the face and neck, morning and evening<br>3. Use in the morning must be followed by sunscreen afterwards"
  },
  {
    id: 4,
    brand: "skintific",
    name: "Skintific Gel Cleanser",
    price: "30.00",
    image: "image/GelCleanser.jpg",
    description: "Smooth Skin pencuci muka Panoxyl Face Wash Amino Acid Oil Control<br>→ For all skin type<br>→ Clean deep into he pores<br>→ Gentle and non-irritating",
    ingredients: "Pathenol, Amino Acid, Ceramide",
    usage: "1. Clean right down to the deepest pores<br>2. Smoothe the skin from acne and redness<br>3. Maintain the moisture of the skin<br>4. Control excessive oil"
  },
  {
    id: 5,
    brand: "skintific",
    name: "Sunscreen",
    price: "69.00",
    image: "image/Sunscreen.jpg",
    description: "SPF50+PA++++UV Protection Oil Control Fast-Absorbing Light Physical Tinted Sunscreen.<br>Benefit:<br>1. 8H Oil-free<br>2. Maximum protection up to 8H<br>3. Absorp only in 60s<br>4. can be use as makeup base<br>5. right choice for acne-prone skin",
    ingredients: "Oat Extract, Ectoin, Zinc PCA, Fomes officinalis extract",
    usage: "Apply evenly on cleansed face morning and night."
  },
  {
    id: 6,
    brand: "skintific",
    name: "Eye Cream",
    price: "59.00",
    image: "image/EyeCream.jpg",
    description: "Removes Fine Lines Dark Circles Reduces wrinkles Anti-aging<br>Benefits:<br>- Helps reduce puffy eyes<br>- Helps brighten the skin around the eyes<br>- Helps in maintaining and nourishing the skin around the eyes",
    ingredients: "3D Peptides, Niacinamide, Caffeine",
    usage: "1. After using moisturizer.<br>2. Dispense an adequate amount of the product and evenly massage it onto the eye area.<br>3. Use for a few minutes."
  },
  //La Roche-Posay
  {
    id: 7,
    brand: "laroche",
    name: "Anthelios Sunscreen SPF50+",
    price: "120.00",
    image: "image/Anthelios.jpg",
    description: "Anthelios UVMune 400 Invisible Fluid: Daily invisible sunscreen with the best protection against the most damaging UV rays*up to 400nm",
    ingredients: "Aqua/Water,Alcohol Denat, Silica, Isopropyl myristate",
    usage: "Broad protection - Anti-UVB/UVA pollution & IR-A damage<br>Invisible and ultra-light texture<br>Water and sweat resistant"
  },
  {
    id: 8,
    brand: "laroche",
    name: "Cicaplast Baume B5+",
    price: "55.00",
    image: "image/Cicaplast.jpg",
    description: "Soothing Multi-Purpose Balm - Dry-Skin Irritations 100ml<br>This multi-purpose soothing balm for dry skin irritations helps to nourish and soothe dry skin as well as visibly irritated areas. It is formulated with a rich, nourishing texture with a matte finish that's non-oily and non-sticky. Suitable for babies, children, and adults.",
    ingredients: "Aqua, Hydrogenated Polyisobutene, Dimethicone, Glycerin",
    usage: "Use to nourish and soothe dry skin irritations<br>Apply twice daily to cleansed, dry skin<br>Can be applied to body, face, and lips<br>Avoid eye area"
  },
  {
    id: 9,
    brand: "laroche",
    name: "Mela B3 Serum",
    price: "66.00",
    image: "image/MelaB3.jpg",
    description: "Intensive anti-dark spots concentrate serum, anti-recurrence 30ml<br>- Helps visibly reduces a range of skin pigmentation issues, including sunspots, age spots, post-acne marks<br>- Clinically proven 1 week visible results* and anti-relapse efficacy.<br>- 98% see visible correction of dark spots after 1 week<br>- 100% see dark spots number and color reduced after 2 weeks.",
    ingredients: "Aqua, Dimehicone, Niacinamide, Glycerin, Proylene Glycol",
    usage: "Apply morning and evening on face and neck.<br>For external use only. Avoid direct contact with eyes."
  },
  {
    id: 10,
    brand: "laroche",
    name: "Effaclar Serum",
    price: "66.00",
    image: "image/Effaclar.jpg",
    description: "Anti-Acne Serum with Salicylic, Glycolic Acid, Niacinamide for Oily Acne-Prone Skin 30ml<br>- Anti-marks, anti-imperfections, anti-recurrence.<br>- Gently exfoliates dead skin cells without creating irritation, prevents sebum accumulation.<br>- Anti-inflammatory, anti-hyperpigmentation, fades dark spots.<br>- Pore minimizer, highest resurfacing efficacy even for sensitive skin (LHA 0.45%, Salicylic Acid 1.5%, Glycolic Acid 3.5%)",
    ingredients: "Alcohol Denat, Propanediol, Glycolic Acid, Niacinamide",
    usage: "Apply morning and evening on perfectly cleansed skin"
  },
  //CosRx
  {
    id: 11,
    brand: "cosrx",
    name: "Original Clear Pad",
    price: "55.20",
    image: "image/ClearPad.jpg",
    description: "COSRX One Step Original CLear Pad (70 Pads)<br>Oil and excess sebum control now comes in handy!<br>Formulated with willow bark water and betaine salicylate to chemically exfoliate your skin. These two active ingredients works its way into your pores to break down sebum and detach dead skin cells from your skin, which helps in preventing future breakouts.<br>Suitable for Oily & Acne-prone skin.",
    ingredients: "Salix Alba (Willow) Bark Water, Betaine Salicylate (BHA)<br>FREE OF Parabens, Sulfates, Phthalates, Alcohol.",
    usage: "Wipe a pad across face and neck after cleansing. Use once or twice a day."
  },
  {
    id: 12,
    brand: "cosrx",
    name: "Propolis Synergy Toner",
    price: "57.50",
    image: "image/Propolis.jpg",
    description: "COSRX Full Fit Propolis Synergy Toner 150ml<br>A highly moisturizing toner containing 72.6% of Black Bee Propolis Extract and 10% Honey Extract to make your skin glowy and smooth.",
    ingredients: "Black Bee Propolis Extract",
    usage: "1. After cleansing, soak a cotton pad with the toner and gently wipe across the face avoiding the eyes and mouth.<br>2. Gently pat the entire face for better absorption."
  },
  {
    id: 13,
    brand: "cosrx",
    name: "COSRX Low PH Gel CLeanser",
    price: "40.50",
    image: "image/COSRXcleanser.jpg",
    description: "COSRX Low PH Good Morning Gel Cleanser 150ml<br>A super gentle cleanser that's great for your morning wash, this low pH formula gel cleanser doesn't strip your skin of its natural oils and contains purifying botanical",
    ingredients: "Nelumbo Nucifera Leaf Extract, Oenothera Biennis (Evening Primrose) Flower Extract, Melaleuca Alternifolia (Tea Tree) Leaf Oil.",
    usage: "Gently massage a small amount of this gel cleanser on wet skin in the morning. Rinse with tepid water. Pat your face dry, and continue with your next skin care steps."
  },
  {
    id: 14,
    brand: "cosrx",
    name: "Acne treatment toner",
    price: "46.30",
    image: "image/AcneToner.jpg",
    description: "COSRX AHA/BHA Clarifying Treatment Toner 150ml<br>Formulated with AHA, BHA and skin purifying botanical ingredients, this low pH and extremely mild daily toner is here to help you achieve that clear, supple skin you always dream of! Use this toner to soothe, refresh and soften the skin.",
    ingredients: "Salix Alba (Willow) Bark Water, Pyrus Malus (Apple) Fruit Water, Glycolic Acid (AHA), Betaine Salicylate (BHA)",
    usage: "After cleansing, spray the toner onto a cotton pad and gently wipe onto face, avoiding the eye and mouth area. For use during the daytime, follow with a broad spectrum sunscreen with SPF 30 or greater."
  },
  {
    id: 15,
    brand: "cosrx",
    name: "Acne Pimple Master Patch",
    price: "24.00",
    image: "image/MasterPatch.jpg",
    description: "COSRX Acne Pimple Master Patch (24 Patches)<br>Incorporate COSRX's Acne Pimple Master Patch into your skin care routine to cleanse your pores and reduce acne spots.",
    ingredients: "Cellulose Gum, Styrene Isoprene Styrene Block Copolymer, Polyisobutylene, Petroleum Resin, Polyurethane Film, Liquid Paraffin, Tetrikis Methane",
    usage: "1. Use it before applying skincare products.<br>2. Choose a patch according to the size of the pimple you want to treat and apply.<br>3. Let it work while you sleep.<br>4. Patch will turn white after absorbing pus. Change the patch if it swelled until there is nothing to be absorbed anymore."
  },
  //Eucerin
  {
    id: 16,
    brand: "eucerin",
    name: "Dry Lip Moiturizer",
    price: "20.00",
    image: "image/LipMoisturizer.jpg",
    description: "Eucerin Active Dry Lip Moiturizer SPF20 (4.8g)<br>Eucerin Lip Active has been specially formulated for dry, rough and sensitive lips. Dexpanthenol and Vitamin E soothe, moisturize and protect against everyday external factors such as UV exposure and low hydration.",
    ingredients: "Vitamin E (also known as Tocopherol) is a powerful antioxidant that protects skin against the free radicals that cause oxidative stress and helps to support its natural resilience.",
    usage: "- SPF 20 UVA<br>- Mineral oil-free<br>- With shea butter and jojoba oil<br>- Lip balm for dry, sensitive lips"
  },
  {
    id: 17,
    brand: "eucerin",
    name: "Spotless Brightening Cleansing Foam",
    price: "30.00",
    image: "image/BrighteningFoam.jpg",
    description: "Eucerin Spotless Brightening Cleansing Foam 50g/150g | Brighten & Cleanse | Anti Dark Spots | Hyperpigmentation Skin<br>A whitening cleanser that contains Dio ACTIVE, an effective but gentle ingredient which has proven effects on reducing pigmentation discoloration.",
    ingredients: "Aqua, Potassium Stearate, Potassium Myristate, Propylene Glycol, Glycerin, Potassium Laurate",
    usage: "- Lather up with a little bit of water before applying to the skin.<br>- Apply all over the face.<br>- Gently remove with lukewarm water.<br>- Remove make up and excess oil."
  }
];

// ================== GET PRODUCT ID FROM URL ==================
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));
const product = products.find(p => p.id === productId);

const detailSection = document.getElementById("product-detail");

// ================== RENDER PRODUCT DETAIL ==================
if (product) {
  detailSection.innerHTML = `
    <div class="row g-5 align-items-center">
      <!-- Product Image -->
      <div class="col-md-6 text-center">
        <div class="detail-image-wrapper p-3 bg-light rounded shadow-sm">
          <img src="${product.image}" class="img-fluid rounded" alt="${product.name}">
        </div>
      </div>

      <!-- Product Info -->
      <div class="col-md-6">
        <h2 class="fw-bold mb-3">${product.name}</h2>
        <p class="text-muted mb-4">${product.description}</p>
        
        <div class="mb-3">
          <h6 class="fw-bold">✨ Key Ingredients</h6>
          <p>${product.ingredients}</p>
        </div>

        <div class="mb-3">
          <h6 class="fw-bold">🧴 How to Use</h6>
          <p>${product.usage}</p>
        </div>

        <p class="h3 text-success fw-bold mb-4">RM ${product.price}</p>

        <div class="d-flex gap-3">
          <button id="addToCart" class="btn btn-dark btn-lg flex-fill">🛒 Add to Cart</button>
          <a href="products.html" class="btn btn-outline-secondary btn-lg flex-fill">⬅ Back to Shop</a>
        </div>
      </div>
    </div>
  `;

  // ================== ADD TO CART FUNCTION ==================
  document.getElementById("addToCart").addEventListener("click", () => {
    // Get current cart from cookie
    const cartCookie = getCookie("lunara_cart");
    let cart = cartCookie ? JSON.parse(cartCookie) : [];
    
    // Check if product already exists in cart
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingProductIndex >= 0) {
      // If product exists, increase quantity
      cart[existingProductIndex].quantity += 1;
    } else {
      // If product doesn't exist, add it with quantity 1
      const productToAdd = {
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        image: product.image,
        quantity: 1
      };
      cart.push(productToAdd);
    }
    
    // Save updated cart to cookie
    setCookie("lunara_cart", JSON.stringify(cart), 7); // Expires in 7 days
    
    alert("Product added to cart!");
    window.location.href = "cart.html"; // redirect to cart
  });

} else {
  detailSection.innerHTML = `
    <div class="alert alert-danger text-center">
      ❌ Product not found. <a href="products.html">Go back to shop</a>.
    </div>
  `;
}