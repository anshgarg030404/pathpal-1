import imageData from "../assets/Data.json";

export default function Page4() {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     // Assuming you may want to fetch data later, now it's static from JSON
//     setImages(imageData);
//   }, []);

  return (
    <>
      <div className="bg-slate-100 py-8 px-5">
        <h1 className="font-bold  text-center text-6xl ">Gallery</h1>
        {/* <div className="auto-cols-auto auto-rows-auto">
          {images.map((image) => (
            <div
              key={image.id}
              className="image-item bg-gray-100 p-2 rounded shadow-lg"
            >
              <img
                src={image.imageUrl}
                alt={image.description}
                className="w-full h-auto rounded"
              />
              <p className="mt-2 text-center text-gray-700">
                {image.description}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
}
