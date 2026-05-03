"use client";
import { authClient } from "@/lib/auth-client"
import { toast } from "react-toastify";
import { useForm } from "react-hook-form"
import { useRouter } from 'next/navigation'

// export const metadata = {
//   title: "Update Section",
// }

export default function UpdateProfile() {
    const { register, handleSubmit } = useForm();
    const router = useRouter()

    async function update(updatedInfo) {
        const { data, error } = await authClient.updateUser({
            image: updatedInfo.image,
            name: updatedInfo.name,
        })
        if (error) {
            toast.error(error.message)
        }
        else {
            // console.log(data)
            toast.success("Profile updated!")
            router.refresh()
            router.push('/myProfile')
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
            <div className="card w-full max-w-md bg-base-100 shadow-xl p-8 border">
                <h2 className="text-2xl font-bold mb-6">Update Profile</h2>
                <form onSubmit={handleSubmit(update)} className="space-y-4">
                    <div className="form-control">
                        <label className="label font-bold">Name</label>
                        <input name="name" type="text" placeholder="Enter new name" 
                        {...register("name", { required: true })}
                        className="input input-bordered w-full"  />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">Photo URL</label>
                        <input name="image" type="text" placeholder="Enter new image URL" 
                        {...register("image", { required: true })}
                        className="input input-bordered w-full" />
                    </div>
                    <button type="submit" className="btn btn-neutral w-full mt-4">
                        Update Information
                    </button>
                </form>
            </div>
        </div>
    );
}