import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const fontStyle = {
  fontWeight:'700',
  fontSize:'30px',
  lineHeight:'40.92px'
}

export default function SpotHeader() {
  return (
    <Grid item container style={{ marginLeft: "38px" }}>
      <Grid item container direction="column">
        <Typography style={fontStyle}>
          Laitsohpliah
        </Typography>
      </Grid>
      <Typography style={fontStyle}>
        SH 5, Khatarshnong Laitkroh, East Khasi Hills, 793111, Meghalaya, India
      </Typography>
    </Grid>
  );
}
