import { Grid } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";



export default function RatingIndicator(props) {

  const percentageCal = (ratingsOfFive) => {
      return ratingsOfFive*20
  }
  return (
    <Grid item container md={3.5} direction="column" margin='1vw' fontSize='20px'>
      <Grid item container direction="row" justifyContent="space-between">
        <Grid>{props.name}</Grid>
        <Grid fontWeight='bolder'>{props.value}</Grid>
      </Grid>
      <Grid margin='1vw'>
        <LinearProgress variant="determinate" color='secondary' value={percentageCal(props.value)} />
      </Grid>
    </Grid>
  );
}
