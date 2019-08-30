import React from 'react'

class FormCadastro extends React.Component {

    state = {
        titulo: '',
        genero: '',
        data: '',
        nota: 0
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        // evita o funcionamento padrão do método (ou seja, no evento submit, enviar o form)
        e.preventDefault();

        // declara um vetor de filmes (var: escopo de function, let: escopo de módulo)
        let filmes = []

        // verifica se existem filmes cadastrados

        if (localStorage.getItem('filmes')) {
            // converte um objeto JSON em array
            filmes = JSON.parse(localStorage.getItem("filmes"))
        }

        // adiciona ao vetor um objeto filme com seus atributos
        filmes.push({
            titulo: this.state.titulo,
            genero: this.state.genero,
            data: this.state.data,
            nota: this.state.nota
        })

        // salva em localStorage o novo conteúdo do vetor
        // converte o array em JSON
        localStorage.setItem("filmes", JSON.stringify(filmes))

        // limpa o conteúdo dos campos
        this.setState({
            titulo: '',
            genero: '',
            data: '',
            nota: 0
        })

        alert("Ok! Filme cadastrado")
    }

    render() {
        return (
            <form className="mx-3" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="input-group col-sm-6 mt-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Título:</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Título do filme" autoFocus name="titulo"
                            onChange={this.handleChange}
                            value={this.state.titulo} />
                    </div>
                    <div className="input-group col-sm-6 mt-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Gênero:</span>
                        </div>
                        <select className="form-control" name="genero" onChange={this.handleChange} value={this.state.genero}>
                            <option></option>
                            <option>Aventura</option>
                            <option>Comédia</option>
                            <option>Drama</option>
                            <option>Infantíl</option>
                            <option>Romance</option>
                            <option>Suspense</option>
                            <option>Terror</option>
                            <option>Faroeste</option>
                            <option>Fantasia</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-group col-sm-6 mt-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Data:</span>
                        </div>
                        <input type="date" className="form-control" placeholder="Data que assistiu"
                            name="data" onChange={this.handleChange} value={this.state.data} />
                    </div>
                    <div className="input-group col-sm-6 mt-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Nota:</span>
                        </div>
                        <input type="number" className="form-control" placeholder="Nota do filme"
                            name="nota" onChange={this.handleChange} value={this.state.nota} />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-danger">Enviar</button>
                            <button type="reset" className="btn btn-primary">Limpar</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default FormCadastro;