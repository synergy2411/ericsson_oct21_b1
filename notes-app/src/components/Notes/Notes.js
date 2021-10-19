import "./Notes.css";
import NoteItem from './NoteItem';

function Notes() {
    let notes = [
        { id : 'n1', title : "Grocery", amount : 12.99, date : new Date(2021, 12, 10)},
        { id : 'n2', title : "shopping", amount : 10.99, date : new Date(2020, 10, 1)},
        { id : 'n3', title : "planting", amount : 9.99, date : new Date(2020, 1, 2)},
        { id : 'n4', title : "insurance", amount : 19.59, date : new Date(2019, 2, 9)},
    ]

  // JSX - XML Structure -> Root Element -> n Child Element
  return (
    <div>
        <NoteItem title={notes[0].title} amount={notes[0].amount}/>
        <NoteItem title={notes[1].title} amount={notes[1].amount}/>
        <NoteItem title={notes[2].title} amount={notes[2].amount}/>
        <NoteItem title={notes[3].title} amount={notes[3].amount}/>
    </div>
  );
}

export default Notes;


// Props -> React built-in functionality, immutable, way to communicate parent and child component