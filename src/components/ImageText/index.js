import './index.scss'

const ImageText = ({ children, textLocation, imageSource, imgAlt }) => {
    if (textLocation === 'top') {
        return (
            <div className='image-text-container y'>
                <p>{children}</p>
                <img src={imageSource} alt={imgAlt} />
            </div>
        )
    }
    if (textLocation === 'right') {
        return (
            <div className='image-text-container x right'>
                <img src={imageSource} alt={imgAlt} />
                <p>{children}</p>
            </div>
        )
    }
    if (textLocation === 'left') {
        return (
            <div className='image-text-container x left'>
                <p>{children}</p>
                <img src={imageSource} alt={imgAlt} />
            </div>
        )
    }
    if (textLocation === 'bottom') {
        return (
            <div className='image-text-container y'>
                <img src={imageSource} alt={imgAlt} />
                <p>{children}</p>
            </div>
        )
    }
}

export default ImageText;