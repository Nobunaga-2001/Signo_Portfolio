import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook

const Admin = () => {
    const navigate = useNavigate();  // Initialize the navigate function

    const goToAdmin = () => {
        navigate('/');  // This will navigate to the /admin page
    };

    return (
        <div>
            <h1>Admin Page</h1>
            <p>Welcome to the main page of the appsda!</p>
            <button onClick={goToAdmin}>Go to Main Page</button>  {/* Button that triggers navigation */}
        </div>
    );
};

export default Admin;
