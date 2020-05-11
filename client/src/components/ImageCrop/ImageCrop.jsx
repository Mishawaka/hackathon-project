import React, { useState, useContext } from 'react';
import ReactCrop from 'react-image-crop';
import randomStr from 'randomstring';
import 'react-image-crop/dist/ReactCrop.css';
import { ImageContext } from '../../contexts/ImageContext';

const ImageCrop = ({ clickRef }) => {
  const {
    src,
    setSrc,
    show,
    setShow,
    setFile,
    croppedImageUrl,
    setCroppedImageUrl,
  } = useContext(ImageContext);
  const [imageRef, setImageRef] = useState();
  const [crop, setCrop] = useState({
    unit: '%',
    height: 100,
    aspect: 1 / 1,
  });

  const onSelectFile = ({ target }) => {
    const { files } = target;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setSrc(reader.result));
      reader.readAsDataURL(files[0]);
      setShow(true);
    }
  };

  // If you setState the crop in here you should return false.
  const onImageLoaded = (image) => {
    setImageRef(image);
  };

  const onCropComplete = (crop) => makeClientCrop(crop);

  const onCropChange = (crop, percentCrop) => {
    // You could also use percentCrop:
    // this.setState({ crop: percentCrop });
    setCrop(crop);
  };

  const makeClientCrop = async (crop) => {
    if (imageRef && crop.width && crop.height) {
      const [croppedImageUrl, file] = await getCroppedImg(
        imageRef,
        crop,
        randomStr.generate(16)
      );
      setCroppedImageUrl(croppedImageUrl);
      setFile(file);
    }
  };

  const getCroppedImg = (image, crop, fileName) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error('Canvas is empty');
          return;
        }
        blob.name = fileName;
        const fileUrl = window.URL.createObjectURL(blob);
        // const file = new File([image.src], fileName);
        resolve([fileUrl, blob]);
      }, 'image/jpeg');
    });
  };

  return (
    <div className="App">
      <div>
        <input
          ref={clickRef}
          style={{ display: 'none' }}
          type="file"
          accept="image/*"
          onChange={onSelectFile}
        />
      </div>
      {src && (
        <ReactCrop
          style={{ display: show ? 'inline-block' : 'none' }}
          src={src}
          crop={crop}
          circularCrop={true}
          ruleOfThirds
          onImageLoaded={onImageLoaded}
          onComplete={onCropComplete}
          onChange={onCropChange}
        />
      )}
      {croppedImageUrl && (
        <div className="form-group">
          <button
            style={{ display: show ? 'block' : 'none' }}
            onClick={() => setShow(false)}
            className="cut-button"
          >
            <h4>Обрезать</h4>
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageCrop;
