const jwt = require('jsonwebtoken');

const auth =(req, res, next)=>{
    const token = req.header('Auth-Booking');
    if(!token){
        res.status(401).json({
            msg:"No Token"
        });
    }
    try{
        console.log("token:", token );
const decoded = jwt.verify(token, process.env.MY_SECRET);
        console.log("Decoded:", decoded );
        req.user = decoded;
        next(); 
    }
    catch(err){
        res.status(500).json({
            msg: "Token is Inavalid"
        });
    }

}
module.exports = auth;
