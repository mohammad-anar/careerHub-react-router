import PropTypes from 'prop-types';
const Category = ({category}) => {
    const {logo, category_name, availability} = category;
    return (
        <div className="p-10 primary-bg rounded-lg">
            <img className='icon-bg-gradiang p-4 rounded-lg' src={logo} alt="" />
            <h1 className="text-xl text-[#474747] mt-8 font-bold">{category_name}</h1>
            <p className="text-base text-[#A3A3A3] font-medium">{availability}</p>
        </div>
    );
};
Category.propTypes = {
    category: PropTypes.object
}

export default Category;