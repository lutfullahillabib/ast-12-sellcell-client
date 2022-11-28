import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";

const ReportModal = ({ reportModalData, setReportModalData }) => {
    // console.log(reportModalData);
    const { productName, _id, productImage } = reportModalData;

    const { user } = useContext(AuthContext);

    const handleReport = (e) => {

        e.preventDefault();
        const form = e.target;
        const reportMessage = form.reportMessage.value;

        const report = {
            productName,
            reportMessage,
            reporter: user?.email,

            productId: _id,
            productImage
        };


        fetch("https://ast-12-sellcell-server.vercel.app
            / reports", {
            method: "POST",
            headers: {
            "content-type": "application/json",
        },
            body: JSON.stringify(report),
        })
            .then((res) => res.json())
    .then((data) => {
        if (data.acknowledged) {
            toast.success(`Report for '${productName}' Sent`);
            form.reset();
            setReportModalData(null);
        }

    });
    };

return (

    <div>

        <input type="checkbox" id="ReportModal" className="modal-toggle" />

        <div className="modal">

            <div className="modal-box relative text-black">

                <label
                    htmlFor="ReportModal"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                    ✕
                </label>

                <h3 className="text-lg font-bold">Report to Admin</h3>

                <form onSubmit={handleReport}>

                    <div>

                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>

                        <input
                            name="username"
                            type="text"
                            defaultValue={productName}
                            disabled
                            className="input w-full input-bordered"
                        />

                    </div>

                    <div>

                        <label className="label">
                            <span className="label-text">Message Here</span>
                        </label>

                        <textarea
                            type="tel"
                            name="reportMessage"
                            rows={3}
                            className="w-full px-4 resize-none py-3 border rounded-md dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400 "
                        ></textarea>

                    </div>

                    <input
                        className="text-white bg-info hover:bg-accent hover:text-white focus:ring-4 focus:outline-none focus:ring-info font-medium rounded-lg  px-5 py-2.5 text-center duration-1000 hover:px-10 hover:font-semibold block w-full mt-5"
                        type="submit"
                        value="Submit"
                    />

                </form>

            </div>

        </div>

    </div>


);
};

export default ReportModal;


