import React, { useState, useRef, useEffect } from 'react';

interface CarouselProps {
    images: string[];
    width: number;
    height: number;
    autoPlay?: boolean;
    interval?: number;
}

const RpCarousel: React.FC<CarouselProps> = ({ images, width, height, autoPlay = false, interval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        if (autoPlay) {
            timeoutRef.current = setTimeout(() => {
                setCurrentIndex((currentIndex + 1) % images.length);
            }, interval);
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [autoPlay, currentIndex, images.length, interval]);

    const handlePreviousClick = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const containerStyle = {
        position: 'relative',
        width: `${width}px`,
        height: `${height}px`,
        overflow: 'hidden',
    } as React.CSSProperties;

    const imageStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        transition: 'opacity 0.5s ease',
        opacity: 0,
    } as React.CSSProperties;

    imageStyle.opacity = currentIndex === 0 ? 1 : 0;

    return (
        <div style={containerStyle} className='bg-black'>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    style={{ ...imageStyle, opacity: currentIndex === index ? 1 : 0 }}
                />
            ))}
            <button className="btn  bg-primary absolute bottom-1/2 left-0 flex" disabled={currentIndex === 0} onClick={handlePreviousClick}>
                <svg  className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3230" width="20" height="20"><path d="M658.29178 1003.504117l223.006914 0L398.119373 520.342595 881.298746 0 658.291782 0 175.112507 520.342595 658.29178 1003.504117z" p-id="3231"></path></svg>
            </button>
            <button className="btn  bg-primary absolute bottom-1/2 right-0 flex" disabled={currentIndex === images.length - 1} onClick={handleNextClick}>
                <svg  className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3090" width="20" height="20"><path d="M881.298746 520.342595 398.119373 0 175.112486 0 658.29178 520.342595 175.112507 1003.504117l223.006914 0L881.298746 520.342595z" p-id="3091"></path></svg>
            </button>
        </div>
    );
};

export default RpCarousel;
