export async function findUserByEmail(email){
   const {rows} =  await connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
      );
      return rows[0];
}

export async function createUser({name,email,hashedPassword}){
    await connection.query(
        `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
        [name, email, hashedPassword]
      );
}