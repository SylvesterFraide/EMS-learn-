import { useEffect, useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
      fetch(
        `https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`,
      )
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));

  }, []);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src="https://source.unsplash.com/random/400x300" alt="" />
    </div>
  );
}

export default App;
