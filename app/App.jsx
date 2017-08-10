import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data:
            [
                {
                    "id":1,
                    "name":"Foo",
                    "age":"20"
                },
                {
                    "id":2,
                    "name":"Bar",
                    "age":"30"
                },		
                {
                    "id":3,
                    "name":"Baz",
                    "age":"40"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <Header></Header>
                <Table data = {this.state.data}></Table>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        const myStyle = {
            fontSize: 100,
            color: '#FF0000'
        }
        return (
            <h1 style={myStyle}>Header</h1>
        );
    }
}

class Table extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.props.data.map((person, i) => <TableRow key = {i} data = {person}></TableRow>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}


export default App;
