
import errormessage from "../utils/errormessage";
import { check,validationResult } from "express-validator";


class Validator{
     static inputvalidator(req,res,next){
        const error=validationResult(req)

        if(!error==error.isEmpty()){
            error.errors.map((err)=>{
                return errormessage(res,401,err.msg)
            })
        }else{
            return next()
        }
     }

     static memberAcountRule(){
        return[

            check("firstname","please provide your  firstname collectly!!!").trim().isAlpha().isUppercase(),
            check("lastname","please provide your  lastname collectly!!!").trim().isAlpha(),
            check("identification","please write your identification number collectly").trim().isNumeric(),
            check("location","please write your full location").trim(),
            check("farmer","please chose your option between yes or no").trim().isAlpha().isBoolean(),
            check("email","please write your email collectly").trim().isEmail(),
            check("password","please write strong password").trim().isStrongPassword()
        ]
     }
}
 export default Validator