const express = require("express");
const router = express.Router();
const { Business } = require("../models/business");
const searchBusinessRouter = express.Router();

// retrieve all businesses
searchBusinessRouter.get("/", async (req, res) => {
  try {
    const businesses = await Business.find();
    res.json(businesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// retrieve businesses by country
searchBusinessRouter.get("/country/:country", async (req, res) => {
  try {
    const businesses = await Business.find({ country: req.params.country });
    res.json(businesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// retrieve businesses by city
searchBusinessRouter.get("/city/:city", async (req, res) => {
  try {
    const businesses = await Business.find({ city: req.params.city });
    res.json(businesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// retrieve businesses by type
searchBusinessRouter.get("/type/:type", async (req, res) => {
  try {
    const businesses = await Business.find({ type: req.params.type });
    res.json(businesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// retrieve businesses by country and city
searchBusinessRouter.get("/country/:country/city/:city", async (req, res) => {
  try {
    const businesses = await Business.find({
      country: req.params.country,
      city: req.params.city,
    });
    res.json(businesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// retrieve businesses by country and type
searchBusinessRouter.get("/country/:country/type/:type", async (req, res) => {
  try {
    const businesses = await Business.find({
      country: req.params.country,
      type: req.params.type,
    });
    res.json(businesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// retrieve businesses by city and type
searchBusinessRouter.get("/city/:city/type/:type", async (req, res) => {
  try {
    const businesses = await Business.find({
      city: req.params.city,
      type: req.params.type,
    });
    res.json(businesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// retrieve businesses by country, city, and type
searchBusinessRouter.get(
  "/country/:country/city/:city/type/:type",
  async (req, res) => {
    try {
      const businesses = await Business.find({
        country: req.params.country,
        city: req.params.city,
        type: req.params.type,
      });
      res.json(businesses);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

// add a new business
searchBusinessRouter.post("/add", async (req, res) => {
  const business = new Business({
    businessName: req.body.businessName,
    businessEmail: req.body.businessEmail,
    imageUrl: req.body.imageUrl,
    type: req.body.type,
    businessPhone: req.body.businessPhone,
    country: req.body.country,
    city: req.body.city,
  });

  try {
    const newBusiness = await business.save();
    res.status(201).json(newBusiness);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = searchBusinessRouter;
