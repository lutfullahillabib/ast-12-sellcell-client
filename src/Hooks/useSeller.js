import { useEffect, useState } from "react";

const useSeller = (email) => {

    // console.log(email);

    const [isSeller, setIsSeller] = useState(false);

    const [isSellerLoading, setIsSellerLoading] = useState(true);

    useEffect(() => {

        if (email) {

            // console.log(email);
            fetch(`https://ast-12-sellcell-server.vercel.app/user/seller/${email}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setIsSeller(data.isSeller);
                    setIsSellerLoading(false);
                });

        }

    }, [email]);


    return [isSeller, isSellerLoading];

};

export default useSeller;


