import { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import Loader from "react-loader-spinner";
import imagesAPI from "./Components/Services/imagesAPI";
import "./App.css";
import Searchbar from "./Components/SearchBar/Searchbar";
import Button from "./Components/Button/Button";
import ImageGallery from "./Components/ImageGallery/ImageGallery.jsx";

export default class App extends Component {
  state = {
    imageName: "",
    images: [],
    error: null,
    status: "idle",
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    const { page, imageName } = this.state;

    if (prevState.imageName !== imageName) {
      this.setState({ images: [] });
      this.fetchImagesOnClick(imageName, page);
    }

    if (prevState.page !== page && page !== 1) {
      this.fetchImagesOnClick(imageName, page);
    }
  }

  fetchImagesOnClick = (imageName, page) => {
    this.setState({ status: "pending" });

    imagesAPI
      .fetchImages(imageName, page)
      .then((newImages) => {
        if (newImages.total === 0) {
          this.setState({ status: "idle" });
          toast.error("Sorry, something went wrong");
        } else {
          this.setState(({ images }) => ({
            images: [...images, ...newImages.hits],
            status: "resolved",
          }));
          page > 1 &&
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            });
          return;
        }
        return Promise.reject(new Error("Invalid request"));
      })
      .catch((error) => this.setState({ error, status: "rejected" }));
  };

  onClickLoadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  handleFormSubmit = (value) => {
    this.setState({ imageName: value });
  };

  render() {
    const { status, images } = this.state;

    switch (status) {
      case "idle":
        return (
          <div>
            <Searchbar onSubmit={this.handleFormSubmit} />
          </div>
        );

      case "pending":
        return (
          <div>
            <Searchbar onSubmit={this.handleFormSubmit} />
            <ImageGallery images={images} />
            <Loader />
            <Button onClick={this.onClickLoadMore} />
          </div>
        );
      case "resolved":
        return (
          <div>
            <Searchbar onSubmit={this.handleFormSubmit} />
            <ImageGallery images={images} />
            <Button onClick={this.onClickLoadMore} />
          </div>
        );

      default:
        return (
          <div>
            <Searchbar onSubmit={this.handleFormSubmit} />
            <ToastContainer
              position='top-center'
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        );
    }
  }
}
