import './App.css';
import AddList from './component/AddList';
import Title from './component/title';
import SearchWord from './component/SerchWord';
import React, {useState} from 'react';

function App () {
  const [list, setList] = useState([]);
return (
<p>
  <Title />
  <AddList list = {list} setList={setList}/>
  <SearchWord  list = {list}/>
  </p>
  );
}
export default App;
