import Banner from "../../Component/Banner/Banner";
import FeaturedJobs from "../../Component/FeaturedJobs/FeaturedJobs";
import JobCategory from "../../Component/JobCategory/JobCategory";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
        </>
    );
};

export default Home;