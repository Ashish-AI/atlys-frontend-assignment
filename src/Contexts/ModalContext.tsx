import React, { createContext, useContext, useState, ReactNode } from "react";
import CloseButton from "../assets/images/close-button.svg";

interface ModalContextType {
  showModal: (content: ReactNode) => void;
  hideModal: () => void;
  isModalOpen: boolean;
  modalContent: ReactNode;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const showModal = (content: ReactNode) => {
    setModalContent(
      <div className="relative rounded-lg shadow-lg w-full max-w-lg mx-auto">
        {content}
        <img
          src={CloseButton}
          alt="close icon"
          className="absolute  text-gray-500 cursor-pointer"
          style={{ top: "60px", right: "10px" }}
          onClick={hideModal}
        />
      </div>
    );
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider
      value={{ showModal, hideModal, isModalOpen, modalContent }}
    >
      {children}
      {isModalOpen && (
        <div className="fixed inset-0 bg-dark bg-opacity-70 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center w-full h-full">
            {modalContent}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
