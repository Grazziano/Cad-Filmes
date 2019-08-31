import React from 'react'

class Resumo extends React.Component {

    state = {
        total: 0,
        media: 0,
        generosNum: []
    }

    componentDidMount() {
        this.loadFilmes()
    }

    loadFilmes = async () => {
        const filmes = await JSON.parse(localStorage.getItem('filmes'))

        this.setState({ total: filmes.length })

        // let soma = 0;
        // filmes.map((filme) => (
        //     soma += Number(filme.nota)
        // ))

        let calcSoma = filmes.reduce((soma, filme) => {
            return soma + Number(filme.nota)
        }, 0)

        this.setState({ media: (calcSoma / filmes.length).toFixed(1) })

        let filmesGenero = filmes.reduce((todosFilmes, filme) => {
            if (filme.genero in todosFilmes) {
                todosFilmes[filme.genero]++
            } else {
                todosFilmes[filme.genero] = 1
            }

            return todosFilmes
        }, {})

        this.setState({ generosNum: filmesGenero })
    }

    render() {
        return (
            <div className="media border p-3 mx-2">
                <img src="resumo.jpg" alt="Resumo" className="mr-3 mt-3 rounded-circle" style={{ width: 80 }} />
                <div className="media-body">
                    <h4 className="text-danger">Resumo: Filmoteca</h4>
                    <h5><i>Total de Filmes: {this.state.total}</i></h5>
                    <h5><i>Média de Notas: {this.state.media}</i></h5>
                    <h5 className="text-primary">Filmes por Gênero: </h5>
                    {Object.entries(this.state.generosNum).map(([key, value]) =>
                        <h6 key={key}> {key} - {value}</h6>
                    )}
                </div>
            </div>
        )
    }
}
export default Resumo