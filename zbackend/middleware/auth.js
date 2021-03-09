const jwt = require("jsonwebtoken");

module.exports.authCustomer= (req, res, next) => {
  try {
    const token = req.header('Authorization');
    if (!token){
      return res.status(401).json({ errorMessage: "Unauthorized" });
    } 
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified.user;//Here USer id will be stored in to req.
    req.token = token;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ errorMessage: "Unauthorized" });
  }
};

module.exports.authTheater = (req,res,next)=>{
  try {
    const token = req.header('Authorization');
    if (!token){
      return res.status(401).json({ errorMessage: "Unauthorized" });
    } 
    const verified = jwt.verify(token, process.env.JWT_T_SECRET);
    req.user = verified.user;//Here USer id will be stored in to req.
    req.token = token;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ errorMessage: "Unauthorized" });
  }  
};















// const jwt = require("jsonwebtoken");

// module.exports.authCustomer= (req, res, next) => {
//   try {
//     const token = req.header('Authorization');
//     if (!token){
//       return res.status(401).json({ errorMessage: "Unauthorized" });
//     } 
//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = verified.user;//Here USer id will be stored in to req.
//     req.token = token;
//     next();
//   } catch (err) {
//     console.error(err);
//     res.status(401).json({ errorMessage: "Unauthorized" });
//   }
// };

// module.exports.authTheater = (req,res,next)=>{
//   try {
//     const token = req.header('Authorization');
//     if (!token){
//       return res.status(401).json({ errorMessage: "Unauthorized" });
//     } 
//     const verified = jwt.verify(token, process.env.JWT_T_SECRET);
//     req.user = verified.user;//Here USer id will be stored in to req.
//     req.token = token;
//     next();
//   } catch (err) {
//     console.error(err);
//     res.status(401).json({ errorMessage: "Unauthorized" });
//   }  
// };