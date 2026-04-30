import { getSingleTilesData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

const AllInfoAboutSingleTile = async ({ params }) => {
    const { id } = await params;
    const tile = await getSingleTilesData(id);
    // console.log(id, tile)
    return (
        <div className="container mx-auto p-6 lg:py-12">
            <div className="flex flex-col lg:flex-row gap-10 bg-base-100 shadow-2xl rounded-3xl overflow-hidden border border-gray-100 p-10">

                {/* বাম পাশ: ইমেজ সেকশন */}
                <div className="lg:w-1/2 relative h-[500px] lg:h-[750px]">
                    <Image
                        src={tile.image}
                        alt={tile.title}
                        // width={500} height={500}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-101 rounded-xl"
                    />
                    <div className="absolute top-5 left-5">
                        <span className="badge badge-primary p-4 font-bold uppercase tracking-wider">{tile.category}</span>
                    </div>
                </div>

                {/* ডান পাশ: ইনফরমেশন সেকশন */}
                <div className="lg:w-1/2 flex flex-col justify-center">

                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{tile.title}</h1>
                    <p className="text-2xl font-bold text-secondary mb-1">${tile.price}</p>

                    <div className="divider"></div>

                    <div className="space-y-4 mb-8">
                        <h3 className="text-lg font-semibold text-gray-800">Product Overview:</h3>
                        <p className="text-gray-600 leading-relaxed text-justify">
                            {tile.description}
                        </p>
                    </div>

                    {/* স্পেসিফিকেশন টেবিল */}
                    <div className="grid grid-cols-2 gap-4 mb-8 bg-gray-50 p-6 rounded-2xl">
                        <div>
                            <span className="text-xs uppercase text-gray-400 font-bold block">Dimensions</span>
                            <span className="text-gray-800 font-medium">{tile.dimensions}</span>
                        </div>
                        <div>
                            <span className="text-xs uppercase text-gray-400 font-bold block">Material</span>
                            <span className="text-gray-800 font-medium">{tile.material}</span>
                        </div>
                        <div>
                            <span className="text-xs uppercase text-gray-400 font-bold block">Status</span>
                            <span className={`font-medium ${tile.inStock ? 'text-success' : 'text-error'}`}>
                                {tile.inStock ? "● In Stock" : "● Out of Stock"}
                            </span>
                        </div>
                        {/* <div>
              <span className="text-xs uppercase text-gray-400 font-bold block">Finish</span>
              <span className="text-gray-800 font-medium">Glazed / Matte</span>
            </div> */}
                    </div>

                    <div className="flex gap-4">
                        <button className="btn btn-primary text-white shadow-lg">Add to Cart</button>
                        <button className="btn btn-outline btn-secondary">Add to Wishlist</button>
                    </div>
                </div>
            </div>

            <Link href="/allTiles" className="text-md rounded-2xl font-bold hover:underline w-3/12 flex justify-self-center bg-amber-400 btn mt-15">
                Back to All Section
            </Link>
        </div>
    );
};

export default AllInfoAboutSingleTile;