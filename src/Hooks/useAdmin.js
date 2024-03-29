import { useEffect, useState } from "react";

const useAdmin = (email) => {

    // console.log(email);

    const [isAdmin, setIsAdmin] = useState(false);

    const [isAdminLoading, setIsAdminLoading] = useState(true);


    useEffect(() => {

        if (email) {

            // console.log(email);

            fetch(`https://ast-12-sellcell-server.vercel.app/user/admin/${email}`)
                .then((res) => res.json())
                .then((data) => {
                    //   console.log(data);
                    setIsAdmin(data.isAdmin);
                    setIsAdminLoading(false);
                });

        }

    }, [email]);

    return [isAdmin, isAdminLoading];


};


export default useAdmin;


