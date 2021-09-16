import './App.css';
import React, { useState } from 'react'
import CepConsultado from './CepConsultado.js'

function App() {
  const [evento, setEvento] = useState([])

  //função para impedir que o formulário faça reload da página
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("Recebendo Nome: " + data.nome)
    console.log("Recebendo CEP: " + data.cep)

    fetch(`https://3011-pink-lemur-nlrnp12d.ws-us15.gitpod.io?cep=${data.cep}`)
    .then(response => response.json())
    .then(data =>{
      const array = convertToArray(data);
      console.log("Array: ", array);
      setEvento(array)
    })
    .catch(error => console.error)
  }

  const convertToArray = (obj) =>{
    console.log("Formato Json: ", obj);
    const arr = [obj]
    console.log("Formato Array: ", arr);
    return arr
  }

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="form-group" id="nome">
          <input type="text" name="nome" className="form-control" placeholder="Nome"></input>
        </div>
        <div className="form-group" id="cep">
          <input type="text" name="cep" className="form-control" placeholder="Cep" ></input>
        </div>
        <button type="submit" className="btn btn-success" id="btn-consultar">Consultar CEP</button>
      </form>
      <CepConsultado evento = {evento}></CepConsultado>
    </div>
  );
}

export default App;
