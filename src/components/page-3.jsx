import ansh from "../assets/ansh.jpg"
import unnati from "../assets/unnati.jpeg"

function Page3() {
    return(
        <>
    <div className="bg-slate-100 py-8 px-5 ">
        <h1 className="font-bold  text-center text-6xl ">Team</h1>
        <div className=" grid grid-cols-1 items-center md:grid-cols-2 mt-5 gap-4 text-sm">
            <div className=" bg-yellow-200 relative md:left-0 left-14 w-fit flex p-6 flex-col justify-center items-center space-y-5 text-center border-black border-2 rounded-3xl ">
                <img className="h-full md:w-1/2 w-56 rounded-3xl" src={ansh} alt="ansh.jpg" />
                 <h1 className="text-3xl font-mono ">Ansh Garg</h1>
                 <h1 className="text-xl font-mono ">GGSIPU</h1>
            </div>
            <div className=" bg-yellow-200 relative md:left-0 left-14 w-fit flex p-6 flex-col justify-center items-center space-y-5 text-center border-black border-2 rounded-3xl ">
                <img className="h-full md:w-1/2 w-56 rounded-3xl" src={unnati} alt="unnati.jpeg" />
                 <h1 className="text-3xl font-mono ">Unnati Jain</h1>
                 <h1 className="text-xl font-mono ">GGSIPU</h1>
            </div>
            {/* <div className=" bg-yellow-200 p-12 flex flex-col justify-center items-center  text-center border-black border-2 rounded-3xl ">
                <h1>Sarthak Jain</h1>
            </div>
            <div className=" bg-yellow-200 p-12 flex flex-col justify-center items-center  text-center border-black border-2 rounded-3xl ">
                <h1>Anoushka Bansal</h1>
            </div>
            <div className=" bg-yellow-200 p-12 flex flex-col justify-center items-center  text-center border-black border-2 rounded-3xl ">
                <h1>Vivek Gawar</h1>
            </div>
            <div className=" bg-yellow-200 p-12 flex flex-col justify-center items-center  text-center border-black border-2 rounded-3xl ">
                <h1>Garima Sharma</h1> */}
            {/* </div> */}
        </div>
    </div>
        </>
    )
    
}

export default Page3;