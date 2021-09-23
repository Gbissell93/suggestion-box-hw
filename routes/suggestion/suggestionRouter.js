var express = require('express');
var router = express.Router();
var suggestionController = require('./controller/suggestionController')

/* GET home page. */
router.get('/', function(req, res,) {
  suggestionController.getAllSuggestions(req.body, (err, foundSuggestion) => {
    if (err) {
      res.status(500)
      .json({ message: "something went wrong!", 
      error: err.message})
    } else {
      res.json({ message: "success!", foundSuggestion })
    }
  });
});

router.get('/:id', function(req, res,) {
  suggestionController.getSingleSuggestions(req.params.id, (err, foundSuggestion) => {
    if (err) {
      res.status(500)
      .json({ message: "something went wrong!", 
      error: err.message})
    } else {
      res.json({ message: "success!", foundSuggestion })
    }
  });
});

// POST new suggestion
router.post('/add-new', (req, res) => {
    suggestionController.addSuggestion(req.body, (err, newSuggestion) => {
    if (err) {
      res.status(500)
      .json({ message: "something went wrong!", 
      error: err.message})
    } else {
      res.json({ message: "success!", newSuggestion })
    }
  });
});

router.put("/update/:id", (req, res) => {
  suggestionController.updateSuggestion(req.params.id, req.body, (err, updatedSuggestion) => {
  if (err) {
    res.status(500)
    .json({ message: "something went wrong!", 
    error: err.message})
  } else {
    res.json({ message: "success!", updatedSuggestion})
  }
});
});

router.delete("/delete/:id", (req, res) => {
  suggestionController.deleteSuggestion(req.params.id, (err, deletedSuggestion) => {
    if (err) {
      res.status(500)
      .json({ message: "something went wrong!", 
      error: err.message})
    } else {
      res.json({ message: "success!", deletedSuggestion})
    }
  })
})

module.exports = router;
