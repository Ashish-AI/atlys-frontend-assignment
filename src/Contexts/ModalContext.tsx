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
    setModalContent(content);
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
        <div className="fixed inset-0 bg-dark bg-opacity-70 flex items-center justify-center z-50 max-w-lg">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="rounded-lg shadow-lg w-auto mx-auto relative">
              <img
                src={CloseButton}
                alt="close icon"
                className="absolute top-2 right-2 text-gray-500  curs"
                onClick={hideModal}
              />

              {modalContent}
            </div>
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
