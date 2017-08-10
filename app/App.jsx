import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
              <Header></Header>
              <Content></Content>
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

class Content extends React.Component {
    render() {
        const myStyle = {
            fontSize: 100,
            color: '#FF0000'
        };
        return (
            <div>
              <h2>Content</h2>
              <p>This is the content</p>
              {/* This is my comment */}
            </div>
        );
    }
}

export default App;
