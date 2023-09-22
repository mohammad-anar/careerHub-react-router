import PropTypes from 'prop-types';
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from 'react-router-dom';
const FeaturedJob = ({ job }) => {
    const {id,  logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>
            <div className="card card-compact primary-bg p-6">
                <img className='w-[200px] h-[40px] mb-8 ml-6' src={logo} alt="company-logo" />
                <div className="card-body">
                    <h2 className="text-2xl font-medium text-[#474747]">{job_title}</h2>
                    <h3 className="text-xl font-medium text-[#757575]">{company_name}</h3>
                    <div>
                        <button className='text-bast font-extrabold border mr-5 px-6 gradientText py-2 rounded-lg border-blue-400'>{remote_or_onsite}</button>
                        <button className='text-bast font-extrabold border mr-5 px-6 mt-4 gradientText py-2 rounded-lg border-blue-400'>{job_type}</button>
                    </div>
                    <div className='flex'>

                        <p className='text-xl flex items-center gap-1 font-medium text-[#757575] mt-4'> <FaLocationDot></FaLocationDot> {location}</p>
                        <p className='text-xl flex items-center gap-1 font-medium text-[#757575] mt-4'><AiOutlineDollar></AiOutlineDollar>{salary}</p>
                    </div>
                    <div className="card-actions" >
                        <Link to={`/job/${id}`}>
                            <button className="btn apply-btn text-white text-xl font-bold mt-4">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
FeaturedJob.propTypes = {
    job: PropTypes.object
}

export default FeaturedJob;