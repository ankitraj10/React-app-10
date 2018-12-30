import React, { Component } from "react";
import Breed from "../services/BreedService";
import "./Breed.css";

class Breeds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      SearchsQuery: "",
      SearchQuery: "",
      showError: false
    };
  }

  componentDidMount() {
    Breed.getBreedsWithImage(data => {
      if (data) {
        this.setState({ data: data.message });
        console.log(this.state.data, "xxxx");
      }
    });
  }

  fetchBreeds(SearchQuery) {
    SearchQuery = SearchQuery ? SearchQuery : null;
    console.log(SearchQuery);
    Breed.searchBreed(SearchQuery, data => {
      if (data) {
        this.setState({ data: data.message, showError: false });
      } else {
        this.setState({ showError: true });
        console.log("error");
      }
    });
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      SearchsQuery: e.target.value
    });
    console.log(this.state.SearchQuery);
  };

  handleSearch = e => {
    e.preventDefault();
    this.state.SearchQuery = this.state.SearchsQuery;
    this.fetchBreeds(this.state.SearchQuery);
  };

  render() {
    var display;
    if (this.state.SearchQuery === "") {
      display = (
        <div>
          <nav className="navbar navbar-expand-md  navbar-dark bg-dark mb-4">
            <div className="container">
              <a href="/" className="navbar-brand">
                Home
              </a>
              <form
                className="form-inline my-2 my-lg-0"
                onClick={this.handleSearch}
              >
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={this.handleChange}
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>

          {this.state.showError ? (
            <h4 className="text-muted">Sorry Nothing Found</h4>
          ) : (
            this.state.data.map((image, index) => {
              return (
                <div
                  className="card float"
                  style={{ width: "18rem", margin: "0px 20px 20px 20px" }}
                  key={index}
                >
                  <img src={image} className="card-img-top" alt={index} />
                  <div className="card-body">
                    <h3 className="card-title" />
                    <p className="card-text">
                      <h2>{this.state.SearchsQuery}</h2>
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      );
    } else {
      display = (
        <div>
          <nav className="navbar navbar-expand-md  navbar-dark bg-dark mb-4">
            <div className="container">
              <a href="/" className="navbar-brand">
                Home
              </a>
              <form
                className="form-inline my-2 my-lg-0"
                onSubmit={this.handleSearch}
              >
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={this.handleChange}
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>

          {this.state.showError ? (
            <h4 className="text-muted">Sorry Nothing Found</h4>
          ) : (
            this.state.data.map((image, index) => {
              return (
                <div
                  className="card float"
                  style={{ width: "18rem", margin: "0px 20px 20px 20px" }}
                  key={index}
                >
                  <img src={image} className="card-img-top" alt={index} />
                  <div className="card-body">
                    <h3 className="card-title" />
                    <p className="card-text">{this.state.SearchQuery}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      );
    }
    return <div>{display}</div>;
  }
}

export default Breeds;
