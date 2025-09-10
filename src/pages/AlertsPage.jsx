import Button from "../components/ui/Button";

const AlertsPage = () => {
    const showAlert = () => {
        alert("This is a standard alert!");
    };

    const showConfirm = () => {
        const result = confirm("Do you want to continue?");
        alert(`Confirm result: ${result}`);
    };

    const showPrompt = () => {
        const result = prompt("Please enter your name:");
        alert(`You entered: ${result}`);
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Browser Alerts Demo</h1>

            <div className="flex flex-col gap-2">
                <Button onClick={showAlert}>Show Alert</Button>
                <Button onClick={showConfirm}>Show Confirm</Button>
                <Button onClick={showPrompt}>Show Prompt</Button>
            </div>
        </div>
    );
};

export default AlertsPage;
