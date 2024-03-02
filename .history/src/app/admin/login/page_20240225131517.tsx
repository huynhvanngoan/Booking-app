import { Card, CardHeader } from '@nextui-org/react';
import React from 'react'

const Login = () => {
    return (
        <div className='h-[100vh] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat' style={{ backgroundImage:'url("/home/home-bg.png")' }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-2xl">
                <Card className='shadow-2xl bg-opacity-20 ww-[440px]'>
                    <CardHeader className='flex flex-col gap-1 capitalize text-3xl items-center'>
                        .flex.flex-col.gap-1.capitalize.text-3xl.itesm
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}

export default Login;