const Slider = ({ label, min = 0, max = 100, value, onChange }) => {
    return (
        <div className="mb-4">
            {label && <label className="block mb-1 font-medium">{label}: {value}</label>}
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full"
            />
        </div>
    );
};

export default Slider;
