

import { useState } from 'react';
import QrReader from 'react-qr-reader';


const QRScanner = () => {
    const [webcamResult, setWebcamResult] = useState()
    const [userData, setUserData] = useState(null);

    const webcamError = (error)=>{
        console.log(error);
    }
    // const webcamScan =(result)=>{
    //     if(result){
    //         setWebcamResult(result)
    //     }
    // }

    const webcamScan = async (email) => {
        if (email) {
            setWebcamResult(email);
            // Fetch data from Node.js backend using the scanned email
            try {
            // const response = await axios.get(http://localhost:5000/auth/${email});
            // setUserData(response.data);

            fetch(`http://localhost:5000/auth/${email}`,{
            method: "GET",
            })
            .then(res => res.json())
            .then((data) =>{
                setUserData(data);
                console.log(userData);
            });

            } catch (error) {
                console.error(error);
                // Handle error fetching data
            }
        }
    }

    return (
        <div className="w-fit h-[89vh] mx-auto  py-10">
            <div className="card w-96 bg-white text-primary-content shadow-md border border-orange-400">
            <div className="card-body">
                 <QrReader
                delay ={200}
                onError = {webcamError}
                onScan = {webcamScan}
                legacyMode = {false}
                facingMode ={'user'}
                />

                <p className=' text-black '>
                {
                    userData && <p>Email: <span>{webcamResult}</span></p>
                }
                </p>
                <div className="card-actions justify-center ">
                {userData && (
                    <div className='text-black flex gap-6 justify-start'>
                        <div className='border-2 border-orange-300 p-3 rounded-lg'>
                        <h2 className='font-semibold w-fit border-b border-orange-300 pb-1 mb-1'>User Data</h2>
                        <div className='flex gap-2 items-center'>
                        {userData?.myUserData[0]?.displayName} <span className='text-green-500'>{userData?.myUserData[0]?.status}</span>
                        </div>
                        </div>
                        {/* Display other fetched data properties */}
                        <div className='border-2 border-orange-300 p-3 rounded-lg'>
                        <h2 className='font-semibold w-fit border-b border-orange-300 pb-1'>Registrations</h2>

                            {
                                userData?.myRegistrationsData?.map(myRegistration =>
                                     <div key={myRegistration._id} className='flex gap-2 items-center'>
                                        {myRegistration?.event} <span className='text-green-500'>{myRegistration.registrationStatus}</span>

                                     </div>)
                            }

                        </div>
                    </div>
                )}


                </div>
            </div>
            </div>
        </div>
    );
};

export default QRScanner;