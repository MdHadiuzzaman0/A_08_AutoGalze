"use client";

const Search = ({handleSearch}) => {
    const handle = (e) =>{
        e.preventDefault();
        const typedText = e.target.tile.value.toLowerCase().trim();
        handleSearch(typedText)
    }

    return (
        <div>
            <form className='flex w-full md:w-auto' onSubmit={handle}>
                 <input type="text" name='tile' placeholder="Search interactions..." className="input input-bordered w-full md:w-64 border-emerald-500/20 focus:border-emerald-500 py-5" />
                 <button type="submit" className="btn bg-emerald-500 text-white hover:bg-emerald-400 ml-2 border-none">Search</button>
            </form>
        </div>
    );
};

export default Search;