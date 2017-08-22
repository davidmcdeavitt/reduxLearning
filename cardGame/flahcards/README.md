## Prerequisites
start a new direct ory and enter into the directory (cd directory)

You must first run create-react-app <desiredName>

You need some code editor (Atom, Etc.)

You need node installed on your computer previously

npm install react-bootstrap react-router-dom redux react-redux --save

remove the entire SRC file

## Step By Step Instructions

Step 1: Remove the current SRC file and replace it with an empty one. Create a components and data folders within it. Create an index.js file within the SRC file. Within the components file create an App.js and StackList.js files. within the data file create a stacks.json file.

Step 2: Within the App.js file place the following component information:
```
import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <h2>Flashcards</h2>
            </div>
        )
    }
}

export default App;
```
As you can see we are just displaying a header for the DOM

Step 3: We now need to set up our index.js file:
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));
```

As you can see we are rendering the App.js file on the DOM within the 'root' div on the public index.html file. 

Step 4: Now is when we need to import all our information to be used to create the cards list- aka the dummy information:
```
[
    {
      "title": "State Abbreviations",
      "id": 0,
      "cards": [
        { "id": 0, "prompt": "Arizona", "answer": "AR" },
        { "id": 1, "prompt": "California", "answer": "CA" },
        { "id": 2, "prompt": "Hawaii", "answer": "HI" },
        { "id": 3, "prompt": "Kansas", "answer": "KS" },
        { "id": 4, "prompt": "Maryland", "answer": "MD" },
        { "id": 5, "prompt": "Michigan", "answer": "MI" },
        { "id": 6, "prompt": "New York", "answer": "NY" },
        { "id": 7, "prompt": "Oregon", "answer": "OR" },
        { "id": 8, "prompt": "Texas", "answer": "TX" },
        { "id": 9, "prompt": "Washington", "answer": "WA" }
      ]
    },
    {
      "title": "Computer Science Basics",
      "id": 1,
      "cards": [
        { "id": 0, "prompt": "A single line of code", "answer": "statement" },
        { "id": 1, "prompt": "A word reserved to store data", "answer": "variable" },
        { "id": 2, "prompt": "A storage component to serve requests faster", "answer": "cache" },
        { "id": 3, "prompt": "Where data is stored", "answer": "memory" },
        { "id": 4, "prompt": "8 bits =", "answer": "1 byte" },
        { "id": 5, "prompt": "A way to repeat code a certain number of times", "answer": "loop" },
        { "id": 6, "prompt": "UI stands for", "answer": "User Interface" }
      ]
    }
  ]
```
make sure this goes into our stacks.json file

Step 5: We now need to discuss the StackList file and how this information will be produced within a component. First put the following code in the Stacklist.js file:
```
import React, {Component} from 'react';
import stacks from '../data/stacks.json';

class Stacklist extends Component {
    render() {
        return (
            <div>
                {
                    stacks.map(stack => {
                        return (
                            <h4>{stack.title}</h4>
                        )
                    })
                }
            </div>
        )
    }
}

export default StackList;
``` 
What we are doing is we are importing that JSON file and using the map function to, in effect, cycle through it. This will create a loop that captures the title as you can see from the h4 tag.

Step 6: We now need to make changes to App.js in order to import the StackList:
```
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
```
So now we have imported the stacklist and displated it within the return div. You should see the titles now displayed on the DOM.
