import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>

    );
}