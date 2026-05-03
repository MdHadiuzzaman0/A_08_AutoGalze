"use client";
import Link from "next/link";
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Register = () => {
    const router = useRouter();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const checkPasswordValue = watch("password", "")

    const reg = async (registerInfo) => {
        const { data, error } = await authClient.signUp.email({
            email: registerInfo.email,
            password: registerInfo.password,
            image: registerInfo.image,
            name: registerInfo.name,
            callbackURL: "/login",
        })
        if (error) {
            toast.error(error.message);
            return;
        }
        else {
            toast.success("register is done");
            router.push("/login");
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
            <form onSubmit={handleSubmit(reg)} className="fieldset bg-base-200 border-base-300 rounded-box w-6/12 mx-auto mt-19 border p-4">
                {/* Name Section */}
                <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input
                        type="text"
                        className="input w-full"
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: "Name is required",
                            minLength: { value: 3, message: "Name must be at least 3 characters" }
                        })}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1" role="alert">{errors.name.message}</p>}
                </fieldset>

                {/* Photo URL Section */}
                <fieldset className="fieldset mt-4">
                    <label className="label">Image URL</label>
                    <input
                        type="url"
                        className="input w-full"
                        placeholder="e.g. https:// .......... .png|jpg|jpeg|gif|webp|svg"
                        {...register("image", {
                            required: "Photo URL is required",
                            pattern: {
                                value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))$/i,
                                message: "Please enter a valid image URL"
                            }
                        })}
                    />
                    {errors.image && <p className="text-red-400 text-xs mt-1" role="alert">{errors.image.message}</p>}
                </fieldset>
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
                    {errors.password && <p role="alert" className="text-red-400">{errors.password.message}</p>}
                </label>

                <button className="btn btn-neutral mt-4" type="submit">Register</button>
                <button className="btn btn-ghost mt-1" type="reset">Reset</button>

                <div className="divider">OR</div>

                <button onClick={requestGoogleAccess} type="button" className="btn btn-outline btn-info w-full">
                    Login with Google
                </button>

                <p className="text-center mt-4 text-sm">
                    Have An Account?
                    <Link href="/login" className="text-red-500 font-bold ml-1">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Register;