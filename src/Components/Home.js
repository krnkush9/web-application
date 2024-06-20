import { useContext, useState } from "react";
import Card from "./Card";
import { AppContext } from "../Context/AppContext";
import Spinner from './Spinner';
import Pagination from "./Pagination";

function Home() {
    // useState hook
    // taking input value from the input tag
    const [val, setValue] = useState({ inputValue: "" });

    // Accepting post, loading, fetchData from the AppContext using useContext Hook
    const { post, loading, fetchData } = useContext(AppContext);

    // changeHandler function using this we track the input value
    function changeHandler(event) {
        // it will set value in the val
        setValue(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    // categoryHandler function using this we call the fetch function
    // it will take value of the category as a parameter
    const categoryHandler = (val) => {
        fetchData(val);
    }

    return (
        <div className="w-[90%] mx-auto">
            {/* It is a paragraph. It work as a logo. */}
            <p className="font-bold text-3xl my-3 select-none underline
            text-center md:text-left lg:text-left">React News Portal</p>

            {/* Category heading */}
            <p className="font-bold text-2xl text-center"> Category</p>

            {/* cateogories button */}
            <div className="w-full p-4 my-2 flex flex-col lg:flex-row lg:justify-center lg:gap-x-4
            font-bold text-lg md:flex-row md:gap-x-4
            md:gap-y-4 sm:gap-y-4 items-center gap-y-4 md:justify-center">

                {/* Bussiness button */}
                <button className="px-3 py-2 bg-[#4ea1e9] hover:bg-[#f0ffff]
                rounded-md text-white tracking-wider hover:text-black transition-all duration-300 ease-out
                "
                    onClick={() => categoryHandler("business")}>Business
                </button>

                {/* Entertainment button */}
                <button className="px-3 py-2 bg-[#4ea1e9] hover:bg-[#f0ffff]
                rounded-md text-white tracking-wider hover:text-black transition-all duration-300 ease-out"
                    onClick={() => categoryHandler("entertainment")}>
                    Entertainment
                </button>

                {/* Technical button */}
                <button className="px-3 py-2 bg-[#4ea1e9] hover:bg-[#f0ffff]
                rounded-md text-white tracking-wider hover:text-black transition-all duration-300 ease-out"
                    onClick={() => categoryHandler("technical")}>
                    Technical
                </button>
            </div>

            {/* search box */}
            <div className="w-full flex gap-x-4 justify-center p-3
            mb-3">

                {/* input tag */}
                <input
                    type="text"
                    placeholder="Search"
                    name="inputValue"
                    onChange={changeHandler}
                    className="px-3 border-2 rounded-sm"
                />

                {/* seach button */}
                <button onClick={() => val.inputValue.length != 0 ? fetchData(`${val.inputValue}`) : val.inputValue=""}
                    className="px-3 py-2 font-bold bg-[#4ea1e9] hover:bg-[#f0ffff]
                rounded-md text-white tracking-wider hover:text-black transition-all duration-300 ease-out">
                    Search
                </button>

            </div>

            {/* cards  section */}

            {
                // ternary operator for showing the spinner (loading)
                // When loading will true then Spinner will display otherwise
                // map function will run.

                loading ?
                    <div className="flex justify-center my-16">
                        <Spinner/>
                    </div>

                    : 
                    <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                        {
                            // map function 
                            // Post is a array. First of all 1st index value will store 
                            // in the val then val will pass in the Card component.
                            post.map((val) => {
                                return <Card key={val.article_id} val={val} />
                            })
                        }
                    </div> 
            }

            {/* Pagination components */}
            <Pagination />
        </div>
    )
}

export default Home;