    // Function to fetch and parse JSON data
    async function fetchProductData() {
        try {
          const response = await fetch('main.json');
          return await response.json();
        } catch (error) {
          console.error('Error fetching product data:', error);
          return [];
        }
      }
  
      // Function to create a product item HTML
      function createProductItem(product) {
        const Link = "https://chat.whatsapp.com/EqbXNQokoR81PDPJ8IozsC";
        return `
      <div class="container-element" style="display: flex; justify-content: center; flex-direction: column; ">
          <div class="product-item ${product.shine ? 'shine-effect' : ''}">
              <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-overlay">
              <h3 class="product-title">${product.name}</h3>
              <span class="Price">${product.price}</span>
              <a href="${product.orderLink}+${product.name}" class="whatsapp-button">
                <i class="fab fa-whatsapp"></i> Commander
              </a>
            </div>
          </div>
          <div class="infos-groupe_wa_link">
            <a href="${Link}" class="cta-button">
              en savoir plus.
            </a>
          </div>
      </div>
        `
      }
  
      // Function to render products
      async function renderProducts() {
        const productGallery = document.getElementById('product-gallery');
        const products = await fetchProductData();
  
        products.forEach(product => {
          productGallery.innerHTML += createProductItem(product);
        });
      }
   
      // Call the render function when the page loads
      window.addEventListener('load', renderProducts);
  
      // Function to add a new product
      function addNewProduct(newProduct) {
        const productGallery = document.getElementById('product-gallery');
        productGallery.innerHTML += createProductItem(newProduct);
      }
  
      // Example of how to add a new product (this could be triggered by an API call or user input)
      // addNewProduct({
      //   name: "Nouveau Produit",
      //   image: "https://example.com/images/nouveau-produit.jpg",
      //   orderLink: "https://wa.me/yourphonenumber?text=Je suis intéressé(e) par Nouveau Produit",
      //   shine: true
      // });

      document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
    
        hamburger.addEventListener('click', () => {
            // Toggle la classe 'active' sur le menu de navigation
            navLinks.classList.toggle('active');
            
            // Toggle la classe 'open' sur l'icône du hamburger
            hamburger.classList.toggle('open');
        });
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        // Sélectionne tous les liens de la page
        var links = document.getElementsByTagName('a');
    
        // Parcourt tous les liens
        for (var i = 0; i < links.length; i++) {
            // Supprime l'attribut target s'il existe
            links[i].removeAttribute('target');
    
            // Ajoute un écouteur d'événements pour le clic
            links[i].addEventListener('click', function(event) {
                // Empêche le comportement par défaut du lien
                event.preventDefault();
    
                // Redirige vers l'URL du lien dans le même onglet
                window.location.href = this.href;
            });
        }
    });
    