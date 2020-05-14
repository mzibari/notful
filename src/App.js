import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Note from './note/note'
import store from './dummy-store';
import FolderPage from './folderPage/FolderPage';
import HomePage from './HomePage/HomePage';
import Navi from './navi/Navi';
import './App.css';

const notes = store.notes.map(note => {
  return (
    <div className="single__note">
      <h3>{note.name}</h3>
      <div>
        <span>Modified {note.modified}</span>
        <button>Delete</button>
      </div>
    </div>
  )
});

const folders = store.folders.map(folder => {
  return (
    <Link to="" className="single__folder">{folder.name}</Link>
  )
});


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Navi} />
        <Route path="/" render={(props) => <HomePage {...props}folders={folders} notes={notes}/>} />
        <Route path="/note" render={(props) => <Note {...props}note={store.notes[1]} folder={store.folders.find(folder => folder.id === store.notes[1].folderId)}/>} />
      </BrowserRouter>
    )
  }
}
/* <Note note={store.notes[1]} folder={store.folders.find(folder => folder.id === store.notes[1].folderId)} /> */

export default App;