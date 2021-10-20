import NewNoteForm from "./NewNoteForm";
import { v4 } from 'uuid';

const AddNew = (props) => {

    const onNoteAdd = (enteredTitle, enteredAmount, enteredDate) => {
        console.log("AddNew : onNoteAdd")
        // console.log(enteredTitle, enteredAmount, enteredDate)
        let note = {
            id : v4(),
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }
        console.log(note);
    }

    return (
        <div className="row">
            <div className="col-10 offset-1">
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-center">Add New Note</h3>
                    </div>
                    <div className="card-body">
                        {/* Form Here */}
                        <NewNoteForm onAdd={onNoteAdd} />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AddNew;