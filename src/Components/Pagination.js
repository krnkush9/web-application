function Pagination() {
    return (
        <div className="w-full mt-5 border-t-2 shadow-t-md
        flex gap-x-3 justify-end p-3"
        >
            {/* Previous button */}
            <button className="px-3 py-2 bg-[#4ea1e9] hover:bg-[#f0ffff]
                rounded-md font-bold tracking-wider text-white hover:text-black transition-all duration-300 ease-out"
            >Previous
            </button>

            {/* Next button */}
            <button className="px-3 py-2 bg-[#4ea1e9] hover:bg-[#f0ffff]
                rounded-md font-bold tracking-wider text-white hover:text-black transition-all duration-300 ease-out"
            >Next
            </button>

        </div>
    )
}

export default Pagination;