import './index.scss';

const VideoText = ({ children, textLocation, videoSource }) => {
    if (textLocation === 'top') {
        return (
            <div className='video-text-container y'>
                <p>{children}</p>
                <iframe
                    src={videoSource}
                    allowfullscreen
                ></iframe>
            </div>
        );
    }
    if (textLocation === 'right') {
        return (
            <div className='video-text-container x right'>
                <iframe
                    src={videoSource}
                    allowfullscreen
                ></iframe>
                <p>{children}</p>
            </div>
        );
    }
    if (textLocation === 'left') {
        return (
            <div className='video-text-container x left'>
                <p>{children}</p>
                <iframe
                    src={videoSource}
                    allowfullscreen
                ></iframe>
            </div>
        );
    }
    if (textLocation === 'bottom') {
        return (
            <div className='video-text-container y'>
                <iframe
                    src={videoSource}
                    allowfullscreen
                ></iframe>

                <p>{children}</p>
            </div>
        );
    }

    return null; // Handles cases where textLocation is invalid
};

export default VideoText;