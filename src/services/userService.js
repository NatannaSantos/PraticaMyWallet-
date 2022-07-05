import * as userRepository from "../repositories/userRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function signUp({ name, email, password }) {
    const existingUsers = await userRepository.findUserByEmail(email);
    if (existingUsers) {
        throw { type: "conflict", message: "conflict" }
    }

    const hashedPassword = bcrypt.hashSync(password, 12);

    userRepository.createUser({name,email,hashedPassword});
}

export async function signIn({ email, password }){
    const user = userRepository.findUserByEmail(email);

    if (!user || !bcrypt.compareSync(password, user.password)) {
        throw{type:"unauthorized", message:"username or password do not match"}
      }

      const token = jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_SECRET
      );
      return token;
}