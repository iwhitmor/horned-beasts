import React from 'react';
import Modal from 'react-bootstrap/Modal'


class SelectedBeast extends React.Component {
  render() {
    let beast = this.props.beast;
    if (!beast) {
      return null
    }
    
    return (
      <Modal show={this.props.show}
        onHide={this.props.handleClose} >
        <Modal.Dialog >
          <Modal.Header closeButton>
            <Modal.Title>{beast.title}</Modal.Title>
          </Modal.Header >
        </Modal.Dialog >
      </Modal >
    )
  }
}

export default SelectedBeast;