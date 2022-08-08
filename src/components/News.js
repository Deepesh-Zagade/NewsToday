import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'

export class News extends Component {

    
    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=aed587c050be4bbbb70d7d31c1fc6331&page=1&pageSize=${this.props.pagesize}`
        let data = await fetch(url)
        this.setState({loading: true})
        let parseddata = await data.json()
        this.setState({articles: parseddata.articles,
                       totalresults: parseddata.totalResults,
                       loading: false})
    }
    // Function to go on next page -changed the state over here.
    nextPage =async ()=>{
        
        this.setState({loading: true})
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=aed587c050be4bbbb70d7d31c1fc6331&page=${this.state.page+1}&pageSize=${this.props.pagesize}`
        let data = await fetch(url)
        let parseddata = await data.json()
        this.setState({
            page: this.state.page +1,
            articles: parseddata.articles,
            loading: false
        })
    }
    
    // Function to go on previous page -changed the state over here.
    previousPage =async ()=>{
        this.setState({loading: true})
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=aed587c050be4bbbb70d7d31c1fc6331&page=${this.state.page-1}&pageSize=${this.props.pagesize}`
        let data = await fetch(url)
        let parseddata = await data.json()
        this.setState({
            page: this.state.page -1,
            articles: parseddata.articles,
            loading: false
        })
    }

    render() {
        return (
            <div>
                <div className="container my-3">
                    <h1 className='my-3 text-center'>News Today - Fastest News Network</h1>
                    {this.state.loading&&<Spinner />}
                    <div className="row my-3">  
                        {!this.state.loading&&this.state.articles.map((element)=>{
                            return <div className="col-md-4 my-3" key={element.url} >
                            <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} imgurl={element.urlToImage?element.urlToImage:"https://images.news18.com/ibnlive/uploads/2022/08/untitled-design-2022-08-06t220634.879-165980389216x9.jpg"} 
                            newsurl = {element.url} />
                        </div>
                        })}
                    </div>
                    <div className="container d-flex justify-content-between">
                    <button type="button" onClick={this.previousPage} disabled={this.state.page===1} className="btn btn-dark">&larr; Previous</button>
                    <button type="button" onClick={this.nextPage} disabled={this.state.page+1>Math.ceil(this.state.totalresults/this.props.pagesize)} className="btn btn-dark">Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News