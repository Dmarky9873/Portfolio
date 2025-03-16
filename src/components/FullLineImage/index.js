import './index.scss'

const FullLineImage = ({ imageSource }) => {
    return (
        <>
            <div className='full-line-image-container'>
                <img src={imageSource} alt='Full line' />
            </div>
        </>
    )
}

export default FullLineImage