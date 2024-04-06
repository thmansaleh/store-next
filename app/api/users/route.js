
// import db from "../config/db"
export  async function GET({req}){
    return  Response.json({'data':'data'})

// try {
//     const results = await new Promise((resolve,reject)=>{
//         db.query('SELECT * FROM users',(err,result)=>{
//             if (err) {
//                reject(err) 
//             }else{
//                 resolve(result)
//             }
//         })
//     })
//     // const data = await results.json()
//     // console.log(data)
//     return new Response.json({'data':'data'})
// } catch (error) {
//     return new Response.json(error)

// }




}