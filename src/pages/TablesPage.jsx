import { faker } from "@faker-js/faker";
import Table from "../components/ui/Table";
import { useState } from "react";

const TablesPage = () => {
    const generateData = (num = 10) => {
        return Array.from({ length: num }, () => ({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            phone: faker.phone.number(),
            city: faker.location.city(),
        }));
    };

    const [data, setData] = useState(generateData(10));

    const columns = [
        { header: "Name", accessor: "name" },
        { header: "Email", accessor: "email" },
        { header: "Phone", accessor: "phone" },
        { header: "City", accessor: "city" },
    ];

    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Users Table</h1>
            <Table columns={columns} data={data} />
        </div>
    );
};

export default TablesPage;
