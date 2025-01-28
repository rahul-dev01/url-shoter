const URLSModel = require("../models/urls.model")

async function createNewURLservice(originalUrl , keyId){
    try{

        const result = await URLSModel.create({"originalUrl":originalUrl,"keyId":keyId})

        if(!result){
            throw new Error("Unable to call URLModel.create()")
        }
        return{
            success : true ,
            data : result
        }
    }
    catch(err){
        console.log(`Error in createNewURLservice  for originalUrl : ${originalUrl} & keyId ${keyId}`)
        return{
            success : false
        }
    }
}


module.exports = {
    createNewURLservice
}