import DeleteIcon from '@mui/icons-material/Delete';

function WorkoutList(props) {
    return (
        <section>
            <li>{props.workout}</li>
            <DeleteIcon />
        </section>
    );
}

export default WorkoutList;