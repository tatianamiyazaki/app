import './App.css';

function App() {
  //função para impedir que o formulário faça reload da página
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("Recebendo Nome: " + data.nome)
    console.log("Recebendo CEP: " + data.cep)

    fetch(`http://localhost:3011/?cep=${data.cep}`)
    .then(response => response.json())
    .then(console.log)
    .catch(error => console.error)
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
    </div>
  );
}

export default App;
