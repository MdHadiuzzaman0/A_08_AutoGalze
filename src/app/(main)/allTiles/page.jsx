"use client";
import Search from "@/components/Search";
import TileCard from "@/components/TileCard";
import { getAllTilesData } from "@/lib/data";
import Link from 'next/link';
import { useState, useEffect } from "react";

// export const metadata = {
//   title: "All Tile",
// };

const AllTiles = () => {
  // const allTiles =  getAllTilesData();
  const [allTiles, setAllTiles] = useState([]);
  const [searchingTile, setSearchingTile] = useState("")

  useEffect(() => {
    getAllTilesData().then(data => setAllTiles(data));
  }, []);

  const tileFound = allTiles.filter(tile => tile.title.toLowerCase().includes(searchingTile))

  return (
    <div>
      <div>
        {/* Header Section: Mobile-এ কলাম আর Tablet/Desktop-এ পাশাপাশি থাকবে */}
        <div className='flex flex-col md:flex-row justify-between items-center mt-8 px-6 gap-4'>
          <h3 className="font-bold text-xl md:text-2xl text-[#1a0f00]">All Tiles</h3>
          <div className="w-full md:w-auto">
            <Search handleSearch={setSearchingTile} />
          </div>
        </div>

        {/* Grid Section: Mobile-এ ১টি, Tablet-এ ২টি এবং Desktop-এ ৩টি কার্ড দেখাবে */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto mt-8 px-6">
          {tileFound.length === 0 ?
            allTiles.map(tile => <TileCard key={tile.id} tile={tile} />)
            :
            tileFound.map(tile => <TileCard key={tile.id} tile={tile} />)
          }
        </div>

        {/* Button Section: Mobile-এ বড় বাটন আর Desktop-এ ছোট বাটন */}
        {/* <Link href="/allTiles" className="flex justify-center">
          <button className='btn bg-amber-200 hover:bg-amber-300 border-none px-10 py-3 w-full max-w-[300px] md:w-auto mx-auto mt-12 text-lg font-bold mb-20 transition-all'>
            Explore All Tiles
          </button>
        </Link> */}
      </div>

    </div>

  );
};

export default AllTiles;