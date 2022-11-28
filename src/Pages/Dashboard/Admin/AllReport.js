import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loading from "../../Shared/Loading/Loading";

const AllReport = () => {

    const {
        data: reports = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["reports"],
        queryFn: async () => {
            const res = await fetch("https://ast-12-sellcell-server.vercel.app
                / reports");
            const data = await res.json();
            return data;
        },
    });


    // console.log(report);

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDelete = (id) => {

        const proceed = window.confirm("You want to Delete This Report ?");

        if (proceed) {
            fetch(`https://ast-12-sellcell-server.vercel.app
/reports/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success("Successfully Deleted..!!");
                        refetch();
                    }
                });
        }
    };




    const handelDeleteProduct = (report) => {

        const proceed = window.confirm(
            `Are you sure, you want to delete report + this product ?`
        );

        if (proceed) {
            fetch(`https://ast-12-sellcell-server.vercel.app
/reports/${report._id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {


                        fetch(`https://ast-12-sellcell-server.vercel.app
/products/${report.productId}`, {
                            method: 'DELETE',

                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.deletedCount) {
                                    toast.success('report + product delete successFully')
                                    refetch()
                                }
                            })
                    }
                    // console.log(data)

                })
        }


    }


    console.log(reports)



    if (isLoading) {
        return <Loading></Loading>
    }





    return (

        <div className="overflow-x-auto w-full">

            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Report Message</th>
                        <th>Delete Report</th>
                        <th>Delete Report + Product</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        reports.map((report, idx) =>
                            <tr key={idx}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={report.productImage} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>


                                <td>{report.productName}</td>
                                <td>{report.reporter}</td>
                                <td>{report.reportMessage}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(report._id)}
                                        className="text-white bg-red-600 hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-info font-medium rounded-lg  px-5 py-2.5 text-center duration-1000 hover:px-10 hover:font-semibold"
                                    >
                                        Delete
                                    </button>
                                </td>

                                <td><button onClick={() => handelDeleteProduct(report)} className="text-white bg-red-600 hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-info font-medium rounded-lg  px-5 py-2.5 text-center duration-1000 hover:px-10 hover:font-semibold">Delete R+P</button></td>

                            </tr>
                        )}

                </tbody>

            </table>

        </div>
    );
};

export default AllReport;



