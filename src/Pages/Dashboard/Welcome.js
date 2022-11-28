import React from 'react';

import Lottie from 'lottie-react';
import welcome from '../../assets/welcome.json'

const Welcome = () => {
    return (
        <div>
            <Lottie animationData={welcome} loop={true} className='w-[80%] mx-auto' />
        </div>
    );
};

export default Welcome;