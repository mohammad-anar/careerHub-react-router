import { useEffect, useState } from "react";
import Category from "../Category/Category";

const JobCategory = () => {
    const [catagories, setCategories] = useState([]);
    useEffect(() => {
        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, []);

    return (
        <div className="mt-32 w-[80%] mx-auto">
            <h1 className="text-5xl font-bold text-center">Job Category List</h1>
            <p className="text-base text-[#757575] mt-4 text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-4 gap-6 mt-8">
            {
                catagories.map(category => <Category key={category.id} category={category}></Category>)
            }
            </div>
        </div>
    );
};

export default JobCategory;