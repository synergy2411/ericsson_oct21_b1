import PropTypes from "prop-types";
import AuthContext from "../../store/auth-context";

const NoteDate = (props) => {
  let month = props.date.toLocaleString("en-US", { month: "long" });
  let day = props.date.toLocaleString("en-US", { day: "numeric" });
  let year = props.date.getFullYear();

  return (
    <AuthContext.Consumer>
      {(context) => {
        return (
          <div>
            <p>
              Created At : {month} {day}, {year}
            </p>
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
};

NoteDate.propTypes = {
  date: PropTypes.instanceOf(Date),
};
export default NoteDate;
