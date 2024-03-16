"use client"

import { signUp } from "next-auth-sanity/client"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import toast from "react-hot-toast"
import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"

const defaultFormData = {
    email: "",
    username: "",
    password: ""

}

const Auth = () => {
    const [formData, setFormData] = useState(defaultFormData)

    const inputStyles = "border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }

    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (session) router.push("/")
    }, [router, session])

    const loginHandler = async () => {
        try {
            await signIn()
            router.push("/")
        } catch (error) {
            console.log(error)
            toast.error("An error occurred")
        }
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            const user = await signUp(formData)
            if (user) {
                toast.success("Account created successfully")
            }

        } catch (error) {
            console.log(error)
            toast.error("An error occurred")

        } finally {
            setFormData(defaultFormData)
        }
    }

    return (
        <section className="container mx-auto">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
                <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                        Create an account
                    </h1>
                    <p>OR</p>
                    <span className="inline-flex items-center">
                        <AiFillGithub
                            onClick={loginHandler}
                            className="mr-3 text-3xl cursor-pointer text-black dark:text-white" /> |
                        <FcGoogle
                            onClick={loginHandler}
                            className="ml-3 text-3xl cursor-pointer text-black dark:text-white" />
                    </span>
                </div>
                <form className="space-y-5 md:space-y-7" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="name@organization.com"
                        required
                        className={inputStyles}
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        required
                        className={inputStyles}
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        minLength={8}
                        className={inputStyles}
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <button
                        type="submit"
                        className="bg-tertiary-dark focus:outline-none rounded-lg py-3 text-center font-semibold w-full text-sm px-5"
                    >
                        Sign up
                    </button>

                </form>
                <button onClick={loginHandler} className="text-blue-600 underline">Login</button>
            </div>
        </section>
    )
}

export default Auth