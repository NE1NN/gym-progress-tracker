import TextField from '@mui/material/TextField';

function Details(props) {
    return (
        <section className="workout-details">
            <h1>{props.name}</h1>
            <TextField 
              id="weight-form" 
              label="Weight (kg)" 
              variant="standard" 
              sx={{input: {borderBottom: "1px solid #ffffff"}}}
            />
            <TextField 
              id="reps-form" 
              label="Reps" 
              variant="standard" 
              sx={{input: {borderBottom: "1px solid #ffffff"}}}
            />
        </section>
    )
}

export default Details