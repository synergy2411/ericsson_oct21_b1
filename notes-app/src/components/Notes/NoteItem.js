const NoteItem = (props) => {
  return (
    <div>
      <div>
        <h2>Title : {props.title} </h2>
      </div>
      <div>
        <p>Amount : {props.amount} </p>
      </div>
    </div>
  );
};

export default NoteItem;
