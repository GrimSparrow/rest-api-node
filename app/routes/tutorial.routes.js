module.exports = app => {

    const employers = require("../controllers/employer.controller.js");
  
    var router = require("express").Router();

    router.get("/", employers.findAll);
    
    router.post("/", employers.create);
      
    // Retrieve a single Tutorial with id
    router.get("/:id", employers.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", employers.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", employers.delete);
  
    // Create a new Tutorial
    router.delete("/", employers.deleteAll);
  
    app.use('/api/employers', router);
  };