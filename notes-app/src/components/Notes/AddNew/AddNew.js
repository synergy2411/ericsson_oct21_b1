import NewNoteForm from "./NewNoteForm";

const AddNew = (props) => {

    return (
        <div className="row">
            <div className="col-10 offset-1">
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-center">Add New Note</h3>
                    </div>
                    <div className="card-body">
                        {/* Form Here */}
                        <NewNoteForm />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AddNew;