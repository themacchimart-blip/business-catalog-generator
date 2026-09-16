/* =========================================
   THE MACCHI MART
   Product Catalog
========================================= */

const products = [

  /* =======================================
     FRESH FISH
  ======================================= */

  {
    id: 1,
    name: "Surmai",
    marathiName: "सुरमई",
    category: "Fresh Fish",
    price: 0,
    priceType: "today",
    unit: "kg",
    image: "images/surmai.jpg",
    description: "Fresh Surmai. Cleaning and cutting available.",
    options: ["500g", "1kg"],
    cleaning: true,
    inStock: true
  },

  {
    id: 2,
    name: "Pomfret",
    marathiName: "पापलेट",
    category: "Fresh Fish",
    price: 0,
    priceType: "today",
    unit: "kg",
    image: "images/pomfret.jpg",
    description: "Fresh Pomfret selected for quality and freshness.",
    options: ["500g", "1kg"],
    cleaning: true,
    inStock: true
  },

  {
    id: 3,
    name: "Bangda",
    marathiName: "बांगडा",
    category: "Fresh Fish",
    price: 0,
    priceType: "today",
    unit: "kg",
    image: "images/bangda.jpg",
    description: "Fresh Bangda with cleaning and cutting option.",
    options: ["500g", "1kg"],
    cleaning: true,
    inStock: true
  },

  {
    id: 4,
    name: "Rawas",
    marathiName: "रावस",
    category: "Fresh Fish",
    price: 0,
    priceType: "today",
    unit: "kg",
    image: "images/rawas.jpg",
    description: "Fresh Rawas for home delivery.",
    options: ["500g", "1kg"],
    cleaning: true,
    inStock: true
  },

  {
    id: 5,
    name: "Bombil",
    marathiName: "बॉम्बील",
    category: "Fresh Fish",
    price: 0,
    priceType: "today",
    unit: "kg",
    image: "images/bombil.jpg",
    description: "Fresh Bombil cleaned and hygienically packed.",
    options: ["500g", "1kg"],
    cleaning: true,
    inStock: true
  },

  {
    id: 6,
    name: "Prawns",
    marathiName: "कोळंबी",
    category: "Fresh Fish",
    price: 0,
    priceType: "today",
    unit: "kg",
    image: "images/prawns.jpg",
    description: "Fresh prawns with cleaning option available.",
    options: ["250g", "500g", "1kg"],
    cleaning: true,
    inStock: true
  },


  /* =======================================
     PREMIUM DRY FISH
  ======================================= */

  {
    id: 7,
    name: "Javla",
    marathiName: "जावळा",
    category: "Dry Fish",
    price: 320,
    priceType: "fixed",
    unit: "kg",
    image: "images/javla.jpg",
    description: "Premium quality Javla, hygienically packed.",
    options: ["250g", "500g", "1kg"],
    cleaning: false,
    inStock: true
  },

  {
    id: 8,
    name: "Kardi",
    marathiName: "करडी",
    category: "Dry Fish",
    price: 650,
    priceType: "fixed",
    unit: "kg",
    image: "images/kardi.jpg",
    description: "Premium dry Kardi with hygienic packaging.",
    options: ["250g", "500g", "1kg"],
    cleaning: false,
    inStock: true
  },

  {
    id: 9,
    name: "Dry Bombil",
    marathiName: "सुका बॉम्बील",
    category: "Dry Fish",
    price: 480,
    priceType: "fixed",
    unit: "100 pcs",
    image: "images/dry-bombil.jpg",
    description: "Premium quality dried Bombil.",
    options: ["100 pcs"],
    cleaning: false,
    inStock: true
  },

  {
    id: 10,
    name: "Sode / Dry Prawns",
    marathiName: "सोडे / सुकी कोळंबी",
    category: "Dry Fish",
    price: 1750,
    priceType: "fixed",
    unit: "kg",
    image: "images/sode.jpg",
    description: "Premium dried prawns selected for quality.",
    options: ["250g", "500g", "1kg"],
    cleaning: false,
    inStock: true
  }

];


/* =========================================
   BUSINESS INFORMATION
========================================= */

const businessInfo = {

  name: "The Macchi Mart",

  tagline: "From Ocean to Plate",

  whatsapp: "918652065885",

  instagram: "@the_macchi_mart",

  deliveryAreas: [
    "Vile Parle",
    "Andheri",
    "Jogeshwari",
    "Bhandup"
  ]

};
