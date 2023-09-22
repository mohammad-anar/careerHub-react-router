import { useLoaderData } from "react-router-dom";
import { getSavedAppliedJobs } from "../../Component/Utilities/Utilities";
import { useEffect, useState } from "react";
import AppliedJob from "../../Component/AppliedJob/AppliedJob";

const AppliedJobs = () => {
    const [allJobApplied, setAllJobApplied] = useState([]);
    const [displayJob, setDisplayJob] = useState([]);
    const jobs = useLoaderData();
    useEffect(() => {
        const jobsApplications = getSavedAppliedJobs();
        if (jobs.length > 0) {
            const filtedAppliedJobs = jobs.filter(job => {
                return jobsApplications.includes(job.id)
            });
            setAllJobApplied(filtedAppliedJobs);
            setDisplayJob(filtedAppliedJobs);
        }

    }, [jobs]);
    console.log(allJobApplied, displayJob);

    const handleFilter = filter => {
        if (filter === "all") {
            setDisplayJob(allJobApplied);
        }else if (filter === "remote") {
            const remote = allJobApplied.filter(job => job.remote_or_onsite === "Remote");
            setDisplayJob(remote)
        }else if (filter === "onside") {
            const onside = allJobApplied.filter(job => job.remote_or_onsite === "Onsite");
            setDisplayJob(onside);
        }
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-12 primary-bg pb-20 pt-4"> Applied Jobs</h2>
            <div className="w-[80%] mx-auto">
                <div className="flex justify-end mb-5">
                    <div className="dropdown dropdown-hover">
                        <label tabIndex={0} className="btn m-1">Filt By</label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-24">
                            <li onClick={() => handleFilter('all')}><a>All</a></li>
                            <hr />
                            <li onClick={() => handleFilter('remote')}><a>Remote</a></li>
                            <hr />
                            <li onClick={() => handleFilter('onside')}><a>Onsite</a></li>
                        </ul>
                    </div>
                </div>

                <div>
                    {
                        displayJob.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;