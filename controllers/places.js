const router = require('express').Router()

let places = [{
  name: 'H-Thai-ML',
  city: 'Seattle',
  state: 'WA',
  cuisines: 'Thai, Pan-Asian',
  pic: '/images/restaurant1.jpg'
}, {
  name: 'Coding Cat Cafe',
  city: 'Phoenix',
  state: 'AZ',
  cuisines: 'Coffee, Bakery',
  pic: '/images/restaurant2.jpg'
}]

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/', (req, res) => {
    res.render('./places/index', {places})
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})


module.exports = router
