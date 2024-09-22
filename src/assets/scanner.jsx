import React, { useState, useRef } from 'react';
const QrReader = () => {
  const [data, setData] = useState('');
  const qrRef = useRef(null);

  const handleScan = (result) => {
    if (!result) return;
    setData(result.data);
  }

  const handleError = (err) => {
    console.error(err);
  }

  return (
    <div>
      <QRCodeScanner
        ref={qrRef}
        delay={3000} // Delay in ms between scans (optional)
        onError={handleError}
        onScan={handleScan}
        style={{ width: '50%', margin: '0 auto' }} // Adjust styles as needed
      />
      {data ? (
        <p>Scanned QR Code: {data}</p>
      ) : (
        <p>Scanning QR Code...</p>
      )}
    </div>
  );
};

export default QrReader;
