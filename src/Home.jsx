import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div data-aos="fade-up" className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Welcome</h1>
                        <p className="py-6">
                            Welcome to our cricket blog page, the ultimate destination for all cricket enthusiasts and fans of the gentleman's game. We are thrilled to have you here, ready to embark on a thrilling journey through the world of cricket.

                            Our blog is dedicated to providing you with the latest updates, in-depth analysis, and captivating stories from the cricketing realm. Whether you're interested in international matches, domestic leagues, player profiles, or the history and evolution of the sport, we have you covered.

                        </p>
                        <Link to={"/blog"}><button className="btn btn-primary">See Blogs</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;