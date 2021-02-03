const mongoose = require('mongoose');
const Schema = mongoose.Schema

User = mongoose.model(
        "user", Schema( {
                title: {
                    type: String,
                    required: true,
                    min: 6,
                    max: 225
                }, 
                message: {
                    type: String,
                    required: true,
                    min: 6,
                    max: 225
                },
            },
            {timestamps: true}
        )
    );
module.exports = User;
