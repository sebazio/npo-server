'use-strict'

const { User } = require('../models/index');

const { body, validationResult } = require('express-validator');

const bcrypt = require('bcrypt');

module.exports = {

    deleteUser: async (req, res) => {

        const id = req.params.id;

        try {

            await User.destroy( { where: { id } } );
            return res.json( { message: 'User deleted successfuly'  } ); // Improve response?

        } catch (error) {

            res.status(400).send(error.message);

        } 
    }
}