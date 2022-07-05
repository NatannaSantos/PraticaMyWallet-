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
  
      const { rows } = await connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
      );
      const [user] = rows;
  
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.sendStatus(401);
      }
  
      const token = jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_SECRET
      );
  
      res.send({
        token,
      });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };