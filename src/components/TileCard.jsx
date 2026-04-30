import Image from "next/image";
import Link from 'next/link';

const TileCard = ({tile}) => {
    return (
        <div>
            <div className="card card-compact bg-base-100 w-full shadow-xl border border-gray-200 overflow-hidden group">
                {/* ইমেজ সেকশন */}
                <figure className="relative overflow-hidden h-64">
                    <Image
                        src={tile.image}
                        alt="Ceramic Blue Glaze Tile"
                        width={500} height={500}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* ক্যাটাগরি ব্যাজ */}
                    <div className="absolute top-4 left-4">
                        <span className="badge badge-primary uppercase text-xs font-bold px-3 py-2">{tile.category}</span>
                    </div>
                </figure>

                {/* বডি সেকশন */}
                <div className="card-body">
                    <div className="">
                        <h2 className="card-title text-xl font-bold text-gray-800">{tile.title}</h2>
                    </div>

                    {/* ডেসক্রিপশন - ৩ লাইনে সীমাবদ্ধ */}
                    <p className="text-gray-600 line-clamp-3 text-justify">
                        {tile.description}
                    </p>

                    {/* ইনফরমেশন গ্রিড */}
                    <div className="text-lg font-bold text-primary">$ <span className="text-xl">{tile.price}</span></div>
                    <div className="flex flex-wrap gap-2 my-2">
                        
                        {true ? (
                            <div className="badge badge-success badge-sm text-white">In Stock</div>
                        ) : (
                            <div className="badge badge-error badge-sm text-white">Out of Stock</div>
                        )}
                    </div>

                    {/* অ্যাকশন বাটন */}
                    <Link href={`/allTiles/${tile.id}`} className="card-actions justify-end mt-4">
                        <button className="btn btn-primary btn-block group-hover:shadow-lg transition-all">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default TileCard;