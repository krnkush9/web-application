// importing useState and CreateContext hooks
import { useState, createContext } from "react";

// creating and exporting CreateContext Object
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    // useState hook
    // post will store all the post which is coming from the API.
    const [post, setPost] = useState("");

    // loading will track the spinner. When loading value will true
    // then spinner will display otherwise not.
    const [loading, setLoading] = useState(true);

    // API
    const url = "https://newsdata.io/api/1/latest?apikey=pub_467885f9f6bbad30a161fd552e25c6a272925&q=";

    // This function will fetch data from the API. It is a async function
    // for handle the promise.
    async function fetchData(category = "news") {
        // Set true the value of the loading.
        setLoading(true);
        // try block for error handling
        try {
            // callig the API
            const response = await fetch(`${url}${category}`);
            // converting response into the json format.
            const data = await response.json();
            // console.log(data.results);
            setPost(data.results);
        }

        // Catch block will catch the error and display error on the console.
        catch (error) {
            console.warn(error);
            console.log("Can't fetch API");
        }
        // set the loading value false
        // loading value false means don't show the spinner
        setLoading(false);
    }

    // storing all value in a object so that we can use in other components.
    const value = { post, fetchData, loading };

    // wrapping with the context provider
    return <AppContext.Provider value={value} >
        {children}
    </AppContext.Provider>
}