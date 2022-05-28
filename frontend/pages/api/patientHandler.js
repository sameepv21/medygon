const { connectToDatabase } = require("../../lib/mongodb")
const ObjectId = require("mongodb").ObjectId

export default async function handler(req, res) {
    try {
        let {db} = await connectToDatabase()
        await db.collection("patient").find({}).toArray(function(err, data) {
           console.log("Patient Data: ", data)
            res.json({
                data: data,
                success: true,
            })
        })
    }
    catch(error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        })
    }
}