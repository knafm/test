import React from 'react';
import logo from './logo.svg';
import Tablist from './components/tablist'
import './App.css';

function App() {
    return (
        <div className="App">
            <Tablist
                tabInfo={[
                    {name: 'test1', content: 'test 1 content'},
                    {name: 'test2', content: 'test 2 content'},
                    {name: 'test3', content: 'test 3 content'}
                ]}
            />
        </div>
    );
}

export default App;
