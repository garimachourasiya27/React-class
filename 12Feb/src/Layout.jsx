import { Link,Outlet } from "react-router-dom";

const Layout=()=>{

return(

    <>
    
    <h2>Layout page </h2>
   <Link  to ="Home">Home</Link>
   <br />  
   <Link  to ="insert">Insert</Link>  
   <br />
   <Link  to ="Display">Display</Link>  
   <br />
    <Link  to ="Update">Update</Link>  
    <br />
    <Link  to ="MyEdit">MyEdit</Link
    >
    <br />
  <Link  to ="Search">Search</Link>
 <hr />
 <Outlet/>
 <hr />

   www.mycount.com
    
    </>
)


}
 export default Layout;