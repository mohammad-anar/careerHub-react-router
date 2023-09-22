import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [datalength, setDataLength] = useState(4);
    useEffect(() => {
        fetch('/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, []);
    return (
        <div className="w-[80%] mx-auto mt-32">
            <h1 className="text-5xl font-bold text-center mb-4">Featured Jobs</h1>
            <p className="text-[#757575] text-center text-base font-medium mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-2 gap-4">
                {
                    jobs.slice(0, datalength).map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
                }
            </div>
            <div className={`${datalength === jobs.length && "hidden"} flex justify-center mb-32`}>
            <button 
            onClick={() => setDataLength(jobs.length)}
            className="btn apply-btn text-white text-xl font-bold mt-4">View Details</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;