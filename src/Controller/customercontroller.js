
import Custommer from "../model/customer";
import errormessage from "../utils/errormessage"
import successmessage from "../utils/successmessage"


class custommerController{
    static async shopRegist(req,res){
        const information =await Custommer.create(req.body)

        if(!information){
            return errormessage(res,401,`no information you sent`)
        }else{
            return successmessage(res,201,`ok continue to shop`,information)
        }
    }

    static async getInformation(req,res){
        const information =await Custommer.find()
        if(!information){
            return errormessage(res,401,`no information of custommer found`)
        }else{
            return successmessage(res,201,`show your infromation`,information)
        }
    }

    static async getInformationOFoneCustomer(req,res){
        const id=req.params.id
        const information=await Custommer.findById(id)
        if(!information){
            return errormessage(res,401,`no information`)
        }else{
            return successmessage(res,201,`show your infromation`,information)
        }
    }
}
export default custommerController