function NewsCard({ data }) {
    const {title, image_url, description} = data
    return (
        <div className="card-container">
            <div className="card">
                <h2>{title}</h2>
                <img src={image_url} style={{width: "100px"}} />
                <p>{description}</p>
                <p className="read-more">Read more</p>

            </div>
        </div>
    )
}
export default NewsCard;