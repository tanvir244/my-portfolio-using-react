import Navbar from './Navbar';
import Banner from './Banner';

const Homepage = () => {
    return (
        <div className='min-h-screen bg-primary'>
            <div className='w-[90%] lg:max-w-6xl mx-auto'>
                <Navbar />
                <Banner />
            </div>
        </div>
    );
};

export default Homepage;