const Data = require('../models/data');

exports.readData = async (req, res, next) => {
  let data;

  try {
    data = await Data.find();
  } catch (error) {
    data = null;
  }

  if (data) {
    return res.status(200).json(data);
  }

  return res.status(406).json({ message: 'error' });
}

exports.addData = async (req, res, next) => {
  const { name, age } = req.body;
  const data = new Data({
    name: name,
    age: age
  });
  
  let save;
  
  try {
    save = await data.save();
  } catch (error) {
    save = null;
  }

  if (save) {
    return res.status(200).json({
      status: 'success',
      data: save
    });
  }

  return res.status(406).json({ message: 'error' });
}

exports.editData = async (req, res, next) => {
  const { id } = req.params;
  const { name, age } = req.body;
  
  let save;
  
  try {
    save = await Data.findOneAndUpdate({ _id: id }, { name, age });
  } catch (error) {
    save = null;
  }
  
  if (save) {
    return res.status(200).json({
      status: 'success',
      data: {
        name,
        age
      }
    });
  }

  return res.status(406).json({ message: 'error' });
}

exports.deleteData = async (req, res, next) => {
  const { id } = req.params;
  
  let save;
  
  try {
    save = await Data.findByIdAndDelete({ _id: id });
  } catch (error) {
    save = null;
  }
  
  if (save) {
    return res.status(200).json({
      status: 'success',
      data: save
    });
  }

  return res.status(406).json({ message: 'error' });
}
