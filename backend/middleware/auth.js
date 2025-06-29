import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {

    const { token } = req.headers;

    if (!token) {
        return res.json({success:false, message: 'Not Authorizes Login Again'});
    }

    try {
        
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id; // add the user id we get from the token
        next();

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

export default authUser;
