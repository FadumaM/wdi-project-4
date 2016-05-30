## Controller

### User Controller/routes

- User show
  - get /users/:userId

- User hobby save
  - /users/:userId/hobbies/:id/save
```
function hobbiesSave(req, res) {
  var userId = req.params.userId;
  var hobbiesId = req.params.id;
  User.findByIdAndUpdate({ _id: userId }, {
    $addToSet: { hobbies: hobbiesId }
  },
  {
    new: true
  }).populate("hobbies").exec(function(err, trainer){
    if (err) return res.status(500).json(err);
    res.status(201).json({ user: user });
  });
}
```

### Hobby Controller/routes

- Hobby Create
  - /hobbies
- Hobby index
  - /hobbies
  - populate the hobbies answers

- Hobby show
  -/hobbies/:id
- hobby categories
  -findBy categories id


### Categories controllers/routes

- category show
  - categories/:id
- category index
  - /categories
- category create
  - /categories
