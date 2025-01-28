const {createNewURLservice} = require("./../services/url.service")
const {GenerateUniqueIdForTheURLUtil} = require("./../utils/url.utils")

const CreateNewURLController = async (req , res) =>{
    try{
        const {originalUrl} = req.body;
       
        if(!originalUrl){
            const err = new Error("OrininalURL is missing inside the body")
            err.satatusCode = 400
            throw err 
        }
        
        const keyId = GenerateUniqueIdForTheURLUtil(6)

        const CreateNewURLServiceResult = await createNewURLservice(originalUrl, keyId)

        if(!CreateNewURLServiceResult.success){
            const err = new Error("Unable to create new URL")
            err.statusCode = 500
            throw err
        }

        res.status(201).json({
            success : true,
            message : "New URL is created",
            data : CreateNewURLServiceResult.data
        })

    }
    catch(err){
        console.log(`Error in CreateNewURLController with ${err} `)
        res.status(500).json({
            success : false
        })
        
    }
}

module.exports = {
    CreateNewURLController
}