import { useState } from "react";
import React from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";

export default function Searchbar({ onSubmit }) {
  const [imageName, setImageName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (imageName.trim() === "") {
      // toast.dark("🦄Please enter search query", {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
      alert("Please enter search query");
      return;
    }

    onSubmit(imageName);
    reset(); 
  };

  const reset = () => {
    setImageName("");
  };

  return (
    <header className='Searchbar'>
      <form className='SearchForm' onSubmit={handleSubmit}>
        <button type='submit' className='SearchForm-button'></button>
        <input
          value={imageName}
          onChange={(event) =>
            setImageName(event.currentTarget.value.toLowerCase())
          }
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
