const express = require("express");
const path = require("path");
const app = express();
const Port= 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));


});

app.get('/api/products', (req, res) => {
    res.json({message: "This is where product data would be returned."
        
    });


});

app.get('/product/:id', (req, res) => {
    const productId = req.params.id;
    res.send(`<h1>Product Page for Product ID: ${productId}</h1>`);
  });
  
  app.get('/profile', (req, res) => {
    res.send('<h1>User Profile Page</h1>');
  });
  

  app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`<h1>Search results for: ${query}</h1>`);
  });
  
  app.get('/wishlist', (req, res) => {
    res.send('<h1>Your Wishlist</h1>');
  });
  
  app.get('/bag', (req, res) => {
    res.send('<h1>Your Shopping Bag</h1>');
  });
  


  const products = [
    { id: 1, name: 'Jeans', image: '/images/jeans.jpg' },
    { id: 2, name: 'T-shirt', image: '/images/tshirt.jpg' },
    { id: 3, name: 'Shoes', image: '/images/shoes.jpg' },
    { id: 4, name: 'Jacket', image: '/images/jacket.jpg' },
  ];
  
  // Serve static files (images, CSS)
  app.use(express.static(path.join(__dirname, 'public')));
  
  // Search route
  app.get('/search', (req, res) => {
    const query = req.query.q.toLowerCase();
  
    const matchedProducts = products.filter(p =>
      p.name.toLowerCase().includes(query)
    );
  
    let resultHTML = `
      <h1>Search Results for "${query}"</h1>
      <div style="display: flex; flex-wrap: wrap; gap: 20px;">
    `;
  
    if (matchedProducts.length > 0) {
      matchedProducts.forEach(product => {
        resultHTML += `
          <div>
            <img src="${product.image}" alt="${product.name}" width="150">
            <p>${product.name}</p>
          </div>
        `;
      });
    } else {
      resultHTML += `<p>No products found.</p>`;
    }
  
    resultHTML += `</div><br><a href="/">← Back to Home</a>`;
  
    res.send(resultHTML);
  });
  
  // Home route
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
  

  

app.listen(Port,()=> {
    console.log(`Server running at http://localhost:${PORT}`);

});