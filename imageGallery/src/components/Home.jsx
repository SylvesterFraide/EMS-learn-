import { useEffect, useState } from "react";
import ImageCard from "./imageCard";
import Search from "./search";

function Home() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`,
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto h-screen">
      <Search searchText={(text) => setTerm(text)} />

        <hr  className="text-gray-200 my-10"/>

      {!isLoading && images.length === 0 && (
        <h3 className="text-gray-500 text-3xl font-bold item-center justify-center flex">
          No images found.
        </h3>
      )}

      {isLoading ? (
        <h3 className="text-gray-500 text-5xl font-bold item-center justify-center flex">
          Loading...
        </h3>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
