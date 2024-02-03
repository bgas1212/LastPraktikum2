const url = `http://localhost:3000/dataMinuman`;

const HandleApi2 ={
    
 async put(data4) {
        return fetch(`${url}/${data4.id}`, {
          method: "PUT",
          body: JSON.stringify(data4),
          headers: { "Content-type": "application/json" },
        })
          .then((res) => res)
          .catch((error) => {
            console.log("log client error" + error);
            throw new Error("there was an error, please re-try");
          });
          },
    
    async delete(id)  {
        return fetch(`${url}/${id}`,{method: "DELETE"}).then(res => res)
    }    
}

export default HandleApi2