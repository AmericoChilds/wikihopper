import UserSchema from '../models/user';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

/*  ==========================
    CreateUser
    Creates new user, handles pasword hashing and produces token
    ========================== */
export const createUser = async( req, res ) => {
    
    const { email, username, password, cpassword, type } = req.body;

    try {
        
        const curUser = UserSchema.findOne({email});

        if(curUser) return res.status(409).json({message: "User already exists"});
        if(password != cpassword ) return res.status(400).json({message: "Passwords do not match"});

        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({ email, password: hashedPassword, username});

        const token = jwt.sign({email: result.email, id: result._id }, 'test', { expiresIn: "1h"} );

        return res.status(400).json({token});

    } catch {
        res.status(500).json({message: 'Something went wrong.'});
    }

}

export const loginUser = async( req, res ) => {
    
}

export const delUser = async( req, res ) => {
    
}

export const updateUser = async( req, res ) => {
    
}
