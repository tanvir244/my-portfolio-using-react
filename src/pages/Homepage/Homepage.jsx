import Navbar from './Navbar';
import Banner from './Banner';

const Homepage = () => {
    return (
        <div className='bg-primary'>
            <div className='w-[90%] lg:max-w-6xl mx-auto pb-16 min-h-screen'>
                <Navbar />
                <Banner />
            </div>
        </div>
    );
};

export default Homepage;