const Checkbox = ({ label, name, register, required, errors }) => {
    return (
        <div className="mb-4 flex items-center">
            <input
                type="checkbox"
                {...register(name, { required })}
                className="mr-2"
            />
            <label>{label}</label>
            {errors[name] && <p className="text-red-500 text-sm ml-4">Required</p>}
        </div>
    );
};

export default Checkbox;
