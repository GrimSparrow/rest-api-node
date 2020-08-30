const db = require("../models");
const Employer = db.employers;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    const employer = new Employer({
      name: req.body.name,
      position: req.body.position,
      description: req.body.description,
      about: req.body.about,
      facebook: req.body.facebook,
      instagram: req.body.instagram,
      vk: req.body.vk,
      youtube: req.body.youtube
    });
  
    employer
      .save(employer)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Возникла какая-то ошибка пр создании сотрудника, повторите позже."
        });
      });
  };

  
exports.findAll = (req, res) => {
  var condition =  {};

  Employer.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Возникла проблема при попытке получить список сотрудников."
      });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Employer.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Сотрудник найден ID: " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Проблема с получением сотрудника ID=" + id });
      });
  };

// Update a Employer by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Employer.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Невозможно обновить сотрудника с id=${id}. Возможно он не был найден!`
          });
        } else res.send({ message: "Сотрудник успешно обновлен." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Проблема с измегнением сотрудника ID=" + id
        });
      });
  };

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Employer.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Невозможно удалить сотрудника c ID =${id}. Возможно он не был найден!`
          });
        } else {
          res.send({
            message: "Сотрудник успешно удален!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Не удалось удалить сотрудника с ID =" + id
        });
      });
  };

// Delete all Employers from the database.
exports.deleteAll = (req, res) => {
    Employer.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Сотрудники были успешно удалены!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Возникли проблемы при удалении сотрудников"
        });
      });
  };