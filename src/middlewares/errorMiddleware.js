export function handleErrorMiddleware(error, req, res, next){
    if (error.type=== "conflict"){
        return res.sendStatus(409);
    }

    if(error.type === "unauthorized"){
        return res.sendStatus(401);
    }
}