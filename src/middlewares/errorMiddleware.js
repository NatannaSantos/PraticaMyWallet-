export function handleErrorMiddleware(error, req, res, next){
    if (error.type=== "conflict"){
        return res.sendStatus(409);
    }
}