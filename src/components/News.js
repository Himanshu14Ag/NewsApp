import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
  // static defaultProps = {
  //   country: "in",
  //   pageSize: 10,
  //   category: "general",
  // };
  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  // };

  const News = (props) =>{

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, settotalResults] = useState(0)



  const captializeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // constructor(props) {
  //   super(props);
    // console.log("Constructor of News.js");

    // this.state = {
    //   articles: [],
    //   loading: true,
    //   page: 1,
    //   totalResults: 0,
    // };
  // }


  // async updateNews() {
    const updateNews = async () =>{
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);

    setArticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setLoading(false);

    // this.setState({
    //   loading: false,
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    // });
    props.setProgress(100);
  }


  useEffect(() => {
    document.title = `${captializeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line
  }, [])
  

  // async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ecf62522aec4427aa94d41d97adbbc95&page=1&pageSize=      ${props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false});
  //   this.updateNews();
  // }

  // handleNextClick = async ()=>{

  // if(this.state.page + 1 > Math.ceil(this.state.totalResults/10)){

  // }

  // else{
  // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ecf62522aec4427aa94d41d97adbbc95&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
  // this.setState({loading: true});
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // console.log(parsedData);

  // this.setState({
  //   loading: false,
  //   page: this.state.page + 1,
  //   articles: parsedData.articles
  // })
  // }
  // this.setState({page: this.state.page + 1});
  // this.updateNews();

  // }

  // handlePrevClick = async ()=>{
  // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ecf62522aec4427aa94d41d97adbbc95&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
  // this.setState({loading: true});
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // console.log(parsedData);

  // this.setState({
  //   loading: false,
  //   page: this.state.page - 1,
  //   articles: parsedData.articles
  // })
  //   this.setState({page: this.state.page - 1});
  //   this.updateNews();
  // }


// **********************function based*******************************************************

  // const handlePrevClick = ()=>{
  //   // this.setState({page: this.state.page - 1});
  //   setPage(page-1);
  //   updateNews();
  // }

  // const handleNextClick = ()=>{
  //   // this.setState({page: this.state.page + 1});
  //   setPage(page+1)
  //   updateNews();
  // }

// **********************function based*******************************************************


  const fetchMoreData = async () => {
    // this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    // this.setState({
       // articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    // });
  };

  // render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "90px 0 40px" }}>
          News Monkey - Top Headlines in{" "}
          {captializeFirstLetter(props.category)} Category
        </h1>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {
                /*   !this.state.loading &&    */
                articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        title={element.title /*?element.title.slice(0,40):""*/}
                        description={
                          element.description /*?element.description.slice(0.80):""*/
                        }
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })
              }
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} className="btn btn-dark mx-3" onClick={this.handleNextClick}>Next &rarr;</button>
          </div> */}
      </>
    );
  // }
}

News.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
};


export default News;
