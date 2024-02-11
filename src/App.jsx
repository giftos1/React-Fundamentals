/* React Fundamentals*/
import './App.css'
import React from "react";

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

    // const words = [
    //     'red',
    //     'blue',
    //     'green',
    //     'orange',
    //     'purple',
    //     'white',
    //     'violet'
    // ]

    const [searchTerm, setSearchTerm] = React.useState('React');
    // A
    const handleSearch = (event) => {
        // D
        console.log(event.target.value);
        setSearchTerm(event.target.value);

    }

    const searchedStories = stories.filter((story) => {
        return story.title.toLowerCase().includes(searchTerm.toLowerCase());
    })

    // const filteredWords = words.filter((word) => word.length >= 4);
    // console.log(filteredWords);
    return (
        <div>
            <h1>Hello World</h1>

            <Search search={searchTerm}  onSearch={handleSearch}/>

            <hr />

            <List list= {searchedStories}/>
        </div>
    );
}

// declaration of Search component
const Search = (props) => {

    return (
        <div>
            <label htmlFor="search">Search:</label>
            <input id="search" type="text" value={props.search} onChange={props.onSearch}/>
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
