import { Component } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Searchbar extends Component {
  state = {
    value: "",
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleNameChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.value.trim() === "") {
      toast.dark("🦄Please enter search query", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    this.props.onSubmit(this.state.value);
  };

  handleClearSearchbar = () => {
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;
    return (
      <header className='Searchbar'>
        <form className='SearchForm' onSubmit={this.handleSubmit}>
          <button type='submit' className='SearchForm-button'></button>
          <input
            value={value}
            onChange={this.handleNameChange}
            onClick={this.handleClearSearchbar}
            className='SearchForm-input'
            type='text'
            autoComplete='off'
            autoFocus
            placeholder='Search images and photos'
          />
        </form>
      </header>
    );
  }
}
