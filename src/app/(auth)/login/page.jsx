"use client";
import Link from "next/link";
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import { authClient } from "@/lib/auth-client";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const checkPasswordValue = watch("password", "")

    const login = async (loginInfo) => {
        const { data, error } = await authClient.signIn.email({
            email: loginInfo.email,
            password: loginInfo.password,
            callbackURL: "/",
        })
        if (error) {
            toast.error(error.message);
            return;
        }
        else {
            
            toast.success("Login is done")
        }
    }

    const requestGoogleAccess = async () => {
            const data = await authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
            });
        }

    return (
        <div>
            <form onSubmit={handleSubmit(login)} className="fieldset bg-base-200 border-base-300 rounded-box w-6/12 mx-auto mt-19 border p-4">
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input
                        type="email"
                        className="input w-full"
                        placeholder="Email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Enter a valid email address",
                            },
                        })} />
                    {errors.email && <p role="alert">{errors.email.message}</p>}
                </fieldset>

                <label className="fieldset">
                    <span className="label">Password</span>
                    <input
                        type="password"
                        className="input w-full"
                        placeholder="Password"
                        {...register("password", {
                            required: "Password is required",
                            validate: (value) => {
                                // if (value.length < 4) {
                                //     return "Password must be at least 8 characters";
                                // }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                            },
                            minLength: {
                                value: 8,
                                message: "Password must contain at least eight characters",
                            },
                        })} />
                    {/* {checkPasswordValue.length == 0 ? "" : errors.password ? <p role="alert" className="text-red-400">{errors.password.message}</p> : <p className="text-green-400">Password is ok</p>} */}
                    { errors.password &&  <p role="alert" className="text-red-400">{errors.password.message}</p>}
                </label>

                <button className="btn btn-neutral mt-4" type="submit">Login</button>
                <button className="btn btn-ghost mt-1" type="reset">Reset</button>
                <div className="divider">OR</div>
                <button onClick={requestGoogleAccess} type="button" className="btn btn-outline btn-info w-full">
                    Login with Google
                </button>
                <p className="text-center mt-4 text-sm">
                    Dont Have An Account?
                    <Link href="/register" className="text-red-500 font-bold ml-1">
                        Register
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;