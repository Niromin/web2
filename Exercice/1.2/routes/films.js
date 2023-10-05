var express = require('express');
var router = express.Router();

const FILMS = [
  {
    id: 1,
    title: 'Mushoku Tensei',
    duration: 1.30,
    budget: 1,
    link: "https://youtu.be/dQw4w9WgXcQ?si=HfcKGydEBnTBfPPg"
  },
  {
    id: 2,
    title: 'Sword Art Online',
    duration: 1.20,
    budget: 2,
    link: "https://youtu.be/dQw4w9WgXcQ?si=HfcKGydEBnTBfPPg"
  },
  {
    id: 3,
    title: 'Amogus, The saga',
    duration: 1.60,
    budget: 1,
    link: "https://youtu.be/dQw4w9WgXcQ?si=HfcKGydEBnTBfPPg"
  },
  
];

// Read all the pizzas from the menu
router.get('/', (req, res, next) => {
  console.log('GET /film');
  res.json(FILMS);
});

module.exports = router;
