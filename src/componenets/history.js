import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const headerStyle = {
  fontWeight: "700",
  fontSize: "30px",
  textAlign: "left",
  marginLeft: "38px",
  marginTop:"10px"

};

const normalListItemFontStyle = {
  fontSize: "18px",
  fontWeight: "400",
  lineWeight: "24.55px",
  marginLeft: "38px",
};

export default function History() {
  return (
    <Grid item container direction="column">
      <Grid item container direction="column">
        <Typography style={headerStyle}>History</Typography>
      </Grid>
      <Grid item container direction="column">
        <Typography style={normalListItemFontStyle}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam ... read more...
        </Typography>
      </Grid>
    </Grid>
  );
}
