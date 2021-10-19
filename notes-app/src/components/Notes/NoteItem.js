import NoteDate from "./NoteDate";

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

export default NoteItem;
