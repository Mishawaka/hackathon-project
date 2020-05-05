import React, { createContext, useState } from 'react';

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [src, setSrc] = useState(null);
  const [show, setShow] = useState(false);
  const [croppedImageUrl, setCroppedImageUrl] = useState();
  return (
    <ImageContext.Provider
      value={{
        src,
        setSrc,
        croppedImageUrl,
        setCroppedImageUrl,
        show,
        setShow,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};
