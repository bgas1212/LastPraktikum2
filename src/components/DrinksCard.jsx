import React, { useState } from "react";
import { FormMinuman } from "./FormMinuman";

export default function DrinksCard({ item, delete1, data1, setData1 }) {
  const [hidden, setHidden] = useState(false);
  return (
    <>
      {!hidden && (
        <li>
          <img src={item.gambar} alt="" />
          <p>{item.nama}</p>
          <p>{item.harga}</p>
          <button onClick={() => setHidden(!hidden)}>edit</button>
          <button onClick={() => delete1(item.id)}>Delete</button>
        </li>
      )}
      {hidden && (
        <FormMinuman
          item={item}
          setHidden={setHidden}
          setData1={setData1}
          data1={data1}
        />
      )}
    </>
  );
}
