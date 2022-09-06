const Car = require("../models/car");
const { validationResult } = require("express-validator");

const getCars = async (req, res) => {
  try {
    let cars = await Car.find();

    if (!cars) {
      return res.status(400).json({ errors: [{ msg: "No cars" }] });
    }

    res.json({ msg: "success", data: cars });
  } catch (error) {
    res.status(500).json({ msg: "failed", errors: error });
  }
};

const createCar = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, categoryId, model, color, make, registrationNo } = req.body;

  try {
    const car = new Car({
      name,
      categoryId,
      color,
      make,
      model,
      registrationNo,
    });

    await car.save();

    res.json({ msg: "success", data: car });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

const updaeCar = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, categoryId, model, color, make, registrationNo } = req.body;
  try {
    const id = req.params.id;
    const car = await Car.findById(id);

    if (!car) {
      res.status(404).json({ msg: "failed", data: null });
    }
    car.name = name;
    car.categoryId = categoryId;
    car.model = model;
    car.color = color;
    car.make = make;
    car.registrationNo = registrationNo;

    await car.save();

    res.json({ msg: "success", data: car });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

const deleteCar = async (req, res) => {
  const id = req.params.id;
  try {
    await Car.findByIdAndDelete({ _id: id });
    res.json({ msg: "successfully deleted" });
  } catch (error) {
    res.status(500).json({ msg: "failed", errors: error });
  }
};

module.exports= {
  getCars,
  createCar,
  updaeCar,
  deleteCar,
};
