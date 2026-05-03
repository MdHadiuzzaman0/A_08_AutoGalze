"use client";

const ScrollToTopInFooter = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div>
            <button
                onClick={scrollToTop}
                className="w-10 h-10 flex items-center justify-center border border-amber-400/30 rounded-sm bg-amber-400/5 text-[#d4a94a] transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:text-black group"
                aria-label="Back to top" >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="18 15 12 9 6 15" />
                </svg>
            </button>
        </div>
    );
};

export default ScrollToTopInFooter;