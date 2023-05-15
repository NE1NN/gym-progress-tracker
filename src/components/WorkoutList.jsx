import DeleteIcon from '@mui/icons-material/Delete';

function WorkoutList(props) {
    return (
        <section>
            <li>{props.name}</li>
            <DeleteIcon onClick={() => props.deleteWorkout(props.id)}/>
        </section>
    );
}

export default WorkoutList;