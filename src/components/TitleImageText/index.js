import './index.scss'

const TitleImageText = ({ children, textLocation, image, imageAlt, link, title, date }) => {
    return (
        <div className='title-image-text-container'>
            <div className='title-image-container'>
                <h3>
                    {title}
                </h3>
                <img src={image} alt={imageAlt} />
            </div>
            <p>
                {children}
            </p>
            <div className='date-container with-border'>
                <h4>
                    {date}
                </h4>
            </div>
        </div>
    )
}

export default TitleImageText;