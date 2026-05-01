import Navbar from "@/components/Navbar";
import { ToastContainer } from 'react-toastify';
import MarqueeBanner from "@/components/MarqueeBanner";
import { getAllTilesData } from "@/lib/data";

export default async function Layout({ children }) {
    const allTiles = await getAllTilesData();

    return (
        <div>
            <Navbar></Navbar>
            <MarqueeBanner />
            <ToastContainer />
            <main>{children}</main>
        </div>
    );
}