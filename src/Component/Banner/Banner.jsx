import image from "../../assets/assets/images/user.png"

const Banner = () => {
    return (
        <div>
            <div className="primary-bg ">
                <div className="w-[80%] mx-auto flex justify-between items-end min-h-[80vh]">
                    <div className="w-2/4 pb-20 pt-5 ">
                        <h1 className=" text-[#1A1919] leading-[100px] font-bold text-7xl ">One Step <br /> Closer To Your <br /> <span className="gradientText "> Dream Job</span></h1>
                        <p className="text-lg font-normal mb-8 mt-6 text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="text-xl font-bold text-white apply-btn py-3 px-6 rounded-lg">Get Started</button>
                    </div>
                    <div className="w-2/4 flex-1">
                        <img className="lg:w-[800px] lg:h-[550px]" src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;