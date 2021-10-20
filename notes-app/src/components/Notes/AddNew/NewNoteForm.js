import { useState } from 'react';

const NewNoteForm = (props) => {

    // const [enteredNote, setEnteredNote] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // })

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setEnteredNote({
    //     ...enteredNote,
    //     enteredTitle : event.target.value
    // })
    // setEnteredNote((prevNote) => {
    //     return {...enteredNote, enteredTitle : event.target.value}
    // })
    // console.log(enteredNote)
  };
  const amountChangeHandler = event => {
      setEnteredAmount(event.target.value);
    // setEnteredNote({
    //     ...enteredNote,
    //     enteredAmount : event.target.value
    // })
  }
  const dateChangeHandler = event =>{
      setEnteredDate(event.target.value);
    // setEnteredNote({
    //     ...enteredNote,
    //     enteredDate : event.target.value
    // })
  }

  const submitHandler = event => {
      event.preventDefault();
      // console.log(enteredTitle, enteredAmount, enteredDate)
      props.onAdd(enteredTitle, enteredAmount, enteredDate)
    // console.log(enteredNote)
  }

   return (
    <div className="row">
      <div className="col-10 offset-1">
        <form onSubmit={submitHandler}>
          {/* Title */}
          <div className="form-group">
            <label htmlFor="title">Title : </label>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={titleChangeHandler}
            />
          </div>
          {/* Amount */}
          <div className="form-group">
            <label htmlFor="amount">Amount : </label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              className="form-control"
              name="amount"
              onChange={amountChangeHandler}
            />
          </div>
          {/* Date */}
          <div className="form-group">
            <label htmlFor="date">Created At : </label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              className="form-control"
              name="date"
              onChange = {dateChangeHandler}
            />
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-6">
                <input
                  type="submit"
                  value="Add New Note"
                  className="btn btn-block btn-success btn-sm"
                />
              </div>
              <div className="col-6">
                <input
                  type="button"
                  value="Cancel"
                  className="btn btn-block btn-warning btn-sm"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewNoteForm;
