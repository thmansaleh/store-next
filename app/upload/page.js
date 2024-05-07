'use client'
import { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
  const [selectedFiles, setSelectedFile] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFile(files);

    const previews = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (e) => {
        previews.push(e.target.result);
        if (previews.length === files.length) {
          setPreviewImages(previews);
        }
      };
      reader.readAsDataURL(files[i]);
    }

  };

  const handleUpload = () => {
    console.log(selectedFiles)
    const formData = new FormData();
    // formData.append('images', selectedFiles);

    for (let i = 0; i < selectedFiles.length; i++) {
        formData.append('images', selectedFiles[i]);
      }
    axios.post('https://dull-plum-antelope-tutu.cyclic.cloud/events', formData)
      .then(response => {
        console.log('Upload successful',response);
      })
      .catch(error => {
        console.error('Error uploading file: ', error);
      });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md">
    <label htmlFor="file-upload" className="block text-sm font-semibold text-gray-700 w-full text-white  rounded-lg py-3 text-center bg-green-400 mb-2">اضافة الصور</label>
    <input id="file-upload" type="file" multiple onChange={handleFileChange} accept="image/*"  className="hidden" />
    <div className="grid grid-cols-3 gap-4">
      {previewImages.map((preview, index) => (
        <div key={index} className="relative">
          <img src={preview} alt={`Preview ${index}`} className="w-full h-auto rounded-md shadow-md" />
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button className="text-white text-sm font-semibold px-2 py-1 bg-red-500 rounded-md hover:bg-red-600 transition-colors duration-300" onClick={() => {
              setPreviewImages(prevState => prevState.filter((_, i) => i !== index));
              setSelectedFiles(prevState => prevState.filter((_, i) => i !== index));
            }}>Remove</button>
          </div>
        </div>
      ))}
    </div>
    <button onClick={handleUpload} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md transition-colors duration-300">رفع</button>
    </div>
  );
}

export default ImageUpload;
