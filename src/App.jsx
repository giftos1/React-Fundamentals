/* React Fundamentals*/
import './App.css'
// const title = 'React';
// const welcome = {
//     title: 'React',
//     greeting: 'Hey'
// }

// const movies = ['Avatar', 'The Matrix', 'Fast & Furious X', 'The Bible'];

// function getTitle(title) {
//     return title;
// }

const App = () => {
    const stories = [
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

    return (
        <div>
            {/*<h1>{welcome.greeting} {getTitle('React')}</h1>*/}
            <h1>Hello World</h1>
            {/* creating instances of Search component*/}
            <Search />
            <Search />
            <hr />
            {/* creating instances of Frameworks component*/}
            <List list= {stories}/>
            <List list= {stories}/>
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


const List = (props) => {
    return (
        <ul>
            {props.list.map((item) => (
               <Item key={item.objectID} item={item}/>
            ))}
        </ul>
    )
}

const Item = (props) => {
  return (
      <li>
          <span>
              <a href={props.item.url}> {props.item.title} </a>
          </span>
          <span> {props.item.author} </span>
          <span> {props.item.nun_comments} </span>
          <span> {props.item.points} </span>
      </li>
  )
}


export default App
