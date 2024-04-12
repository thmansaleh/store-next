
import db from "../../config/db"
export  async function GET({req}){

try {
    const results = await new Promise((resolve,reject)=>{
        db.query('SELECT * FROM bills WHERE status="لم يتم التسليم"',(err,result)=>{
            if (err) {
               reject(err) 
            }else{
                resolve(result)
            }
        })
    })

    return  Response.json({results})    
} catch (error) {
    return  Response.json(error)

}




}