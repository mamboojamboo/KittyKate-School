import React from 'react';

const BackendErrorMessages = ({ backendErrors }) => {
  const errorMessages = Object.keys(backendErrors).map((name) => {
    const messages = backendErrors[name].join(' ');
    return `${name} ${messages}`;
  });
  console.log('errorMessagees', errorMessages);
  return (
    <ul>
      {errorMessages.map((errorMessage) => (
        <li key={errorMessage}>
          {errorMessage}
        </li>
      ))}
    </ul>
  );
};

export default BackendErrorMessages;
