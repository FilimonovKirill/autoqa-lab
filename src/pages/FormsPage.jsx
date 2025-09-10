import { useForm } from "react-hook-form";
import Input from "../components/ui/Input";
import Checkbox from "../components/ui/Checkbox";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";

const FormsPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form data:", data);
        alert(JSON.stringify(data, null, 2));
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Registration Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Name" name="name" register={register} required errors={errors} />
                <Input label="Email" name="email" register={register} required type="email" errors={errors} />
                <Input label="Password" name="password" register={register} required type="password" errors={errors} />

                <Select
                    label="Role"
                    name="role"
                    register={register}
                    required
                    options={[
                        { label: "User", value: "user" },
                        { label: "Admin", value: "admin" },
                    ]}
                    errors={errors}
                />

                <Checkbox label="Accept terms" name="terms" register={register} required errors={errors} />

                <Button type="submit">Register</Button>
            </form>
        </div>
    );
};

export default FormsPage;
