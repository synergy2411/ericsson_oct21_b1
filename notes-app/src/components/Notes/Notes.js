import "./Notes.css";
import NoteItem from "./NoteItem";
import AddNew from "./AddNew/AddNew";
import { useState } from "react";
import FilterYear from "./FilterYear/FilterYear";

const DUMMY_NOTES = [
  { id: "n1", title: "Grocery", amount: 12.99, date: new Date(2021, 12, 10) },
  { id: "n2", title: "shopping", amount: 10.99, date: new Date(2020, 10, 1) },
  { id: "n3", title: "planting", amount: 9.99, date: new Date(2020, 1, 2) },
  { id: "n4", title: "insurance", amount: 19.59, date: new Date(2019, 2, 9) },
];
function Notes() {
  
  const [notes, setNotes] = useState(DUMMY_NOTES)
  const [toggleForm, setToggleForm] = useState(false);
  const [selectedYear, setSelectedYear] = useState('2020')

  const onSaveNewNote = (note) => {
    // setNotes([note, ...notes])
    setNotes((prevNotes)=>{
      setToggleForm(false);
      return [note,...prevNotes]
    })
  }

  const onToggle = () => {
    setToggleForm(!toggleForm)
  }

  // let addNew = null;
  // if(toggleForm){
  //   addNew = <AddNew onSave={onSaveNewNote} />
  // }

  const onChangeFilterYear = year => {
   setSelectedYear(year)
  }
  
  let filteredNotes = notes.filter(note => note.date.getFullYear().toString() === selectedYear)

  return (
    <div>
      <div className="row">
        <div className="col-6">
          <button className="btn btn-block btn-primary" onClick={onToggle}>
            {toggleForm ? 'Hide Form' : 'Show Form'}
            </button>
        </div>
        <div className="col-6">
          <FilterYear onChangeFilterYear={onChangeFilterYear} selectedYear={selectedYear}/>
        </div>
      </div>
      {toggleForm && <AddNew onSave={onSaveNewNote} onToggle={onToggle} />}
      {/* {addNew} */}
      <br/>
      <div className="row">
        {filteredNotes.map(note => <NoteItem key={note.id} title={note.title} amount={note.amount} date={note.date} />)}
      </div>
    </div>
  );
}

export default Notes;

// Props -> React built-in functionality, immutable, way to communicate parent and child component
