import React from 'react'

class Listagem extends React.Component {
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

                </table>
            </div>
        )
    }
}

export default Listagem