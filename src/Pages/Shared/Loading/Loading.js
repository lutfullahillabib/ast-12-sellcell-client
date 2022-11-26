import React from 'react';

import { Dna, Circles } from 'react-loader-spinner'

const Loading = () => {
    return (
        <section>
            <div className='flex justify-center items-center flex-col my-10 '>
                <Dna
                    visible={true}
                    height="300"
                    width="300"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                />

                <Circles
                    height="200"
                    width="200"
                    color="#19D3AE"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        </section>
    );
};

export default Loading;


