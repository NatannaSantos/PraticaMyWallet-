import * as userService from "../services/userService.js";

export async function signUp (req, res){
    try {
      const { name, email, password } = req.body;
  
      if (!name || !email || !password) {
        return res.sendStatus(422);
      }          
      await userService.signUp({name,email,password});
      res.sendStatus(201);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }

 export async function signIn (req, res) {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.sendStatus(422);
      }    
      
  
     const token = await userService.signIn({email,password});
  
      res.send({
        token,
      });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };