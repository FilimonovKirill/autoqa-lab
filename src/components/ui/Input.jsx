const Input = ({ label, name, register, required, type = "text", errors }) => {
    return (
        <div className="mb-4">
            {label && <label className="block mb-1 font-medium">{label}</label>}
            <input
                type={type}
                {...register(name, { required })}
                className={`w-full p-2 border rounded ${errors[name] ? "border-red-500" : "border-gray-300"
                    }`}
            />
            {errors[name] && <p className="text-red-500 text-sm mt-1">This field is required</p>}
        </div>
    );
};

export default Input;
