const Dropdown = ({ label, options = [], value, onChange }) => {
    return (
        <div className="mb-4">
            {label && <label className="block mb-1 font-medium">{label}</label>}
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full p-2 border rounded border-gray-300"
            >
                <option value="">Select...</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
