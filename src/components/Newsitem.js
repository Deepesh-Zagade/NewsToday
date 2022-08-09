import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, description, imgurl, newsurl, author, date, source } = this.props
        return (
            <div>
                <div className="card" style={{ width: "20rem" }}>
                    <img src={imgurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: "90%"}} >
                            {source}
                        </span>
                        <h5 className="card-title">{title.slice(0, 45)}...</h5>
                        <p className="card-text">{description.slice(0, 88)}...</p>
                        <p className="card-text"><small className="text-muted">by {author ? author : 'Anonymous'} on {new Date(date).toLocaleString()}</small></p>
                        <a href={newsurl} target="_blank" rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
