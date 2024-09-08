const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS
app.use(express.json());

// Example route to get properties
app.get('/api/properties', (req, res) => {
  const properties = [
    {
        image: 'https://example.com/image1.jpg',
        title: 'Sky Dandelions Apartment',
        rating: '4.9',
        location: 'Bolivali, Mumbai',
        price: '22,000',
        city: 'Mumbai'
      },
      {
        image: 'https://example.com/image2.jpg',
        title: 'Wings Tower',
        rating: '4.9',
        location: 'Church street, Bangalore',
        price: '17,000',
        city: 'Banglore'
      },
      {
        image: 'https://5.imimg.com/data5/SELLER/Default/2023/10/354906221/BF/PH/LW/9728889/3bhk-bungalow-construction-service-1000x1000.jpeg',
        title: 'Wayside Modern House',
        rating: '4.4',
        location: 'MG Road, Gurgaon',
        price: '18,000',
        city: 'Gurgaon'
      },
      {
        image: 'https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=1024x1024&w=is&k=20&c=1golptGIidGvd8qhQ7FvKAT2lFl7hIu8KGCJzBT_H8o=',
        title: 'Migson Altigo',
        rating: '4.8',
        location: 'Murti, Delhi',
        price: '21,000',
        city: 'Delhi'
      }
  ];
  res.json(properties);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
