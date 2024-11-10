import React, { useEffect } from 'react';
import './Alert.css';

function Alert({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000); 
    return () => clearTimeout(timer); 
  }, [onClose]);

  return (
    <div className="alert">
      {message}
    </div>
  );
}

export { Alert };
