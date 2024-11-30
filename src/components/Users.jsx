import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const loadedUser = useLoaderData()
    const [users ,setUsers] = useState(loadedUser)

    const handleDeleteUser = id =>{
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`http://localhost:5000/users/${id}`,{
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                  Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remaining = users.filter(user => user._id !== id)
              setUsers(remaining)
            })
            }
          });
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        users.map(user => <tr key={user._id}>
                            <th>1</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.createdAt}</td>
                            <td>
                                <button onClick={()=>handleDeleteUser(user._id)} className='btn mr-3'>X</button>
                                <button className='btn'>Edit</button>
                            </td>
                        </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default Users;