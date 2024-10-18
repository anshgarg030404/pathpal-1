import { Outlet } from "react-router-dom";
import Nav from "./components/nav";

function Layout(){
    return(
        <>
            <div className="pb-10">
                <Outlet/>

            </div>
            <Nav />
        </>
    )
}

export default Layout;