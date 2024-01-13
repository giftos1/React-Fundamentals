/* React Fundamentals*/

import './App.css'

// const title = 'React';
// const welcome = {
//     title: 'React',
//     greeting: 'Hey'
// }

// const movies = ['Avatar', 'The Matrix', 'Fast & Furious X', 'The Bible'];
const frameworks = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        nun_comments: 3,
        points: 4,
        objectID: 0
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org//',
        author: 'Dan Abramov, Andrew Clark',
        nun_comments: 2,
        points: 5,
        objectID: 1
    },
    ];
// function getTitle(title) {
//     return title;
// }

const App = () => {
    return (
        <div>
            {/*<h1>{welcome.greeting} {getTitle('React')}</h1>*/}
            <h1>Hello World</h1>
            {/* creating instances of Search component*/}
            <Search />
            <Search />
            <hr />
            {/* creating instances of Frameworks component*/}
            <Frameworks />
            <Frameworks />
        </div>
    );
}

// declaration of Search component
const Search = () => {
    const handleChange = (event) => {
        // synthetic event
        console.log(event);
        // value of target (here: input HTML element)
        console.log(event.target.value)
    }
    return (
        <div>
            <label htmlFor="search">Search: <input type="text" id="search" onChange={handleChange} onBlur={handleChange}/></label>
        </div>
    )
}


const Frameworks = () => {
    return (
        <ul>
            {frameworks.map((item) => (
                <li key={item.objectID}>
                <span>
                    <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
                </span>
                    <span>
                    {item.author}
                </span>
                    <span>
                    {item.nun_comments}
                </span>
                    <span>
                    {item.points}
                </span>
                </li>
            ))}
        </ul>
    )
}


export default App
