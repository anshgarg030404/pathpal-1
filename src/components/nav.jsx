import { Link, NavLink } from "react-router-dom";
function Nav(){
    return(
    <footer className="fixed"> 
        <div className=" left-0 flex justify-between w-full h-fit  fixed bg-white  bottom-0">
            <NavLink to="/" className={({isActive})=>`text-black ${isActive ? " text-blue-400 border-t-4 border-t-blue-200": "text-gray-500"} w-full border-2 flex flex-col justify-end items-center hover:text-blue-400`}>
                <ion-icon name="home"></ion-icon> 
                <p>Home</p>
            </NavLink>
            <NavLink to="/aim" className={({isActive})=>`text-black ${isActive ? " text-blue-400 border-t-4 border-t-blue-200": "text-gray-500"} w-full border-2 flex flex-col justify-end items-center hover:text-blue-400`}>
                <ion-icon name="flag"></ion-icon>
               <p>Aim</p> 
            </NavLink>
            <NavLink to="/team" className={({isActive})=>`text-black ${isActive ? " text-blue-400 border-t-4 border-t-blue-200": "text-gray-500"} w-full border-2 flex flex-col justify-end items-center hover:text-blue-400`}>
                <ion-icon name="shirt"></ion-icon>
               <p>Team</p>
            </NavLink>
            <NavLink to="/gallery" className={({isActive})=>`text-black ${isActive ? " text-blue-400 border-t-4 border-t-blue-200": "text-gray-500"} w-full border-2 flex flex-col justify-end items-center hover:text-blue-400`}>
                <ion-icon name="images"></ion-icon>
                <p>Gallery</p>
            </NavLink>
        </div>
    </footer>
    )
}

export default Nav;