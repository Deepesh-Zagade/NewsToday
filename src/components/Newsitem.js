import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title,description,imgurl,newsurl} = this.props
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imgurl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title.slice(0,45)}</h5>
                            <p className="card-text">{description.slice(0,88)}...</p>
                            <a href={newsurl} target = "_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
