import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/Landingpage.css';

export default function ErrorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <div id="error-page" />
  );
}
