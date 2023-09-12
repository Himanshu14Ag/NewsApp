import React from "react";

// export class NewsItem extends Component {
  const NewsItem = (props) =>{
  // render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;

    return (
      <div>
        <div className="card my-4">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://images.moneycontrol.com/static-mcnews/2022/11/igi-airport-new-delhi-igi-airport-new-delhi-flight-travel-immigration-passport-141744327-770x433.png"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                by {author ? author : "Unknown"} <br /> updated on -{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  // }
}

export default NewsItem;
