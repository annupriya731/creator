const express = require('express');
const Product = require('./models/Product');
const app = express();

// Mock recommendation logic: Fetch products from specific categories for the user
app.get('/api/recommendations', async (req, res) => {
  try {
    const { user } = req.query;

    // Mock user-specific logic: Recommend products from "clothes" and "grocery" categories
    const recommendations = await Product.find({
      category: { $in: ['clothes', 'grocery'] }
    }).limit(5); // Limit to 5 recommendations

    res.json(recommendations);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

