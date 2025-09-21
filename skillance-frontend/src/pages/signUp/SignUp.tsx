import { useState, type FormEvent } from "react"
import { signIn, signUp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type Props = {
    type: string,
    onClose: () => void
}
const SignUp = ({ type, onClose }: Props) => {

    const [modleType, changeType] = useState(type);
    const [form, setForm] = useState({ username: "", email: "", password: "", role: "" });
    const navigate = useNavigate();

    const handleEmailChange = (value: string) => { setForm({ ...form, email: value }) }
    const handlePasswordChange = (value: string) => { setForm({ ...form, password: value }) }
    const handleUsernameChange = (value: string) => { setForm({ ...form, username: value }) }
    const handleRoleChange = (value: string) => { setForm({ ...form, role: value }) }


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (modleType == "sign-in") {
            const x = await signIn({ email: form.email, password: form.password });
            console.log(x)
            localStorage.setItem("token", x.token);
            localStorage.setItem("user", JSON.stringify(x.userDto));
            toast.success('Login Success!');

            let dashboardType = "client";
            if(x.userDto && x.userDto.role == "ROLE_FREELANCER") dashboardType = "seller";
            navigate(`/dashboard?t=${dashboardType}`);
        } else {
            await signUp(form);
            toast.success('Account Created!');
        }
        onClose();
    }
    return (
        <>
            {/* Login/Signup Modal */}
            <div id="authModal" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg w-11/12 md:w-96 p-8 relative">
                    <button id="closeModal" className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={onClose}>
                        <i className="fa-solid fa-xmark text-xl"></i>
                    </button>

                    <h2 className="text-2xl font-bold mb-6 text-center">Welcome to SkilLancer</h2>

                    {
                        modleType == "sign-in" ?
                            <form onSubmit={(e) => handleSubmit(e)} id="loginForm">
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                        name="email" onChange={(e) => handleEmailChange(e.target.value)} />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2">Password</label>
                                    <input type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                        name="password" onChange={(e) => handlePasswordChange(e.target.value)} />
                                </div>
                                <button type="submit" className="w-full bg-primary text-white py-2 rounded-md hover:bg-green-600 transition mb-4">Sign In</button>
                                <p className="text-center text-sm text-gray-600">
                                    Don't have an account?
                                    <button type='button' id="showSignup" className="text-primary hover:underline" onClick={() => changeType("sign-up")}> Sign up</button>
                                </p>
                            </form>

                            :
                            <form onSubmit={(e) => handleSubmit(e)} id="signupForm">
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Username</label>
                                    <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                        name="username" onChange={(e) => handleUsernameChange(e.target.value)} />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                        name="email" onChange={(e) => handleEmailChange(e.target.value)} />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Password</label>
                                    <input type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                        name="password" onChange={(e) => handlePasswordChange(e.target.value)} />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2">I want to</label>
                                    <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                        name="role" onChange={(e) => handleRoleChange(e.target.value)}>
                                        <option value={"ROLE_CLIENT"}>Hire Freelancers</option>
                                        <option value={"ROLE_FREELANCER"}>Work as a Freelancer</option>
                                    </select>
                                </div>
                                <button type="submit" className="w-full bg-primary text-white py-2 rounded-md hover:bg-green-600 transition mb-4">Create Account</button>
                                <p className="text-center text-sm text-gray-600">
                                    Already have an account?
                                    <button type='button' id="showLogin" className="text-primary hover:underline" onClick={() => changeType("sign-in")}> Sign in</button>
                                </p>
                            </form>
                    }


                </div>
            </div>
        </>
    )
}

export default SignUp