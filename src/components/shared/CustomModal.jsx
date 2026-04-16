// CustomModal.js
import useMediaQuery from "@/hooks/useMediaQuery";
import Modal from "react-modal";

Modal.setAppElement("#__next");

const CustomModal = ({
  isOpen,
  onRequestClose,
  children,
  containsImageExtension,
}) => {
  const isMobile = useMediaQuery("(max-width: 592px)");

  const customStyles = {
    content: {
      position: "absolute",
      top: "5%",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: containsImageExtension ? "transparent" : "white",
      borderRadius: "3px",
      maxWidth: "900px",
      maxHeight: "80vh",
      width: isMobile ? "95%" : "75%",
      height: "fit-content",
      overflow: "auto",
      border: "none",
      padding: 0,
      marginBottom: "5%",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      zIndex: "1000",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      {children}
    </Modal>
  );
};

export default CustomModal;
