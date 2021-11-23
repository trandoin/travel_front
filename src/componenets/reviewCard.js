import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const reviwerNameStyle={
  fontWeight:'700',
  fontSize:"20px",
}

const reviewDatesStyle={
  fontWeight:'400',
  fontSize:"16px",
  opacity:'60%'
}

const reviewTextStyle={
  fontWeight:'400',
  fontSize:"16px",
  margin:'10px'
}

export default function ReviewCard() {
  return (
    <Grid
      item
      container
      md={5}
      direction="column"
      style={{ margin: "3vh 5vh", padding: "1vh" }}
    >
      <Grid item container direction="row">
        <Avatar alt="Remy Sharp" sx={{ width: 70, height: 70 , fontSize:'20px'}} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            marginLeft: "1vw",
          }}
        >
          <Typography style={reviwerNameStyle}>
            Remy Sharp
          </Typography>
          <Typography style={reviewDatesStyle}>May 2021</Typography>
        </div>
      </Grid>
      <Grid item>
        <Typography style={reviewTextStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          porttitor metus, et luctus dui. Quisque quis sollicitudin lectus.
          Suspendisse pulvinar magna non efficitur tempor. Sed in libero
          porttitor, rhoncus lorem vitae, convallis turpis.
        </Typography>
      </Grid>
    </Grid>
  );
}
