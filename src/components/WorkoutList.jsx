import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

function WorkoutList(props) {

    const style = {
        textDecoration: 'none',
        color: 'white'
    }

    return (
        <section>
            <li>
                <Link to="/details" style={style} state={{name: props.name}}>
                    {props.name}
                </Link>
            </li>
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