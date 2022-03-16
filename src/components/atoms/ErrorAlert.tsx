import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';

interface Props {
  showAlert: boolean;
  message: string;
  onConfirmPressed: () => void;
}

const ErrorAlert = ({showAlert, message, onConfirmPressed}: Props) => {
  return (
    <AwesomeAlert
      show={showAlert}
      showProgress={false}
      title="OOPS"
      message={message}
      closeOnHardwareBackPress={false}
      showConfirmButton={true}
      confirmText="Try again."
      onConfirmPressed={onConfirmPressed}
    />
  );
};

export default ErrorAlert;
