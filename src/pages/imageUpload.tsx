/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/quotes */
import React from 'react'
import UiFileInputButton from '@/Components/UiFileInputButton'
import axios from 'axios';
 const IndexPage = (props) => {
  
  const onChange = async (formData) => {
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
      },
    };
    
    const response = await axios.post('/api/Image/upload', formData, config);
    console.log('response', response.data);
  };
  
  return (
    <>
    <UiFileInputButton
      label="Upload Single File"
      uploadFileName="theFiles"
      onChange={onChange}
    />
    <input type={`file`} />
    </>
  );
};

IndexPage.layout = `none`
export default IndexPage