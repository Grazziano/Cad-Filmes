import React from 'react'

class FormCadastro extends React.Component {
    render() {
        return (
            <form className="mx-3">
                <div className="row">
                    <div className="input-group col-sm-6 mt-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Título:</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Título do filme" autoFocus name="titulo" />
                    </div>
                    <div className="input-group col-sm-6 mt-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Gênero:</span>
                        </div>
                        <select className="form-control" name="genero">
                            <option>Aventura</option>
                            <option>Comédia</option>
                            <option>Drama</option>
                            <option>Infantíl</option>
                            <option>Romance</option>
                            <option>Suspense</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-group col-sm-6 mt-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Data:</span>
                        </div>
                        <input type="date" className="form-control" placeholder="Data que assistiu"
                            name="data" />
                    </div>
                    <div className="input-group col-sm-6 mt-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Nota:</span>
                        </div>
                        <input type="number" className="form-control" placeholder="Nota do filme"
                            name="nota" />
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