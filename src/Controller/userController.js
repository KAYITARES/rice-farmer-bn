
import User from "../model/user";
import errormessage from "../utils/errormessage"
import successmessage from "../utils/successmessage"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



class userController{

  static async requestTobeMember(req,res){
       const {firstname,lastname,identification,phonenumber,location,email,password
                  ,confrimpassword,picture,landReport,idPhotocopy,letter,role}=req.body
        
      if(req.body.password !== req.body.confrimpassword){
         return errormessage(res,401,`please password adn confrim password miss match`)
      }else{
         const hashpassword = bcrypt.hashSync(req.body.password,10)

         const user = await User.create({firstname,lastname,identification,phonenumber,location,email,
          password:hashpassword,confrimpassword,picture,landReport,idPhotocopy,letter,role})

            if(!user){
               return errormessage(res,401,`please your request not sent verify your information`)
            }else{
               return successmessage(res,201,`your request sent you will get confrimation to be member in five days`,user)
            }
      }
  }

  static async Login(req,res){
    const {email,password}=req.body
      const user=await User.findOne({email})

    if(!user){
     return errormessage(res,401,`invalid email `)
    }
    else{
     const comperepassword=bcrypt.compareSync(password,user.password)
     if(!comperepassword){
       return errormessage(res,401,`invalid  password`)
     }else{

       const token=jwt.sign({user:user},process.env.SCRET_KY,{expiresIn:"1d"})
       return res.status(200).json({
         token:token,
         data:{
          user:user
         }
       })
     }
    }
}



  static async getmember(req,res){
       const {role}=req.body
       const user = await User.find({role})
        if(!user){
           return errormessage(res,401,`no member found`)
        }else{
          return successmessage(res,201,`These are ${user.length} member found`,user)
        }
  }


   static async createMember(req,res){
         const id=req.params.id
         const user=await User.findByIdAndUpdate(id,req.body,{new:true})
          if(!user){
             return errormessage(res,401,`no user found`)
          }else{
             return successmessage(res,201,`user succes fuly updated now is member`,user)
          }
   }

  static async getRequestOfuse(req,res){
       const users = await User.find()
       if(!users){
         return errormessage(res,401,`no request found`)
       }else{
         return successmessage(res,200,`all ${users.length} request retrivide`,users)
       }
  }
   static async getOnerequest(req,res){
       const id = req.params.id
       const users = await User.findById(id)
       if(!users){
         return errormessage(res,401,`no request found`)
       }else{
         return successmessage(res,200,` request on this id: ${id}  retrivide`,users)
       }
   }

   static async deleterequest(req,res){
        const users = await User.deleteMany()
         if(!users){
            return errormessage(res,401,`no request found`)
        }else{
            return successmessage(res,201,`all ${users.length} request deleted`,)
         }
  }
  static async deleteOnerequest(req,res){
        const id = req.params.id
        const users = await User.findByIdAndDelete(id)
             if(!users){
                   return errormessage(res,401,`no request found`)
             }else{
                 return successmessage(res,201,` request on this id: ${id}  deleted`,)
            }
  }
}
export default userController