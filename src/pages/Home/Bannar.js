import React from 'react';
import { Link } from 'react-router-dom';
import library from '../../assets/images/About/library.gif'

const Bannar = () => {
    return (
        <div className=" bg-[#77D67E]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="sm:w-1/2" >
                    <img src={library} className="mx-auto justify-item-end sm:mt-0" alt='' />
                </div>
                <div className='sm:w-1/2 px-2 md:ml-5'>
                    <h1 className="text-5xl font-bold text-white ">Get Your Favourite Book</h1>
                    <p className="py-6">Learn to code with our beginer friendly learning environment. We provide simple and easy tuturials. You can learn different lamguages, frameworks and can compile your code on our platform. We prodive A to Z guidelines of MERN developers.</p>
                    <Link to='/about' className="bg-[#E0A82E] p-3 text-white rounded-lg font-bold">Know More</Link>

                </div>
            </div>
        </div>
    );
};

export default Bannar;