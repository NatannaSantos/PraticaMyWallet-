import * as userRepository from "../repositories/userRepository.js";

export async function signUp({name,email,password}){
    const existingUsers = await userRepository.findUserByEmail(email);
    if (existingUsers) {
        throw {type:"conflict"}
      }
}