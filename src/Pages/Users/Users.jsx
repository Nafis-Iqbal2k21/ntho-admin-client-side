import {  Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const allUsers = useLoaderData();
    const usersData = allUsers.usersData;

    console.log(allUsers);









        const handleApproved = (userData)=>{
            fetch(`http://localhost:5000/user/approved/${userData._id}`, {
            method: 'PATCH'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
          if (data.modifiedCount) {

            Swal.fire({
              position: 'center',
              icon: 'success',
              title: `${userData?.displayName} is Approved !`,
              showConfirmButton: false,
              timer: 1500
            })
            }

            })
        }


    return (
        <div className="max-w-[1200px] mx-auto px-3 xl:px-0 h-[88vh] ">

            <div className="flex flex-col md:flex-row gap-3 py-10">


            <div className="overflow-x-auto bg-white p-5 h-fit">
                <table className="table border-collapse border border-gray-300 w-full">
                    {/* head */}
                    <thead>
                    <tr >
                        <th></th>
                        <th className="text-lg border border-gray-300 px-4 py-2">Name</th>
                        <th className="text-lg border border-gray-300 px-4 py-2">Status</th>
                        <th className="text-lg border border-gray-300 px-4 py-2">Email </th>
                        <th className="text-lg border border-gray-300 px-4 py-2">Phone</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            usersData?.map((userData, index) => <tr key={userData._id}>
                                <th className="text-base border border-gray-300 px-4 py-2">{index + 1} </th>
                                <td className="text-base border border-gray-300 px-4 py-2">{userData?.displayName}</td>
                                <td className="text-base border border-gray-300 px-4 py-2"><div className="flex items-center gap-1  font-semibold">
                                    {
                                    userData?.status == "approved" ?
                                    <p className="text-green-400">Approved</p>
                                    :
                                    <p className="text-orange-400">Pending</p>
                                    }



                                    <div className="flex flex-col gap-2">


                                        <button className='btn btn-success btn-xs text-white w-full' onClick={() => handleApproved(userData)} disabled={userData.status == "approved" ? true : false }> Approved</button>

                                    </div>
                                    </div></td>
                                <td className="text-base border border-gray-300 px-4 py-2">{userData.userEmail}</td>

                                <td className="text-base border border-gray-300 px-4 py-2">{userData.phone}</td>

                                <td className="text-base border border-gray-300 px-4 py-2">

                                    <Link to={`/user/registrations/${userData.userEmail}`} className="btn btn-primary btn-sm text-lg my-2">
                                     See Registrations
                                    </Link>

                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>

            </div>

            </div>



        </div>
    );
};

export default Users;