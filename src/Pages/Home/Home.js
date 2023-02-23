import React, { useEffect, useState } from 'react';
import Advertise from './Advertise';
import Category from './Category';
import Slider from './Slider';
import Subscribe from './Subscribe';

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';


const Home = () => {

    const [loading, setLoading] = useState(true);

    const [advertises, setData] = useState([]);

    // fetch by axios

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://ast-12-sellcell-server.vercel.app/myAdvertise/true',
            );
            setData(result.data);

            setLoading(false)
        };
        fetchData();

    }, []);

    console.log(advertises)



    return (
        <div>
            <Slider></Slider>
            <Category></Category>


            {/* <Advertise></Advertise> */}

            {
                advertises?.length > 0 &&
                <Advertise
                    advertises={advertises}
                    loading={loading}
                ></Advertise>
            }

            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;


