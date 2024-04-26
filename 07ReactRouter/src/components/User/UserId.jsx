import React from 'react';
import { useParams } from 'react-router-dom';

function UserId() {
    const { userId } = useParams();

    return (
        <div className="bg-gray-600 text-white text-3xl p-4 text-center">
            UserId: {userId}
        </div>
    );
}

export default UserId;
