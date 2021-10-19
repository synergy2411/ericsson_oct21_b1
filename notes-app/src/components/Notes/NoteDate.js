const NoteDate = props => {
    let month = props.date.toLocaleString('en-US', {month : 'long'})
    let day = props.date.toLocaleString('en-US', {day : 'numeric'})
    let year = props.date.getFullYear()

    return (
        <p>Created At : {month} {day}, {year}</p>
    )
}

export default NoteDate;
