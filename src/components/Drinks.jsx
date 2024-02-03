import React, { useEffect, useState } from 'react'
import { DataMinuman } from '../assets/DataMakanan'
import HandleApi2 from './HandleApi2'
import DrinksCard from './DrinksCard'

export default function Drinks() {
    const [data2, setData2] = useState()

    useEffect(()=>{
        fetch("http://localhost:3000/dataMinuman")
        .then((res)=>res.json())
        .then((result)=>setData2(result))
    },[])

    const delete2 = (id) => {
        setData2(data2.filter((item) => item.id !== id));
        HandleApi2.delete(id);
      };
    


  return (
    <div>
        <h1>Drinks</h1>
        <ul>
            {data2?.map((item,i) =>(

                <DrinksCard key={i} {...{item,delete2,data2,setData2}}/>
                // <li key={i}>
                // <img src={item.gambar} alt="" />
                //     <p>{item.nama}</p>
                //     <p>{item.harga}</p>
                //     <button onClick={() => delete2(item.id)}>delete</button>
                // </li>
            ))}
        </ul>
    </div>
  )
}
