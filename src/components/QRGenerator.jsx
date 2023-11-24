import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import Logo from "../assets/final.png";

 const QRGenerator = ({ user }) => {
    const combinedData = user.phone + " " + user.type;
    const [qr, setQr] = useState("");

    const generateQR = () => {    
        QRCode.toDataURL(combinedData, 
        { errorCorrectionLevel: 'H', width: 600, margin: 1, type: 'image/png',
        color: { dark: '#8873efFF', light:"#FFFFFFFF" },
        logo: {src: {Logo}, margin: 10, size: 0.2},
        version: 5 },
        (err, url) => {
            if (err) console.error(err);
            console.log(url);
            setQr(url);
        })
    }
    useEffect(() => {
        generateQR();
    }   , []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-[600] text-[40px] text-primaryColor">Your QR</h1>
        {qr && <>
            <img src={qr}/>
            <a className="border-2 border-primaryColor rounded-md p-2 text-black" href={qr} download='qrcode.png'>Download</a>
        </>}
    </div>
  );
}       

export default QRGenerator;