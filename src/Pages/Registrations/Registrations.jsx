import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Registrations = () => {
    const allRegistrations = useLoaderData()
    const registrationsData = allRegistrations?.registrationsData;







    const handleApproved = (registrationData)=>{
        fetch(`http://localhost:5000/registration/approved/${registrationData._id}`, {
        method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
      if (data.modifiedCount) {

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `${registrationData.event} is Approved !`,
          showConfirmButton: false,
          timer: 1500
        })
        window.location.reload()
        }

        })
    }


    return (
        <div className="max-w-[1200px] mx-auto px-3 xl:px-0 h-[88vh] ">

            <div className="flex flex-col md:flex-row gap-3 py-10">


            <div className="overflow-x-auto bg-white p-5">
                <table className="table border-collapse border border-gray-300">
                    {/* head */}
                    <thead>
                    <tr >
                        <th></th>
                        <th className="text-lg border border-gray-300 px-4 py-2">Name</th>
                        <th className="text-lg border border-gray-300 px-4 py-2">Status</th>
                        <th className="text-lg border border-gray-300 px-4 py-2">Email</th>
                        <th className="text-lg border border-gray-300 px-4 py-2">
                            Event
                        </th>
                        <th className="text-lg border border-gray-300 px-4 py-2">
                        Amount
                        </th>
                        <th className="text-lg border border-gray-300 px-4 py-2">
                        Sender Number
                        </th>
                        <th className="text-lg border border-gray-300 px-4 py-2">
                        Translation ID
                        </th>
                        <th className="text-lg border border-gray-300 px-4 py-2">
                        Refer
                        </th>
                    </tr>
                    </thead>
                    <tbody>

                        {
                            registrationsData?.map((registrationData, index) => <tr key={registrationData._id}>
                                <th className="border border-gray-300 px-4 py-2">{index +1}</th>
                                <td className="text-base border border-gray-300 px-4 py-2">{registrationData?.displayName}</td>
                                <td className="text-base border border-gray-300 px-4 py-2">



                                <div className="flex items-center gap-1  font-semibold">
                                    {registrationData?.registrationStatus == "approved" ?
                                    <p className="text-green-400">Approved</p>
                                    :
                                    <p className="text-orange-400">Pending</p>
                                }
                                    <div className="flex flex-col gap-2">

                                    <button className='btn btn-success btn-xs text-white w-full' onClick={() => handleApproved(registrationData)} disabled={registrationData.registrationStatus == "approved" ? true : false }> Approved</button>



                                    </div>
                                    </div>

                                </td>
                                <td className="text-base border border-gray-300 px-4 py-2">{registrationData?.userEmail}</td>

                                <td className="text-base border border-gray-300 px-4 py-2">{registrationData.event}</td>

                                <td className="text-base border border-gray-300 px-4 py-2">{registrationData.amountMoney}</td>

                                <td className="text-base border border-gray-300 px-4 py-2 text-orange-600">{registrationData.senderNumber}</td>

                                <td className="text-base border border-gray-300 px-4 py-2 text-orange-600">{registrationData.translationID}</td>

                                <td className="text-base border border-gray-300 px-4 py-2">{registrationData.refer}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            </div>



        </div>
    );
};

export default Registrations;
