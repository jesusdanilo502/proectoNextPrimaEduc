import { useState } from "react";
import { SERVER_HOST } from "../../constants";

function App() {

    // valores por defectos

  const [name, setName] = useState("el producto");
  const [price, setPrice] = useState("999");
  const [message, setMessage] = useState("");



  let handleSubmit = async (e) => {
    e.preventDefault();
    const url =  'http://localhost:3001/api/products/';
    console.log("entro aquii", name,price);
    try {
      const res = await fetch(url, {
        method: "POST", 
        body: JSON.stringify({
          name: name,
          price: price,
        }),
        headers:{
          'Content-Type': 'application/json'  
        },
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={price}
          placeholder="Precio"
          onChange={(e) => setPrice(e.target.value)}
        />
       
        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>

      </form>
    </div>
  );
}

export default App;

<style >


</style>