import DeleteIcon from '@mui/icons-material/Delete';

function WorkoutList(props) {
    return (
        <section>
            <li>{props.name}</li>
            <DeleteIcon onClick={() => {console.log("clicked")}}/>
        </section>
    );
}

export default WorkoutList;