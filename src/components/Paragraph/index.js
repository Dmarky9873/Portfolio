import './index.scss';


const Paragraph = ({ children, textAlign }) => {

    return (
        <div className={`paragraph-container ${textAlign}`}>
            <p>{children}</p>
        </div>
    )
}

export default Paragraph;