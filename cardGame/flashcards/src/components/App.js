import React, {Component} from 'react';
import StackList from './StackList';

class App extends Component {
    render() {
        return (
            <div>
                <h2>Flashcards</h2>
                <hr/>
                <StackList />
            </div>
        )
    }
}

export default App;