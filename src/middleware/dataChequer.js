import Member from "../model/members";
import errormessage from "../utils/errormessage";


class Datachecker{

    static  memberRegistIsEmpt(req,res,next){
        const {fullnames,identification,location,farmer,email,password,confrimpassword}=req.body

        if(fullnames==""){
            return errormessage(res,401,`please provide your names`)  
        }else if(identification==""){
            return errormessage(res,401,`please provide your id`)
        }else if(location==""){
            return errormessage(res,401,`please provide your location`)
        }else if(farmer==""){
            return errormessage(res,401,`please provide your farmer`)
        }else if(email==""){
            return errormessage(res,401,`please provide your email`)
        }else if(password==""){
            return errormessage(res,401,`please provide tour password`)
        }else if(confrimpassword==""){
            return errormessage(res,401,`please provide your confrim password`)
        }else{
            return next()
        }
    }

    static async EmailExist(req,res,next){
        const email=req.body.email

        const member=await Member.findOne({email})
        if(member){
            return errormessage(res,401,`member allready exist in cooperative`)
        }else{
            return next()
        }
    }
}
export default Datachecker