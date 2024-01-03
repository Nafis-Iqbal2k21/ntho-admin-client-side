import {  useLoaderData } from "react-router-dom";

const RegistrationsStatus = () => {
    const allRegistrations = useLoaderData();
    const registrations = allRegistrations.myRegistrationsData;





    return (
        <div className="max-w-[1200px] mx-auto px-3 xl:px-0 h-[88vh] ">

            <div className="flex flex-col md:flex-row gap-3 py-10">



            <div className="overflow-x-auto bg-white p-5 h-fit">
                <table className="table border-collapse border border-gray-300">
                    {/* head */}
                    <thead>
                    <tr >
                        <th></th>
                        <th className="text-lg border border-gray-300 px-4 py-2">Name</th>
                        <th className="text-lg border border-gray-300 px-4 py-2">Status</th>
                        <th className="text-lg border border-gray-300 px-4 py-2">Email </th>
                        <th className="text-lg border border-gray-300 px-4 py-2">Event </th>
                        <th className="text-lg border border-gray-300 px-4 py-2">Sender Number </th>
                        <th className="text-lg border border-gray-300 px-4 py-2">Translation ID </th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            registrations?.map((registration, index) => <tr key={registration._id}>
                                <th className="text-base border border-gray-300 px-4 py-2">{index + 1} </th>
                                <td className="text-base border border-gray-300 px-4 py-2">{registration?.displayName}</td>
                                <td className="text-base border border-gray-300 px-4 py-2"><div className="flex items-center gap-1  font-semibold">
                                    {
                                    registration?.registrationStatus == "approved" ?
                                    <p className="text-green-400">Approved</p>
                                    :
                                    <p className="text-orange-400">Pending</p>
                                    }

                                    </div></td>
                                <td className="text-base border border-gray-300 px-4 py-2">{registration.userEmail}</td>

                                <td className="text-base border border-gray-300 px-4 py-2">{registration.event}</td>

                                <td className="text-base border border-gray-300 px-4 py-2 text-orange-600">{registration.senderNumber}</td>

                                <td className="text-base border border-gray-300 px-4 py-2 text-orange-600">{registration.translationID}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            </div>



        </div>
    );
};

export default RegistrationsStatus;