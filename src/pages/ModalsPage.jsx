import { useState } from "react";
import Modal from "../components/ui/Modal";
import Button from "../components/ui/Button";

const ModalsPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Modal Demo</h1>

            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Hello Modal"
            >
                <p>This is a sample modal content. You can put anything here!</p>
                <div className="mt-4 flex justify-end">
                    <Button onClick={() => setIsOpen(false)}>Close</Button>
                </div>
            </Modal>
        </div>
    );
};

export default ModalsPage;
