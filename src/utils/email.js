import nodemailer from "nodemailer"

const sendEmail=async(AllMemberInf,newsData)=>{

    let transporter=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        secure:true,
        path:{
            user:process.env.Email,
            pass:process.env.PASSWORD
        }
    })

    let maiOptions={
        from:process.env.Email,
        to:AllMemberInf.email,
        subject:`${AllMemberInf.fullnames} new post of product has benn posted`,
        html:` <p> Dear sar, <b>${AllMemberInf.fullnames}</b></p> <br/>
        <p>In our cooperative we have ${newsData.productname} as new product posted that is available to supply</p> <br/><br/>
         <p><b> Click here <a href="http:akazuba.com">Akazuba</a></b></p>`

    }

    transporter.sendMail(maiOptions,function(err,Info){
        if(err){
            console.error(err)
        }else{
            console.Info(Info)
        }
    })
}

export default sendEmail