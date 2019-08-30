import React from 'react'
import ItemLista from './ItemLista'
import './tabela.css'

class Listagem extends React.Component {

    state = {
        filmes: []
    }

    // método "especial" executado logo após a renderização da página
    componentDidMount() {
        this.loadFilmes()
    }

    // assync, await: executa em paralelo a algum outro processo
    loadFilmes = async () => {
        let dados = await JSON.parse(localStorage.getItem('filmes'))
        this.setState({ filmes: dados })

    }

    formataData = data => {
        return new Date(data).toLocaleDateString('pt-br', { timeZone: 'UTC' })
    }

    render() {
        return (
            <div className="mx-2">
                <table className="table table-sm table-stripped table-bordered table-action">
                    <thead>
                        <tr className="table-primary">
                            <th>Título</th>
                            <th>Gênero</th>
                            <th>Data</th>
                            <th>Nota</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.filmes.map((filme) => (
                            <ItemLista key={filme.titulo}
                                titulo={filme.titulo}
                                genero={filme.genero}
                                data={this.formataData(filme.data)}
                                nota={filme.nota} />
                        ))}
                    </tbody>

                </table>
            </div>
        )
    }
}

export default Listagem