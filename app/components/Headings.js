import './headings.scss'

const Headings = ({ h1Text, h2Text, position = "middle" }) => {
    return (
        <div className={`headings ${position}`}>
            <h1 className={`heading ${position}`}>{h1Text}</h1>
            <h2 className={`subheading ${position}`}>{h2Text}</h2>
        </div>
    )
}

export default Headings