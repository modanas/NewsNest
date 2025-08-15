import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card">
          <div className="d-flex justify-content-end position-absolute end-0">
          <span
            className="badge rounded-pill bg-danger"
            title={source} 
          >
            {source}
          </span>
          </div>

          <img
            src={
              !imageUrl
                ? "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iMBXPVGTJ0PQ/v1/1200x800.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-danger">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
              </small>
            </p>
            <a
              rel="noopener noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
