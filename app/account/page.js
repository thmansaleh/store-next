import SetNave from "../components/SetNave"
import Login from "./login/page"
function page() {

 return (
    <>
    <SetNave name='account' show={true}/>
    {true&&<Login/>}
    </>
 )
}

export default page
