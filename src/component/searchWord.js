import React, { useState} from "react";
import {list_word_from_dictionary} from "./addElementList";

function SearchW() {
  let dictionary = list_word_from_dictionary;
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
export default SearchW;
