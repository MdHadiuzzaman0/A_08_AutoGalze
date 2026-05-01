"use client";
import Search from "@/components/Search";
import TileCard from "@/components/TileCard";
import { getAllTilesData } from "@/lib/data";
import Link from 'next/link';
import { useState, useEffect } from "react";

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
      <div className='flex justify-between items-center mt-8 px-6'>
        <h3 className="font-bold text-lg">All Tiles</h3>
        <Search handleSearch={setSearchingTile} className="" />
      </div>
      <div className="grid grid-cols-3 gap-6 w-full mx-auto mt-6 px-6">
        {tileFound.length == 0 ?
          allTiles.map(tile => <TileCard key={tile.id} tile={tile}></TileCard>)
          :
          tileFound.map(tile => <TileCard key={tile.id} tile={tile}></TileCard>)
        }
      </div>

      <Link href="/allTiles">
        <button className='btn px-6 py-2 bg-amber-200 flex justify-self-center w-4/12 mx-auto mt-10 text-lg font-bold'>All Tiles</button>
      </Link>

    </div>

  );
};

export default AllTiles;