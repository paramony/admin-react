import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Alert } from '../../utils/alert';

const Logout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loginToken = JSON.parse(localStorage.getItem('loginToken'));
    axios
      .get('http://127.0.0.1:8000/api/auth/logout', {
        headers: {
          Authorization: `Bearer ${loginToken.token}`,
        },
      })
      .then((res) => {
        if (res.status == 200) {
          localStorage.removeItem('loginToken');
        } else {
          Alert('متاسفم...!', res.data.message, 'error');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        // Alert('متاسفم...!', 'متاسفانه مشکلی از سمت سرور رخ داده', 'error');
      });
  }, []);
  return (
    <>
      {loading ? (
        <h1 className="text-center waiting_center">لطفا صبر کنید...</h1>
      ) : (
        <Navigate to="/auth/login" />
      )}
    </>
  );
};

export default Logout;
