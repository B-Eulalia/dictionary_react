import React, { useState} from "react";
function SearchWord({list}) {
  let dictionary = list;
  const [searchWord, setSearchWord] = useState(''); 
  const WordSearch = (e) => {
    e.preventDefault();
    for (let i = 0; i < dictionary.length; ++i) {
      if (dictionary[i].addWord=== searchWord) {
        document.getElementById('mess').innerHTML = "Word exist in the dictionary";
        break;
      } else {
        document.getElementById('mess').innerHTML  = "Word dont exist in the dictionary";
        }
      }
    }
    return <form onSubmit={WordSearch}>Look for the word
    <input name ='searchWord' value ={searchWord} onChange={(e) => setSearchWord(e.target.value)}/>
    <button> Search </button>
    <p id = "mess"></p>
    </form>
}
export default SearchWord;
