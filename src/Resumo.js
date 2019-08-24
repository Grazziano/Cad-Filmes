import React from 'react'

class Resumo extends React.Component {
    render() {
        return (
            <div className="media border p-3 mx-2">
                <img src="resumo.jpg" alt="Resumo" className="mr-3 mt-3 rounded-circle" style={{ width: 80 }} />
                <div className="media-body">
                    <h4 className="text-danger">Resumo: Filmoteca</h4>
                    <h5><i>Total de Filmes: </i></h5>
                    <h5><i>Média de Notas: </i></h5>
                    <h5 className="text-primary">Filmes por Gênero: </h5>
                </div>
            </div>
        )
    }
}
export default Resumo