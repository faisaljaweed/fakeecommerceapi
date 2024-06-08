import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function CardDescriptions() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProduct = () => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div>
      <button onClick={fetchProduct}>Load Product</button>
      {loading && <div>Loading...</div>}
      {product && (
        <div className="flex ">
          <div className="flex justify-center items-center w-1/2">
            <img src={product.image} alt={product.title} className=" h-48 md:h-96" />
          </div>
          <div className="flex flex-col w-1/2 md:flex md:justify-start items-start">
            <h1 className="text-3xl font-bold pt-3 ">{product.category}</h1>
            <h2 className=" text-3xl leading-9 pt-4 md:text-start">{product.title}</h2>
            <p className="font-extrabold text-[18px] pt-3 ">Rating : {product.rating.rate}  </p>
            <p className="pt-4 md:text-start">{product.description}</p>
            <div className="flex gap-4 pt-5">
            <button className="bg-blue-700 text-white hover:bg-red-700 text-[15px]">Add to Cart</button>
            <button className="bg-blue-700 text-white hover:bg-red-700 text-[15px]">Go to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
