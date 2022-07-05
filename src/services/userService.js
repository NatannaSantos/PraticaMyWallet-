import * as userRepository from "../repositories/userRepository.js";
import bcrypt from "bcrypt";

export async function signUp({ name, email, password }) {
    const existingUsers = await userRepository.findUserByEmail(email);
    if (existingUsers) {
        throw { type: "conflict", message: "conflict" }
    }

    const hashedPassword = bcrypt.hashSync(password, 12);

    userRepository.createUser({name,email,hashedPassword});
}