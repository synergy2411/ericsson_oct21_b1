import PropTypes from 'prop-types';

const NoteDate = props => {
    let month = props.date.toLocaleString('en-US', {month : 'long'})
    let day = props.date.toLocaleString('en-US', {day : 'numeric'})
    let year = props.date.getFullYear()

    return (
        <p>Created At : {month} {day}, {year}</p>
    )
}

NoteDate.propTypes = {
    date : PropTypes.instanceOf(Date)
}
export default NoteDate;
