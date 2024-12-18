import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QRScanner = () => {

    const [scanResult, setScanResult] = useState(null);

    useEffect(() => {

        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: { width: 250, height: 250 },
            fps: 10,
        });

        scanner.render(success, error);

        function success(result) {
            scanner.clear();
            setScanResult(result);
        }
        function error(err) {
            console.warn(err);
        }
    }, []);

    return (
        <div className='flex flex-col justify-center items-center'>
            {scanResult ? (
                <div>
                {(scanResult) ? (
                    <div>
                    Success: <a href={'http://'+scanResult}>{scanResult}</a>
                    </div>
                ) : (
                    <div>Success: {scanResult}</div>
                )}
                </div>
            ) : (
                <div id='reader'></div>
            )}
        </div>
    );
};

export default QRScanner;