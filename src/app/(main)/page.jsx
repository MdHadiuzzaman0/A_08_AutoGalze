import TileCard from "@/components/TileCard";
import { getAllTilesData } from "@/lib/data";
import Link from 'next/link';

const Home = async () => {
  const allTiles = await getAllTilesData();

  return (
    <div>
      <div className="grid grid-cols-2 gap-6 w-10/12 mx-auto mt-10">
        {
          allTiles.slice(0, 4).map(tile => <TileCard key={tile.id} tile={tile}></TileCard>)
        }
      </div>

      <Link href="/allTiles">
        <button className='btn px-6 py-2 bg-amber-200 flex justify-self-center w-4/12 mx-auto mt-10 text-lg font-bold'>All Tiles</button></Link>
    </div>

  );
};

export default Home;