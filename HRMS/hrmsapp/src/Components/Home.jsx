import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet, Routes } from 'react-router-dom';
import Nav from '../Components/template/Nav';
import Aside from '../Components/template/Aside';
import Footer from '../Components/template/footer';
import axios from 'axios';

function Home() {
  const navigate = useNavigate();
  const [role, setRole] = useState(null); // null initially
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem('user');

    if (!userData) {
      navigate('/');
      return;
    }

    const fetchData = async () => {
      try {
        const userObj = JSON.parse(userData);
        const uid = userObj.id;

        const res = await axios.get(`http://localhost:5000/role_permision?empid=${uid}`);
        userObj.roledata = res.data[0];
        setRole(userObj);
      } catch (err) {
        console.error('Error fetching role data:', err);
        navigate('/'); // fallback redirect
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Nav />
      <div className="container-fluid d-flex">
        <Aside userData={role} />

        <div className="container p-5 m-5">
          <Routes>{/* Add routes if needed */}</Routes>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
