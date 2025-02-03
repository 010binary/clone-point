'use client'
import { useState, useEffect, useRef } from "react";

type ModalProps = {
  children?: React.ReactNode;
  show: boolean;
  onClose: ()=>void;
};

export const Modal = ({ show, onClose, children }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(show);
  const modalRef = useRef(null);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

 

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[1005] flex items-center justify-center overflow-hidden">
          <div
            style={{ backdropFilter: "blur(2px)" }}
            className="fixed inset-0 bg-[#575D7299]"
            onClick={handleClose}
          ></div>
          <div
            ref={modalRef}
            // className="p-3 z-20 md:w-[80%] xl:w-[65%] overflow-y-auto max-h-full scrollbar-hide flex justify-center"
            className="p-3 z-20 md:w-auto overflow-hidden max-h-full s"
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};