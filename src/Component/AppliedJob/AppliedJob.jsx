import PropTypes from 'prop-types';
import { AiOutlineDollar } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const AppliedJob = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className='grid grid-cols-4 items-center mb-12 border border-gray-300 p-5 rounded-lg'>
            <div className=''>
                <img className='px-8 rounded-lg py-10 w-[150px] h-[120px] bg-gray-100' src={logo} alt="" />
            </div>
            <div className='col-span-2'>
                <h1 className="text-lg font-bold">{job_title}</h1>
                <h1 className="text-base font-medium">{company_name}</h1>
                <div>
                    <button className='text-bast font-extrabold border mr-5 px-6 gradientText py-2 rounded-lg border-blue-400'>{remote_or_onsite}</button>
                    <button className='text-bast font-extrabold border mr-5 px-6 mt-4 gradientText py-2 rounded-lg border-blue-400'>{job_type}</button>
                </div>
                <div className='flex gap-5'>
                    <p className='text-base flex items-center gap-1 font-medium text-[#757575] mt-4'> <FaLocationDot></FaLocationDot> {location}</p>
                    <p className='text-base flex items-center gap-1 font-medium text-[#757575] mt-4'><AiOutlineDollar></AiOutlineDollar>{salary}</p>
                </div>
            </div>
            <div >
                <Link to={`/job/${id}`}>
                    <button className="btn apply-btn text-white text-xl font-bold mt-4">View Details</button>
                </Link>
            </div>

        </div>
    );
};
AppliedJob.propTypes = {
    job: PropTypes.object
}
export default AppliedJob;