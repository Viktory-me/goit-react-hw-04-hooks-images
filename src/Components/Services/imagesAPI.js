function fetchImages(name, page) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=21770810-71d636d270901957bd723d7c5&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error("Not found. Try to change name"));
  });
}

const api = { fetchImages };

export default api;
