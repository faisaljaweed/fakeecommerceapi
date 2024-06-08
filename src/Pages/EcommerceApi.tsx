import axios from 'axios'
import Card from '../Components/Card';
import { useState } from 'react';
// import { Link } from 'react-router-dom';


export default function EcommerceApi() {
    const [api, setApi]=useState<any>([]);
    const getApi=()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
           setApi(res.data)
            console.log(res.data)}).
        catch((err)=>console.log(err));
    }
  return (
    <div>
        <button onClick={getApi}>Get Data</button>
        <Card api={api}/>
    </div>
  )
}
