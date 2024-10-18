// import { useState, useEffect } from "react";
// import { QrReader } from "react-qr-reader";
// import axios from "axios";

// const Qr = ({ facingMode = "environment", delay = 500 }) => {
//   const [processing, setProcessing] = useState(false);
//   const [selected, setSelected] = useState(facingMode);
//   const [errorMessage, setErrorMessage] = useState(null);

//   const handleScan = async (scanData) => {
//     if (scanData && scanData !== "" && !processing) {
//       setProcessing(true);

//       // Check if the scanned data is a URL
//       try {
//         const url = new URL(scanData);
//         // Redirect to the scanned URL
//         window.location.href = url.href;
//       } catch (error) {
//         // Handle cases where scanData is not a valid URL
//         console.error("Invalid URL in QR code");
//         setErrorMessage("Scanned data is not a valid URL.");
//       } finally {
//         setProcessing(false);
//       }
//     }
//   };

//   const handleError = (err) => {
//     console.error(err);
//   };

//   useEffect(() => {
//     // Cleanup when the component unmounts
//     return () => {
//       setProcessing(false);
//     };
//   }, [processing]);

//   return (
//     <div className="App h-screen flex flex-col justify-center gap-10">
//       <h1 className="w-full text-3xl flex justify-center ">Scan the QR Code</h1>

//       {errorMessage && (
//         <div className="errorMessage">
//           <h2>{errorMessage}</h2>
//         </div>
//       )}
//     <div className="w-full flex justify-center">
//       {!processing && (
//         <QrReader
//           facingMode={selected}
//           delay={delay}
//           onError={handleError}
//           onResult={(result) => {
//             handleScan(result?.text);
//           }}
//           className="w-72 h-full flex justify-center "
//         />
//       )}
//       </div>
//     </div>
//   );
// };

// export default Qr;
