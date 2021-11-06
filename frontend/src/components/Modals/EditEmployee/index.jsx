import React from 'react';
import ReactModal from 'react-modal';
import { ModalStyle, OverlayStyle } from './styles';

ReactModal.setAppElement('#root');

const EditEmployee = ({ isOpen, onClose }) => {
  return (
    <ReactModal
      className="_"
      overlayClassName="_"
      contentElement={(props, children) => <ModalStyle {...props}>{children}</ModalStyle>}
      overlayElement={(props, contentElement) => (
        <OverlayStyle {...props}>{contentElement}</OverlayStyle>
      )}
      isOpen={isOpen}
      contentLabel="Edit Employee Modal"
      onRequestClose={onClose}
    >
      {/* Body */}
      <div>Hello initial div</div>
    </ReactModal>
  );
};

export default EditEmployee;
