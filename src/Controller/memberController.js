
import errormessage from "../utils/errormessage";
import successmessage from "../utils/successmessage";
import Member from "../model/members";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



class MemberController{

    static async registration(req,res){

        const {firstname,lastname,identification,location,email,password,confrimpassword,role}=req.body

        if(req.body.password!==req.body.confrimpassword){
            return errormessage(res,401,`pleace password and confrim password miss match`)
        }

        const hashpassword = bcrypt.hashSync(req.body.password,10)
        
        const member = await Member.create({firstname,lastname,identification,location,farmer,email,password:hashpassword,
            confrimpassword,role})

        if(!member){
            return errormessage(res,401,`please you have error in your information`)
        }else{
            return successmessage(res,201,`Thank yoou to join our cooperative now you are other member`,member)
        }
    }

    static async login(req,res){
        const {email,password}=req.body

        const member = await Member.findOne({email})
        if(!member){
            return errormessage(res,401,`invalid email`)
        }else{
            const comparepassword=bcrypt.compareSync(password,member.password)
            if(!comparepassword){
                return errormessage(res,401,`invalid password`)
            }else{
                const token =jwt.sign({member:member},process.env.SCRET_KY,{expiresIn:"1d"})
                return res.status(200).json({
                    token:token,
                    datas:{
                     member:member
                    }
                  })
            }
        }
    }

    static async getallmember(req,res){
        const member = await Member.find()
        if(!member){
            return errormessage(res,401,`member not found`)
        }else{
            return successmessage(res,201,`those are all ${member.length} member of cooperative retrived`,member)
        }
    }

    static async deleteone(req,res){
        const id=req.params.id
        const member = await Member.findByIdAndDelete(id)
        if(!member){
            return errormessage(res,201,`no member found`)

        }else{
            return successmessage(res,201,`member on this ${id} was deleted`)
        }

    }

    static async getone(req,res){
        const id=req.params.id
        const member=await Member.findById(id)
        if(!member){
            return errormessage(res,401,`no member found`)
        }else{
            return successmessage(res,201,`member on this id retrived`,member)
        }
    }

    static async deletealll(req,res){
        const member = await Member.deleteMany()
        if(!member){
            return errormessage(res,401,`no member found`)
        }else{
            return successmessage(res,201,`all  members of cooperative are deleted`)
        }
    }

    static async updatemember(req,res){
        const id=req.params.id
        const member=await Member.findByIdAndUpdate(id,req.body,{new:true})
        if(!member){
            return errormessage(rs,401,`no member found`)
        }else{
            return successmessage(res,201,`success member updated`,member)
        }
    }
}
export default MemberController