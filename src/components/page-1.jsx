// import QrReader from "../assets/scanner";
import { useState } from "react";
// import QRScanner from "../assets/scanner";
import Trolley from "../assets/Trolley.gif"
import qr from "../assets/qr.jpg"
function Page1(){
    let showdate=new Date();

    const dt=showdate.toLocaleDateString()

    const time=showdate.toLocaleTimeString()
    
    // const [scannedText, setScannedText] = useState('');

    // const handleScan = (text) => {
    //   setScannedText(text);
    // };

    return(
        <div className=" pb-15 p-5 space-y-8 sm:px-40">
            <div className="">
                <div className="flex justify-center h-48 sm:h-52">
                    <img src={Trolley} alt="" className="   h-full w-full "/>
                </div>
                <div className="pt-3 flex justify-between">
                    <h1 className="border-t-2 text-2xl border-b-2 border-black w-fit">{dt}</h1>
                    <h1 className="border-t-2 text-2xl border-b-2 border-black w-fit">{time}</h1>
                </div>
            </div>
            <div className="flex  justify-center rounded-lg ">
                <iframe className="h-52 w-full" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d120940.55429858732!2d77.24966215974307!3d28.631549794861957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1712674402540!5m2!1sen!2sin"  loading="lazy" ></iframe>
            </div>
            <div className="flex justify-center">
                <button  className="h-16 flex justify-evenly items-center bg-blue-500 py-1 px-2 w-auto  rounded-2xl space-x-3 ">
                    <img className="h-full rounded-2xl" src={qr} alt="qr-code"/>
                    <h2 className="font-medium text-2xl w-fit ">SCAN THE TROLLEY</h2>
                </button>
                {/* <QRScanner onScan={handleScan}/>
                {scannedText && <p>Scanned QR Code: {scannedText}</p>} */}
                {/* <QrReader/> */}
            </div>
                

    
        </div>
    )
}

export default Page1;