import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const ModalTemplate = props => {
  const { children, visible, headerText } = props;
  return (
    <Modal
      show={visible}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="detail-modal"
    >
      <Modal.Header>
        <Modal.Title>{headerText}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="pt-0">
        <>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                {children}
              </div>
            </div>
          </div>
        </>
      </Modal.Body>
    </Modal>
  );
};

ModalTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  headerText: PropTypes.string.isRequired,
};
