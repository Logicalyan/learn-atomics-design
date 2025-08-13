import Button from '@/components/atoms/Button'
import { Input } from '@/components/atoms/Input'
import { FormField } from '@/components/molecules/FormField'
import { Pen, Trash } from 'lucide-react'

export default function Home() {
    return (
        <>
            <div className='flex flex-col gap-4'>

                <h1>Button</h1>
                <div className='flex gap-4'>
                    <Button label="Primary" variant="primary" />
                    <Button label="Secondary" variant="secondary" />
                    <Button label="Danger" variant="danger" />
                    <Button label="Success" variant="success" />
                    <Button label="Edit" variant="dark" icon={<Pen className='w-5 h-5' />} iconPosition='left' />
                    <Button label="Delete" variant="danger" icon={<Trash className='w-5 h-5' />} iconPosition='right' />

                </div>
                <div className='flex flex-col
                gap-4'>
                    <Input size='sm' icon={<Pen className='w-3 h-3' />} />
                    <Input variant='error' size='sm' icon={<Pen className='w-4 h-4' />} />
                    <Input variant='success' size='md' icon={<Pen className='w-5 h-5' />} />
                </div>

                <div className="p-6 w-80 flex flex-col gap-4">
                    <FormField
                        id="username"
                        label="Username"
                        placeholder="Enter your username"
                        iconPosition="left"
                    />

                    <FormField
                        id="email"
                        label="Email"
                        placeholder="Enter your email"
                        error="Email is required"
                    />
                </div>
            </div>
        </>
    )
}
