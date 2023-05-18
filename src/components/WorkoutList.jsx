import DeleteIcon from '@mui/icons-material/Delete';

function WorkoutList(props) {
    return (
        <section>
            <li>{props.name}</li>
            <DeleteIcon 
                onClick={() => props.deleteWorkout(props.id)}
                onMouseEnter={e => e.target.style.color = "red"}
                onMouseLeave={e => e.target.style.color = "white"}
                style={{cursor: "pointer"}}
            />
        </section>
    );
}

export default WorkoutList;