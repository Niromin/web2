var express = require('express');
var router = express.Router();

const FILMS = [
  {
    id: 1,
    title: 'Mushoku Tensei',
    duration: 130,
    budget: 1,
    link: "https://youtu.be/dQw4w9WgXcQ?si=HfcKGydEBnTBfPPg"
  },
  {
    id: 2,
    title: 'Sword Art Online',
    duration: 120,
    budget: 2,
    link: "https://youtu.be/dQw4w9WgXcQ?si=HfcKGydEBnTBfPPg"
  },
  {
    id: 3,
    title: 'Amogus, The saga',
    duration: 160,
    budget: 1,
    link: "https://youtu.be/dQw4w9WgXcQ?si=HfcKGydEBnTBfPPg"
  },
  
];


router.get('/', (req, res) =>{
  const minimumDuration =  req.query['minimum-duration'] ? Number(req.query['minimum-duration']) : undefined;

  if(minimumDuration == undefined){
    return res.json(FILMS);
  }
   

  if (typeof minimumDuration !== 'number' || minimumDuration <= 0){
    return res.sendStatus(400);
  }

  const filmsReachingMinimumDuration = FILMS.filter(
    (film) => film.duration >= minimumDuration
  );
  

  
    
  

  const orderByTitle =
  req?.query?.order?.includes('title')
    ? req.query.order
    : undefined;
  let orderedFilms;
  console.log(`order by ${orderByTitle ?? 'not requested'}`);
  if (orderByTitle)
    orderedFilms = [...FILMS].sort((a, b) => a.title.localeCompare(b.title));
  if (orderByTitle === '-title') orderedFilms = orderedFilms.reverse();

  console.log('GET /films');
  res.json(orderedFilms ?? FILMS);

  return res.json(filmsReachingMinimumDuration)
});

// Read the film identified by an id in the menu
router.get('/:id', (req, res) => {
  console.log(`GET /films/${req.params.id}`);

  const indexOfFilmFound = FILMS.findIndex((film) => film.id == req.params.id);

  if (indexOfFilmFound < 0) return res.sendStatus(404);

  res.json(FILMS[indexOfFilmFound]);
});

// Create a film to be added to the FILMS.
router.post('/', (req, res) => {
  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
  const duration = typeof req?.body?.duration !== 'number' || req.body.duration < 0 ? undefined: req.body.duration;
  const budget = typeof req?.body?.budget !== 'number' || req.body.budget < 0 ? undefined: req.body.duration;
  const link = req?.body?.link?.length !== 0 ? req.body.link : undefined;

  console.log('POST /pizzas');

  if (!title || !duration || !budget || !link) return res.sendStatus(400); 

  const lastItemIndex = FILMS?.length !== 0 ? FILMS.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? FILMS[lastItemIndex]?.id : 0;
  const nextId = lastId + 1;

  const newFilm = {
    id: nextId,
    title: title,
    duration: duration,
    budget: budget,
    link: link,
  };
  

  FILMS.push(newFilm);

  console.log(FILMS);

  res.json(newFilm);
});




module.exports = router;
