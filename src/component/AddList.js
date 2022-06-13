import React, { useState } from "react";

function AddList({list, setList})  {
  const [addWord, setAddWord] = useState(''); 
  function listWord(e) {
    e.preventDefault();
    let word = {addWord};
    if (list.length === 0) {
      setList([...list, {addWord}]);
    } else if (list.length > 0) {
      let ok = 0;
      for (let i = 0; i < list.length; ++i) {
        if (list[i].addWord === word.addWord) {
          ok = 1;
          alert("exist in list");
        }
      }
      if (ok === 0) {   
        setList([...list, {addWord}]);
    }
  } 
}
return <div>
  <form onSubmit={listWord}> Word
  <input name ='addWord' value ={addWord} onChange={(e) => setAddWord(e.target.value)}/>
  <button> Add word </button>
  </form>
  <div> {
  list.map((list)=><p>
    <li>{list.addWord}</li>
    </p>)
    }
   </div>
   </div>
  }

  export default AddList;
