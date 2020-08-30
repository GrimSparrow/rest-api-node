module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    const employers = require("../controllers/employer.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tutorials.create);
  
    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tutorials.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);
  
    // Create a new Tutorial
    router.delete("/", tutorials.deleteAll);
  
    app.use('/api/tutorials', router);

  
    var router2 = require("express").Router();
    // Create a new Tutorial
    router2.post("/", employers.create);
      
    // Retrieve a single Tutorial with id
    router2.get("/:id", employers.findOne);
  
    // Update a Tutorial with id
    router2.put("/:id", employers.update);
  
    // Delete a Tutorial with id
    router2.delete("/:id", employers.delete);
  
    // Create a new Tutorial
    router2.delete("/", employers.deleteAll);
  
    app.use('/api/employers', router2);
  };