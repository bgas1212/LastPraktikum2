const url = `http://localhost:3000/dataMakanan`;

const HandleApi = {
  async put(data3) {
    console.log(data3);
    return fetch(`${url}/${data3.id}`, {
      method: "PUT",
      body: JSON.stringify(data3),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res)
      .catch((error) => {
        console.log("log client error" + error);
        throw new Error("there was an error, please re-try");
      });
  },

  async delete(id) {
    return fetch(`${url}/${id}`, { method: "DELETE" }).then((res) => res);
  },
};

export default HandleApi;
