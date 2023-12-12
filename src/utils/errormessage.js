
function errormessage(res,stat,messag){
 return res.status(stat).json({
        message:messag
    })
}

export default errormessage