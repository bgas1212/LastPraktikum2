//import React, { useEffect,useState,response } from 'react'
import { useEffect, useState } from "react";
import "../assets/DataMakanan";
import { DataMakanan } from "../assets/DataMakanan";
import "./foods.css";
import HandleApi from "./HandleApi";
import { FormMakanan } from "./FormMakanan";
import FoodsCard from "./FoodsCard";

export function Foods() {
  const [data1, setData1] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/dataMakanan")
      .then((res) => res.json())
      .then((result) => setData1(result));
  }, []);

  const delete1 = (id) => {
    setData1(data1.filter((item) => item.id !== id));
    HandleApi.delete(id);
  };

  return (
    <div>
      <h1>Foods</h1>
      <ul>
        {data1?.map((item, i) => (
          // console.log(item.nama)
          <FoodsCard key={i} {...{ item, delete1, data1, setData1 }} />
        ))}
      </ul>
    </div>
  );
}
