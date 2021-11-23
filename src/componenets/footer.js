import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const footerItems = [
  "Safe drinking water and nothing more",
  "Public rest rooms",
  "Roads and sidewalks",
  "Connectivity",
  "Safe drinking water and nothing more",
  "Public rest rooms",
  "Roads and sidewalks",
  "Connectivity",
];

export default function Footer() {
  return (
    <Grid
      item
      md={12}
      container
      direction="row"
      border="solid"
      margin="20px auto"
      padding="65px 40px"
      style={{
        backgroundColor: "black",
        color: "whitesmoke",
        alignItems: "center",
        width:'100vw'
      }}
    >
      <Grid md={0.4}></Grid>
      <Grid item container direction="column" md={5.5}>
        <img
          alt="logo"
          src={`${process.env.PUBLIC_URL}/images/logo.jpeg`}
          width="150px"
        ></img>
        <Typography style={{ width: "60%", opacity: "60%", padding:'1vw' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </Typography>
        <Typography>
          <RoomIcon
            style={{ position: "relative", top: "5px", marginRight: "5px" }}
          />
          Ward No. 6, Nohar (Rajastha), 335523
        </Typography>
        <Typography>
          <EmailIcon
            style={{ position: "relative", top: "5px", marginRight: "5px" }}
          />
          example@email.com
        </Typography>
        <Typography>
          <LocalPhoneIcon
            style={{ position: "relative", top: "5px", marginRight: "5px" }}
          />
          +919876543210
        </Typography>
        <Grid item container direction="row" padding='10px'>
          <Grid md={0.5}></Grid>
          <FacebookIcon />
          <Grid md={0.5}></Grid>
          <InstagramIcon />
          <Grid md={0.5}></Grid>
          <TwitterIcon />
        </Grid>
        <Grid item container direction="row">
          <Grid md={0.5}></Grid>
          <Typography>© 2021, all rights reserved </Typography>
        </Grid>
      </Grid>
      <Grid item container direction="column" md={3}>
        <Typography variant="h5" fontWeight="bold">
          Important Links
        </Typography>
        {footerItems.map((item) => {
          return (
            <Link
              to={{ pathname: "/" }}
              style={{
                textDecoration: "none",
                color: "whitesmoke",
                opacity: "60%",
                marginLeft: "1vw",
              }}
            >
              <Typography variant="h6">item</Typography>
            </Link>
          );
        })}
      </Grid>
      <Grid item container direction="column" md={3}>
        <Typography variant="h5" fontWeight="bold">
          Quick Links
        </Typography>
        {footerItems.map((item) => {
          return (
            <Link
              to={{ pathname: "/" }}
              style={{
                textDecoration: "none",
                color: "whitesmoke",
                opacity: "60%",
                marginLeft: "1vw",
              }}
            >
              <Typography variant="h6">item</Typography>
            </Link>
          );
        })}
      </Grid>
      <Grid md={0.4}></Grid>
    </Grid>
  );
}
