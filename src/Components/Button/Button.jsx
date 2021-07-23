function Button({ onClick }) {
  const scroll = () => {
    onClick();
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.clientHeight - 130,
        behavior: "smooth",
      });
    }, 500);
  };

  return (
    <button onClick={scroll} className='Button' type='button'>
      Load more
    </button>
  );
}

export default Button;
