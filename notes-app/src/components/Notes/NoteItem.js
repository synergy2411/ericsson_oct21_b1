import React from "react";
import NoteDate from "./NoteDate";
import PropTypes from 'prop-types';

const NoteItem = (props) => {
  return (
    <div className="col-sm-6 col-md-4">
      <div className="card">
          <div className="card-header">
            <h5 className="text-center">{props.title.toUpperCase()} </h5>
          </div>
          <div className="card-body">
              <p className="lead">Amount : ${props.amount}</p>
              <NoteDate date={props.date}/>
          </div>
      </div>
    </div>
  );
};

NoteItem.propTypes = {
  title : PropTypes.string.isRequired,
  amount : PropTypes.number.isRequired,
  date : PropTypes.instanceOf(Date).isRequired
}

export default NoteItem;
