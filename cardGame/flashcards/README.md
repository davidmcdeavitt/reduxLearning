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
                            <h4 key={stack.id}>{stack.title}</h4>
                        )
                    })
                }
            </div>
        )
    }
}

export default StackList;
``` 
What we are doing is we are importing that JSON file and using the map function to, in effect, cycle through it. This will create a loop that captures the title as you can see from the h4 tag. You also must use a key value to identify the uniqure objects from the list.

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

Step 7: We now need to add routing to the app. This way we can add a way to filter to different components within the app. 
Routing is the most tricy part of a React app as any small miscues can cause the whole app to fail. In order to set up our router in the index.js file we need to make some structural changes:
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
        </Switch>
    </BrowserRouter>,
document.getElementById('root'));
```
I gave the entire code from the file so that you can make sure this is correct. The DOM should not have changed in what is shown. First, we imported BrowserRouter, Switch, and Route from React-DOM. This allows us to use these built in function to help us route our app. We willl render a bowser component instead of the actual app. The first child is the Swich Component that we use to handle different routes. Then finally the Route component, which will not have any children. The Route maps the path using the path function which is the same as saying URL. The using component to determine which component we will be displayed. Next, we add exact in order to say we will only show the component on this component and can not use this again.

Step 8: Adding different components using Route is pretty straight forward in that you just need to create the component, then name it on the router. Please create a component in a new Stack.js file within the components folder:
```
import React, {Component} from 'react';

class Stack extends Component {
    render() {
        return(
            <div>
                <h3>Title</h3>
            </div>
        )
    }
}

export default Stack;
```
Then import it into the index.js file and name a route for it like so:
```
import Stack from './components/Stack';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/stack' component={Stack} />
        </Switch>
    </BrowserRouter>,
document.getElementById('root'));
```

As you can see we now have a route that points to the Stack component. but the problem is we need to type it into the URL to reach the new route. Luckily there is a function built into React that allows is to effectively quarterback the routes. Luckily we have the Link function built in.

Step 9: We now need to add the link home button into the stack.js file:
```
import { Link } from 'react-router-dom';

class Stack extends Component {
    render() {
        return(
            <div>
                <Link to='/'>Home</Link>
                <h3>Title</h3>
            </div>
        )
    }
}
```
As you can see creating links is relatively easy but now we need to add links for our flashcard collections:
```
import { Link } from 'react-router-dom';

class StackList extends Component {
    render() {
        return (
            <div>
                {
                    stacks.map(stack => {
                        return (
                            <Link to='/stack'>
                            <h4 key={stack.id}>{stack.title}</h4>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}
```
As you can see, again, the link component is very easy and understandable to use. It allows us to navigate between many sources of information in our app.

Next we add Redux so we can set context for the stack and add way more functionality to use. First, we need to create a store, but the first thing we need to do before creating a store is to create reducers. Reducers are mechanisms which describe how to actually update the store. We then use actions to pass data into the store. 

Step 10: We need to firs create an action.js file within the src file. Then create an index.js within the action file. Within the index.js file we need to enter the text that allows us to create the action:
```
export function setStack(stack) {
    return {
        type:   'SET_STACK',
        stack:  stack  
    };
}
```
The action is the one that sets the stack. It is an object that sets the type to set against the object. It is normal to use a string in redux in string case which is all uppercase. Then the action will create relevent data, therefore we make a stack key. The next question is what data we will input into the function. So this stack data will come from any component to tell the action how to set the data. By wrapping it in a function we allow it to become a parameter called stack and the value of the stack key will be the stack variable we set as the stack function, which any component can use to set the data. Since we use the action variable once we just return the object whose type is setstack and whose data is stack. We export it as a shared function by putting export at the beginning of the function. A reducer creates an object that the state will use to represent data in the reducer.

Step 11: We will create a reducer that has the function stack that represents the reducer. We need to return an object that is variable in any instance. write the following into a new index.js file in a new reducers file:
```
import { SET_STACK } from '../actions';

function stack(state = {}, action) {
    switch (action.type) {
        case SET_STACK:
            return action.stack;
        default:
            return state;
    }
}
export default stack;
```
First we create a fuction that lives within the reducer and has two parameters. One is the state itself which we set as an object to handle any changes from the input. The second is action which calls the action that represents the different types of actions we can run when we creat, edit, delete. In order to switch between these we create a switch function which takes the action and sets it against different types of defined actions which affect our incoming data. In our default we will return what is currently held in the state object. We now want to set it to our setstate from the action object. When the object comes in from the action container we see that the data comes in as stack. So when the action type is stack we want to have the action of retuning that stack data rence return actio.stack; We then change the SETStack to a variable amout decided by the action container. to do this we change the string to a variable and make the following changes to the index.js file in the actions folder:
```
export const SET_STACK = 'SET_STACK';

export function setStack(stack) {
    return {
        type:   SET_STACK,
        stack:  stack  
    };
}
```
Step 12: In order to create our store we now need to bring in the store funtion to our top level index.js file:
```
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import Stack from './components/Stack';
import { setStack } from './actions';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(setStack({ id: 0, title: 'example', cards: [] }));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/stack' component={Stack} />
            </Switch>
        </BrowserRouter>
    </Provider>,
document.getElementById('root'));
```
The Provider wraps our store and gives it the store binding. We import our rootReducer from the reducers and setStack from actions. We also import createStore from redux. Finally we can see how we are building our store. 
Then test this in the console and make sure the output from the all our files is collecting in the store and returning an object with our dummy info inside it:
```
store Object
    cards:  []
    id:     0
    title:  "example"
```
Step 13: We now need to set the stack and binding action in our store. First we need to make some changes to our StackList file:
```
import {setStack} from '../actions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
```
we then need to connect our component at the bottom of the file and map the props that are coming in and give it the property of dispatch. Dispatch is a built in fuction within redux that allows you to change the state within the strore. the bindactioncreators will then bind similar key objects together but bound with a dispatch so they they might be invoked directly:so we are binding lists of similar object from our Stacklist using the setstack action creator. So as such:
```
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setStack }, dispatch);
}
const connectComponent = connect(null, mapDispatchToProps);

export default connectComponent(StackList);
```
This descibes what components of the store we want to listen to. Right now we use null because we are getting our information from a JSON file we connect using null. We need a way of expressing this in our render function. Therefor we have to describe the cureent state of a prop with a similar id as such:
```
console.log('stacklist props', this.props);

        return (
            <div>
                {
                    stacks.map(stack => {
                        return (
                            <Link 
                            to='/stack' 
                            key={stack.id}
                            onClick={() => this.props.setStack(stack)} 
                            >
                            <h4>{stack.title}</h4>
                            </Link>
                        )
                    })
                }
            </div>
        )
```


