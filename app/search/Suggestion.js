

export default function({data}){
    // data.map(item => {
    //     return  <div className="  p-2 " >  lkfej</div>
    
    // })
   if (data) {
    return data.map(item => {
        return  <div className="  p-2  text-sm text-black " >  {item}</div>
    
    })
   }
    
}