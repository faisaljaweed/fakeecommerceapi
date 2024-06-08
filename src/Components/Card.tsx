import { Link,  } from 'react-router-dom';

type PropsType = {
  api: any[];
};

export default function Card(props: PropsType) {
  const { api } = props;


  return (
    <div className="md:grid md:grid-cols-3 md:gap-5 lg:grid lg:grid-cols-5">
      {api.map((item, index) => (
        <div key={index} className="shadow-xl shadow-black mt-6 md:w-64">
          <div className="flex justify-center items-center p-10">
            <img src={item.image} alt="clothes image" className="h-36 w-36" />
          </div>
          <h2 className="font-bold pl-8 pr-8 pt-3">{item.title}</h2>
          <p className="pt-3 font-extrabold text-[30px]">{item.price}</p>
          <div className="pt-3 pb-3">
     <Link to={`/${item.id}`}>      <button
              className="bg-blue-700 text-white hover:bg-red-700"
            >
              Buy Now
            </button>
            </Link> 
          </div>
        </div>
      ))}
    </div>
  );
}
