import React, { useEffect, useState } from "react";
import {toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Table = () => {
  const [userData, setUserData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  useEffect(() => {
    const getUserData = async () => {
      let fetchData = await fetch("https://jsonplaceholder.typicode.com/users");
      const res = await fetchData.json();
      setUserData(res);
    };
    getUserData();
  }, []);

  const handleCheckbox = (userId) => {
    let updatedData = userData.filter((user) => user.id !== userId);
    
    console.log(`Row ${userId} is deleted`);
   setUserData(updatedData);
//    toast.success(`🎉Row ${userId} is Deleted🎇`, {
//     position: "bottom-left",
//     autoClose: 4000, // Set the duration in milliseconds (4 seconds in this example)
//     hideProgressBar: false,
//     closeOnClick: true, // Close the toast on click
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "light",
//     transition: 'Bounce',
//   });
toast.success(`Row ${userId} is deleted 🎉`, {
    position: "top-center",
    autoClose: 5000,
  });
  
  };

  return (
     
   <>
    <div className="table-container">
    <ToastContainer/>

      <table className="custom-tabble">
        <thead>
          <tr className="table-header">
            <th>
              {/* <input type='checkbox' onChange={(e)=>handleCheckbox(e,'allSelect')}/> */}
              {null}
            </th>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id} className="table-body">
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckbox(user.id)}
                />
              </td>
              <td>{user?.id}</td>
              <td>{user?.name}</td>
              <td>{user?.username}</td>
              <td>{user?.address?.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </>
    
  );
};

export default Table;
