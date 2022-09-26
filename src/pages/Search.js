import React from 'react';
import search from '../assets/images/icons/magnifying-glass.png';

const Search = () => {
    return (
        <div className='hidden'>
            {/* <!-- The button to open modal --> */}
            <div className='flex justify-center mb-5 mt-10'>
            <input className="w-1/3 bg-green-100 rounded-lg px-10 py-3" type="text" placeholder='Search Here' />
            <label htmlFor="my-modal-3" className=" p-3 rounded-lg bg-green-600 hover:no ">
                <img src={search} alt="" />
            </label>
            </div>

            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                   
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                </div>
            </div>
        </div >
    );
};

export default Search;