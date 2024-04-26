import React, { useState } from 'react';
import styled from 'styled-components';
import ChatbotBtn from '../chatbotBtn';
import BtnWrapperStyle from '../btnWrapperstyle';

const ProofOfPayment = (props) => {
  const paymentConfirmation = props.actionProvider.handlePaymentConfirmation;
  console.log(props.actionProvider)

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Check if a file is selected
    if (selectedFile) {
      // Perform file upload logic here
      // For example, you can use Fetch API or Axios to upload the file to the server
      // Replace 'YOUR_UPLOAD_ENDPOINT' with the actual endpoint for file upload
      fetch('YOUR_UPLOAD_ENDPOINT', {
        method: 'POST',
        body: selectedFile,
      })
        .then(response => response.json())
        .then(data => {
          // Handle successful upload response
          console.log('File uploaded:', data);
          // You can also pass any relevant data to the parent component
        })
        .catch(error => {
          // Handle upload error
          console.error('Error uploading file:', error);
        });
    } else {
      // Handle case when no file is selected
      console.warn('No file selected.');
    }
  };

  return (
    <StyledFileUpload>
      <input type="file" onChange={handleFileChange} 
      style={
        {
          height:"3em",
          border: "2px solid #0D6EFD",
          borderRadius: "10px",
          margin: " auto auto 10px auto",
          width: '70%',
      }
      }/>

      <BtnWrapperStyle>
      <ChatbotBtn onClick={paymentConfirmation}>Upload</ChatbotBtn>
      </BtnWrapperStyle>

    </StyledFileUpload>
  );
};

const StyledFileUpload = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;



export default ProofOfPayment;
