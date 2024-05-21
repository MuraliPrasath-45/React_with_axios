import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  //Giving a loading text until the mockAPI fetch data
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  //using useState hook to store fetched data
  const [userData, setUserData] = useState([]);

  //using useNavigate hook to navigate between one component to another component
  const navigate = useNavigate();

  //deleting using axios delete
  const [deletedUserData, setDeletedUserData] = useState([]);
  const handleDelete = async (id) => {
    await axios
      .delete(`https://65d5835b3f1ab8c63437249d.mockapi.io/api/UserData/${id}`)
      .then((res) => {
        setDeletedUserData(res.data);
        alert(`${res.data.name}'s user data deleted Successfully !`);
      })
      .catch((err) => console.log(err));
  };

  //fetching Mock-Api data using axios
  useEffect(() => {
    fetchData();
  }, [deletedUserData]);

  const fetchData = async () => {
    await axios
      .get("https://65d5835b3f1ab8c63437249d.mockapi.io/api/UserData")
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  };

  //loading text display until fetch done
  if (loading) {
    return <div className="py-5 text-center text-light">Loading...</div>;
  }
  return (
    <>
      <div className="container">
        <div className="table-responsive">
          {userData.length === 0 ? (
            <h3 className="text-white text-center my-5 ">
              There is no user profiles.
              <br /> Add new user to see profiles !
            </h3>
          ) : (
            <>
              <table className="table table-hover text-center mt-4">
                <thead>
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Company Name</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((item, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{++index}</th>
                        <td>{item.name}</td>
                        <td>{item.companyName}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => navigate(`/editUser/${item.id}`)}
                          >
                            Update
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(item.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="text-center my-4">
                <button
                  className="btn btn-success"
                  onClick={() => navigate("/addUser")}
                >
                  Add User
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Users;
