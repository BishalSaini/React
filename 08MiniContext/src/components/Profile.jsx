import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) {
        // Displayed when user context is empty (user is not logged in)
        return (
            <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-semibold mb-4">Please Login</h2>
            </div>
        );
    } else {
        // Displayed when user context contains user data (user is logged in)
        return (
            <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-semibold mb-4">Welcome {user.username}</h2>
            </div>
        );
    }
}

export default Profile;
