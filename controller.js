const User = require('./models/user');

const getUsers = (req, res, next) => {
   User.find()
      .then(response => {
         res.json({response});
      })
      .catch(error => {
         res.json({error});
      });
};

const addUser = (req, res, next) => {
   const user = new User({
      id: req.body.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      dob: req.body.dob,
      department: req.body.department,
      joinedDate: req.body.joinedDate,
      resignedDate: req.body.resignedDate,
      username: req.body.username,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
      address: req.body.address,
      active: req.body.active,
   });
   user.save()
      .then(response => {
         res.json({response});
      })
      .catch(error => {
         res.json({error});
      });
};

const updateUser = (req, res, next) => {
   const { id, name } = req.body;
   User.updateOne({ id: id }, { $set: { firstName: firstName, lastName: lastName, email: email, address: address } })
      .then(response => {
         res.json({response});
      })
      .catch(error => {
         res.json({error});
      });
};

const deleteUser = (req, res, next) => {
   const id = req.body._id;
   User.deleteOne({ _id: id })
      .then(response => {
         res.json({response});
      })
      .catch(error => {
         res.json({error});
      });
};

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;