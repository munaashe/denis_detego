import React, { useState, useEffect } from 'react';

const Image = () => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        async function fetchImage() {
            try {
                const response = await fetch('https://source.unsplash.com/random/800x600/?mars');
                if (response.ok) {
                    setImageUrl(response.url);
                } else {
                    throw new Error('Failed to fetch image');
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchImage();
    }, []);
    return (
        <div className='flex flex-col items-center justify-center'>
            {imageUrl ? (
                <div className="w-full">
                    <img src={imageUrl} alt="Mars" className="w-full h-auto max-h-[600px]" />
                </div>
            ) : (
                <ImageLoader />
            )}
        </div>
    )
}

export default Image

const ImageLoader = () => (
    <div className="flex justify-center items-center h-screen bg-gray-200 w-full"
        id='Image Loading Skeleton'
    >
        <div className="border-4 border-gray-400 border-opacity-50 animate-pulse"></div>
        <div className="border-4 border-gray-400 border-opacity-50 animate-pulse"></div>
        <div className="border-4 border-gray-400 border-opacity-50 animate-pulse"></div>
        <div className="border-4 border-gray-400 border-opacity-50 animate-pulse"></div>
        <div className="border-4 border-gray-400 border-opacity-50 animate-pulse"></div>
        <div className="border-4 border-gray-400 border-opacity-50 animate-pulse"></div>
        <div className="border-4 border-gray-400 border-opacity-50 animate-pulse"></div>
        <div className="border-4 border-gray-400 border-opacity-50 animate-pulse"></div>
        <div className="border-4 border-gray-400 border-opacity-50 animate-pulse"></div>
        <div className="border-4 border-gray-400 border-opacity-50 animate-pulse"></div>
        <div className="border-4 border-gray-400 border-opacity-50 animate-pulse"></div>
        <div className="border-4 border-gray-400 border-opacity-50 animate-pulse"></div>
        <div className="border-4 border-gray-400 border-opacity-50 animate-pulse"></div>
        <div className="border-4 border-gray-400 border-opacity-50 animate-pulse"></div>
        <div className="border-4 border-gray-400 border-opacity-50 animate-pulse"></div>
        <div className="border-4 border-gray-400 border-opacity-50 animate-pulse"></div>
        <div className="border-4 border-gray-400 border-opacity-50 animate-pulse"></div>
    </div>
)