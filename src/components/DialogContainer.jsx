import { Modal } from "rsuite";
import PropTypes from "prop-types";

const DialogContainer = ({
  title,
  overflow,
  children,
  open,
  handleClose,
  actionButtons,
  size
}) => {
  return (
    <>
      <Modal size={size || "sm"}   overflow={overflow} open={open} onClose={handleClose}>
        <Modal.Header >
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body >{children}</Modal.Body>
        {actionButtons && <Modal.Footer>{actionButtons}</Modal.Footer>}
      </Modal>
    </>
  );
};

DialogContainer.propTypes = {
  title: PropTypes.string,
  overflow: PropTypes.bool,
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
  actionButtons: PropTypes.node,
  size: PropTypes.string
};

export default DialogContainer;
