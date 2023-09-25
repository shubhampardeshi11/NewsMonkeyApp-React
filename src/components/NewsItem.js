
import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {

        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (

            <div className="card my-3">
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className="badge rounded-pill bg-danger"> {source} </span>
                </div>
                <img src={!imageUrl ? "https://bl-i.thgim.com/public/news/u2djw7/article67266141.ece/alternates/LANDSCAPE_1200/BL0409_Quantum_Second02.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text"> {description}</p>
                    <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem