import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {

    
    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=aed587c050be4bbbb70d7d31c1fc6331"
        let data = await fetch(url)
        let parseddata = await data.json()
        this.setState({articles: parseddata.articles})
        
    }

    render() {
        return (
            <div>
                <div className="container my-3">
                    <h1 className='my-3'>News Today - Fastest News Network</h1>
                    <div className="row my-3">
                        {this.state.articles.map((element)=>{
                            return <div className="col-md-4 my-3" key={element.url} >
                            <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} imgurl={element.urlToImage?element.urlToImage:"https://images.news18.com/ibnlive/uploads/2022/08/untitled-design-2022-08-06t220634.879-165980389216x9.jpg"} 
                            newsurl = {element.url} />
                        </div>
                        })}
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default News
