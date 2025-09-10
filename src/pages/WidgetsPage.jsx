import { useState } from "react";
import Dropdown from "../components/ui/Dropdown";
import Slider from "../components/ui/Slider";
import Button from "../components/ui/Button";

const WidgetsPage = () => {
    const [selected, setSelected] = useState("");
    const [sliderValue, setSliderValue] = useState(50);

    const [items, setItems] = useState(["Item 1", "Item 2"]);
    const [newItem, setNewItem] = useState("");

    const addItem = () => {
        if (newItem.trim() === "") return;
        setItems([...items, newItem]);
        setNewItem("");
    };

    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Widgets Demo</h1>

            <Dropdown
                label="Choose an option"
                options={[
                    { label: "Option A", value: "a" },
                    { label: "Option B", value: "b" },
                    { label: "Option C", value: "c" },
                ]}
                value={selected}
                onChange={setSelected}
            />

            <Slider label="Select a value" min={0} max={100} value={sliderValue} onChange={setSliderValue} />

            <div className="mb-4">
                <label className="block mb-1 font-medium">Dynamic List</label>
                <div className="flex gap-2 mb-2">
                    <input
                        type="text"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        className="flex-1 p-2 border rounded border-gray-300"
                        placeholder="New item"
                    />
                    <Button onClick={addItem}>Add</Button>
                </div>
                <ul className="list-disc pl-5">
                    {items.map((item, i) => (
                        <li key={i} className="flex justify-between items-center">
                            <span>{item}</span>
                            <button
                                onClick={() => removeItem(i)}
                                className="text-red-500 ml-2 font-bold"
                            >
                                ×
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WidgetsPage;
