import React from 'react';
import PropTypes from 'prop-types';

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

                <h3>Array: {this.props.propArrays}</h3>
                <h3>Bool: {this.props.propBool ? 'True' : 'False'}</h3>
                <h3>Func: {this.props.propFunc('This is function')}</h3>
                <h3>Number: {this.props.propNumber}</h3>
                <h3>String: {this.props.propString}</h3>
                <h3>Object: {this.props.propObject.objectName1}</h3>
                <h3>Object: {this.props.propObject.objectName2}</h3>
                <h3>Object: {this.props.propObject.objectName3}</h3>
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

App.propTypes = {
    propArrays: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
    propObject: PropTypes.object
}

App.defaultProps = {
    propArrays: 'this is string',
    propBool: 'not boolean',
    propFunc: (e) => e,
    propNumber: 1,
    propString: 'String value',
    propObject: {
        objectName1: 'Object 1',
        objectName2: 'Object 2',
        objectName3: 'Object 3'
    }
}

export default App;
