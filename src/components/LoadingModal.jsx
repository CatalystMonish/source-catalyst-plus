import React from 'react';

function LoadingModal({ isOpen }) {
    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-[10px] shadow-lg">
                <p className="text-label font-lexend font-label">Loading...</p>
                {/* You can replace the above line with any spinner or loading animation */}
            </div>
        </div>
    );
}

export default LoadingModal;
