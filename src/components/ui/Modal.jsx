import { useState } from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded shadow-lg max-w-lg w-full p-6 relative">
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <div>{children}</div>
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 font-bold text-lg"
                >
                    ×
                </button>
            </div>
        </div>
    );
};

export default Modal;
