import React from 'react';

const Sectiontitle = ({heading ,subHeading}) => {
    return (
        <div className='my-5 text-center w-4/12 mx-auto'>
            <p className='text-yellow-500'>---{subHeading }---</p>
            <h2 className='  py-3 my-4 border-y-4 uppercase text-4xl'>{heading}</h2>
            
        </div>
    );
};

export default Sectiontitle;