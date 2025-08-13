import Button from "@/components/atoms/Button";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Pen, Trash } from "lucide-react";

export default function ButtonPage() {
    return (
        <DashboardLayout>
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold">Button</h1>
                <div className="flex flex-col gap-4 w-auto">
                    <Button label="Primary" variant="primary" />
                    <Button label="Secondary" variant="secondary" />
                    <Button label="Danger" variant="danger" />
                    <Button label="Success" variant="success" />
                    <Button label="Success" variant="success" shape='squared' />
                    <Button label="Edit" variant="dark" icon={<Pen className='w-5 h-5' />} iconPosition='left' />
                    <Button label="Delete" variant="danger" icon={<Trash className='w-5 h-5' />} iconPosition='right' />
                </div>
            </div>
        </DashboardLayout>
    );
}
