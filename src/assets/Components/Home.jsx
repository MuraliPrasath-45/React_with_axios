import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
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

  //fetching Mock-Api data using axios get method
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get("https://65d5835b3f1ab8c63437249d.mockapi.io/api/UserData")
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="container h-100">
        <h6 className="h6 text-end py-2">
          <span className="bg-warning px-2 rounded">
            Total User Profiles : {userData.length || 0}
          </span>
        </h6>
        <h1 className="h1 text-center text-light mb-5">
          <span className="px-5 border border-white">User Profiles</span>
          
          </h1>
        {
          userData.length === 0 ? <h3 className="text-white text-center my-5 ">There is no user profiles.<br/> Add new user to see profiles !</h3> :
          <div className="row d-flex justify-content-center h-100">
          {userData.map((item, index) => {
            return (
              <div
                key={index}
                className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4"
              >
                <div className="card text-center h-100">
                  {loading ? (
                    <div className="py-5">Loading...</div>
                  ) : (
                    <>
                      <div className="card-header">
                        <h5 className="card-title">{item.name}</h5>
                      </div>
                      <div className="card-body">
                        <img
                          src="../Images/dummy_profile_img1.jpg"
                          className="img-fluid"
                          alt="profileImg"
                        />
                      </div>
                      <div className="card-footer">
                        <button
                          className="btn btn-warning"
                          onClick={() => navigate(`/userProfile/${item.id}`)}
                        >
                          View Profile
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        }
        
      </div>
    </>
  );
};

export default Home;
