const Select = ({ label, name, register, options = [], required, errors }) => {
    return (
        <div className="mb-4">
            {label && <label className="block mb-1 font-medium">{label}</label>}
            <select
                {...register(name, { required })}
                className={`w-full p-2 border rounded ${errors[name] ? "border-red-500" : "border-gray-300"
                    }`}
            >
                <option value="">Select...</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            {errors[name] && <p className="text-red-500 text-sm mt-1">Required</p>}
        </div>
    );
};

export default Select;
