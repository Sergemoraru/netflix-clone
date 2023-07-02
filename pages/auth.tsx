import Input from "@/components/input"
import { SetStateAction, useState } from "react"

const Auth = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const [varient, setVarient] = useState('login')

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')]">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="logo" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font font-semibold">
                            Sign in
                        </h2>
                        <div className="flex flex-col gap-4">
                            <Input 
                                label="Username"
                                id="name"
                                value={name}
                                onChange={(ev: { target: { value: SetStateAction<string>} } ) => setName(ev.target.value)} type={""}                                />
                            <Input 
                                label="Email"
                                id="email"
                                type="email"
                                value={email}
                                onChange={(ev: { target: { value: SetStateAction<string> } }) => setEmail(ev.target.value)}
                                />
                                <Input 
                                label="Password"
                                id="password"
                                type="password"
                                value={password}
                                onChange={(ev: { target: { value: SetStateAction<string> } }) => setPassword(ev.target.value)}
                                />
                        </div>
                        <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                             Login
                        </button>
                        <p className="text-neutral-500 mt-12">
                            First time using Netflix? 
                            <span className="text-white ml-1 hover:underline cursor-pointer">
                                 Create an account
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth