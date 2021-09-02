import React from 'react';
import Modal from 'react-bootstrap/Modal'

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={true} >
      <Modal.Dialog >
        <Modal.Header closeButton>
          <Modal.Title>Is this working?</Modal.Title>
        </Modal.Header >
      </Modal.Dialog >
      </Modal >
    )
  }
}


export default SelectedBeast;