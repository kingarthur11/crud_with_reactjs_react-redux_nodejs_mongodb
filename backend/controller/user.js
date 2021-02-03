const { isValidObjectId } = require("mongoose");
const User = require("../model/user");

exports.create = async (req, res) => {
    const {title, message} = req.body;
    try {
        const user = new User({
        title,
        message  });
    const data = await user.save(user)
    res.send({user: data})
    } catch (error) {
        res.status(500).send({
        message: err.message || "some error occured while creating user"
        });
    }
};

exports.findAll = async (req, res) => {
     try {
         const data = await User.find({});
         res.send({users: data})
     } catch(error) {
         res.status(500).send({
             message: error.message || "soething went wrong"
         })
     }
 };

exports.findOne = async (req, res) => {
    const {id} = req.params;
    try {
        let data = await User.findById(id);
        res.send({user: data})        
    } catch (error) {
        res.status(500)
            .send({message: "error retrieving"})
    }
}

exports.update = async (req, res) => {
    try {
        if(!req.body){
            return res.status(400).send({message: 'Data to update cannot be empty'})
        }
        const {id} = req.params;
        let {message, title} = req.body;
        const data = await User.findAndModify({
            id,
            message,
            title
        }, {new: true});
        console.log(data)
        res.send({user: data})
    } catch (error) {
        res.status(500)
            .send({message: "error retrieving for update"})
    }
   
}

exports.delete = async (req, res) => {
    let {id} = req.params;
    try {
        await User.findByIdAndDelete(id)
        res.status(200).send()
    } catch (error) {
        res.status(500)
            .send({message: "error retrieving"})
    }
}

exports.deleteAll = async (req, res) => {
    try {
        await User.deleteMany({})
        res.status(200).send()
    } catch (error) {
        res.status(500)
            .send({message: "error retrieving"})
    }
}

