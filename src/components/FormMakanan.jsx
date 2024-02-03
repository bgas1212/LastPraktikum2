import React, { useRef } from "react";
import HandleApi from "./HandleApi";

export const FormMakanan = ({ item, setHidden, setData1, data1 }) => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { [0]: id, [1]: name, [2]: harga } = formRef.current;

    if (name.value.length < 4) return;
    console.log(item);

    const currentData = {};
    currentData.id = id.value;
    currentData.gambar = item.gambar;
    currentData.nama = name.value;
    currentData.harga = harga.value;

    HandleApi.put(currentData).then((res) => console.log(res));
    setHidden(false);
    setData1(data1.map((p) => (p.id == currentData.id ? currentData : p)));
  };

  console.log(item.harga);

  return (
    <form className="input-group vertical" ref={formRef}>
      <input type="hidden" value={item.id} />
      <label htmlFor="name">nama minuman</label>
      <input
        type="text"
        name="name"
        placeholder="nama"
        defaultValue={item.nama}
      />

      <label htmlFor="budget">harga produk</label>
      <input
        type="text"
        name="budget"
        // placeholder="harga"
        defaultValue={item.harga}
      />
      <div className="input-group">
        <button className="primary bordered medium" onClick={handleSubmit}>
          Save
        </button>
        <span />
        <button
          type="button"
          className="danger bordered medium"
          onClick={() => setHidden(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
