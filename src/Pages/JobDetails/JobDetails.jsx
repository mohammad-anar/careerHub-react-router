import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollar } from "react-icons/ai";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { BsFillCalendarWeekFill, BsFillTelephoneFill } from "react-icons/bs";
import { saveAppliedJob } from "../../Component/Utilities/Utilities";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const job = jobs.find(job => job.id === intId);
    const { educational_requirements, experiences, contact_information, job_description, job_responsibility, job_title,  salary } = job;
    console.log(job);

    const handleLocalStorage = () => {
        saveAppliedJob(intId)
    }

    return (
        <div className="min-h-screen mb-10">
            <h2 className="text-3xl font-bold text-center mb-12 primary-bg pb-20 pt-4"> Job Details</h2>

            <div className="grid grid-cols-5 w-[80%] mx-auto gap-8">
                <div className="col-span-3">
                    <p className="text-base font-normal text-[#757575] mb-6">
                        <span className="font-bold text-black">Job Description:</span> {job_description}
                    </p>
                    <p className="text-base font-normal text-[#757575] mb-6">
                        <span className="font-bold text-black">Job Responsibility:</span> {job_responsibility}
                    </p>
                    <div>
                        <h2 className="text-base mb-4 font-bold">Educational Requirements:</h2>
                        <p className="text-base font-normal text-[#757575] mb-6">{educational_requirements}</p>
                    </div>
                    <div>
                        <h2 className="text-base mb-4 font-bold">Experience: </h2>
                        <p className="text-base font-normal text-[#757575] mb-6">{experiences}</p>
                    </div>


                </div>
                <div className="col-span-2">
                    <div>
                        <div className="primary-bg p-5 rounded-lg">
                            <h2 className="text-xl font-bold"> Job details</h2>
                            <hr className="my-4"></hr>

                            <div>
                                <h3 className="flex items-center gap-1 mb-3 font-bold"><AiOutlineDollar></AiOutlineDollar>Salary: <sapn className="
                            font-normal text-[#757575] ml-3"> {salary} (Per Month)</sapn> </h3>
                                <h3 className="flex items-center gap-1 font-bold"><BsFillCalendarWeekFill></BsFillCalendarWeekFill>Job Title: <sapn className="
                            font-normal text-[#757575] ml-3"> {job_title}</sapn>  </h3>
                                <h3 className="text-xl font-bold mt-7">Contact Information</h3>
                            </div>
                            <hr className="my-4"></hr>

                            <div>
                                <p className="mb-2 flex items-center gap-2"><span className="font-bold flex items-center gap-1"><BsFillTelephoneFill></BsFillTelephoneFill>Phone :</span> {contact_information.phone}</p>

                                <p className="mb-2 flex items-center gap-2 "><span className="font-bold flex items-center gap-1"><MdEmail></MdEmail>Email :</span> {contact_information.email}</p>
                                <p className="mb-2 flex items-start gap-2 "><span className="font-bold flex items-center gap-1"> <MdLocationPin></MdLocationPin>Address:</span> {contact_information.address}</p>
                            </div>

                        </div>
                        <div className="flex flex-col">
                            <button
                            onClick={handleLocalStorage}
                            className="btn apply-btn text-white text-xl font-bold mt-4">Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;