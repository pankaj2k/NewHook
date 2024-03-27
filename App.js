import React, { createContext } from 'react';
import './App.css';
import Child from './props/Child';
import ChildA from './props-drilling/ChildA';
import BookContainer from './reduxContainer/bookContainer'
import Child1 from './contextAPI/Child1';
import Comment from './useState/Comment';
import Event from './useEffect/Event';
import ComponentA from './useContext/ComponentA';

//Connect the redux
import { Provider } from 'react-redux';
import store from './reduxContainer/store';


const data1 = createContext();
const data2 = createContext();


// What is Context API
// create, Provider, Consumer
const data3 = createContext();
const data4 = createContext();

function App() {
  //This text rendering without JSX
  // return React.createElement('h1', null, 'This is normal html tag');

  // Props example
  const name = 'I am sending data form parent to child component!!!';

  const propsDrillingValue = 'Props Drilling Example!!!';
  const ContextAPIValue1 = 'Context API Example';
  const ContextAPIValue2 = 'Secound Data';

  // Created member and object
  const appName = 'React Componnet';
  const user = {
    name: 'pankaj'
  }
  const profileValid = false;


  const userName = 'Pankaj';
  const gender = 'male';

  //Function invock on button click
  function handle(){
    console.log("Button is clicked....");
  }


  return (
      //wrap all code with provider
  <Provider store={store}>
    <>
      
      {/* JSX Example  */}
      {/* <h1 className='test'>This is normal {appName}</h1>
      <h1>User name is {user.name}</h1>
      <h1>Is it profile valid {`${profileValid}`}</h1>
      <p>{profileValid ? 'profile is valid' : 'Profile is invalid'}</p>
      <button onClick={handle}>Clike Here...</button> */}

      {/* Sending data from parent to child using props */}
      {/* <Child name={name} /> */}

      {/* Props Drilling Example  */}
      <ChildA name={propsDrillingValue} />

      {/* ContextAPI Example  */}
      {/* <data3.Provider value={ContextAPIValue1}>
        <data4.Provider value={ContextAPIValue2}>
          <Child1></Child1>
        </data4.Provider>
      </data3.Provider> */}

      {/* useState Example  */}
      {/* <Comment></Comment> */}

      {/* useEffect Example  */}
      {/* <Event></Event> */}

      {/* useContext Example  */}
      {/* <data1.Provider value={userName}>
        <data2.Provider value={gender}>
          <ComponentA></ComponentA>
        </data2.Provider>
      </data1.Provider> */}



      {/* <BookContainer /> */}
    </> 
    </Provider>
  );
  
}

export default App;
export {data1, data2, data3, data4};
