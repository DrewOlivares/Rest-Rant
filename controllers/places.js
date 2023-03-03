const router = require('express').Router();
const db = require('../models');

// Index
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', {places})
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
});

// New 
router.post('/', (req, res) => {
  if (req.body.pic === '') { req.body.pic = undefined }
  if (req.body.city === '') { req.body.city = undefined }
  if (req.body.state === '') { req.body.state = undefined }
  if (req.body.food === '') {req.body.food = undefined}
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      if (err && err.name == 'ValidationError') {
        let message = 'Validation Error: '
        for(var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
        }
          //Generate error messages
          res.render('places/new', {message})
      }
      else {
          res.render('error404')
      }
  })
});

// New
router.get('/new', (req, res) => {
  res.render('places/new')
});

//Show
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
    .populate('comments')
      .then(place => {
        res.render('places/show', { place })
      })
        .catch(err => {
          console.log('err', err)
          res.render('error404')
        })
});

// Update
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
});

// Delete
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(deletedPlace =>{
    res.status(303).redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
});

// Edit 
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/edit', { place })
  })
  .catch(err => {
      res.render('error404')
  })
});

// Comment
router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  req.body.rant = req.body.rant ? true : false
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          res.redirect(`/places/${req.params.id}`)
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
});

// Delete comment
router.delete('/:id/comment/:commentId', (req, res) => {
  db.Comment.findByIdAndDelete(req.params.commentId)
  .then(() => {
      console.log('Success')
      res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
});

module.exports = router;

/* // Index
router.get('/', (req, res) => {
  res.render('./places/index', {places});
})

// New Form
router.get('/new', (req, res) => {
  res.render('places/new');
})

// Show
router.get('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render('error404');
  }
  else if (!places[id]) {
    res.render('error404');
  }
  else {
    res.render('places/show', {place: places[id], id});
  }
})

// Delete
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render('error404');
  }
  else if (!places[id]) {
    res.render('error404');
  }
  else {
    places.splice(id, 1);
    res.redirect('/places');
  }
})

// Editing/update
router.put('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
      res.render('error404');
  }
  else if (!places[id]) {
      res.render('error404');
  }
  else {
      // Dig into req.body and make sure data is valid
      if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400';
      }
      if (!req.body.city) {
          req.body.city = 'Anytown';
      }
      if (!req.body.state) {
          req.body.state = 'USA';
      }
      // Save the new data into places[id]
      places[id] = req.body;
      res.redirect(`/places/${id}`);
  };
});

// Posting/creating
router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400';
  }
  if (!req.body.city) {
    req.body.city = 'Anytown';
  }
  if (!req.body.state) {
    req.body.state = 'USA';
  }
  places.push(req.body);
  res.redirect('/places');
});

// Edit form
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
      res.render('error404');
  }
  else if (!places[id]) {
      res.render('error404');
  }
  else {
    res.render('places/edit', {place: places[id], id});
  };
});
 */
