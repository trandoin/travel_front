import * as React from "react";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

// require('typeface-nunito-sans');
// import { makeStyles } from "@mui/styles";
import "./login.css";


function Copyright(props) {
  return (
    <Typography variant="body2" color="#000" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

// const useStyles = makeStyles({
//   "input-label": {
//     textOverflow: "ellipsis",
//     whiteSpace: "nowrap",
//     overflow: "hidden",
//     width: "100%",
//     color: "red",
//   },

//   input: {
//     "&::placeholder": {
//       textOverflow: "ellipsis !important",
//       color: "red",
//       FontFace: { fontFamily: "Nunito Sans" },
//     },
//   },
// });

function SignInSide() {
  // const classes = useStyles();
  const [emailErr, setEmailErr] = React.useState(false);
  const [emailHeplerText, setEmailHelperText] = React.useState("");
  const [isLoginPage, setIsLoginPage] = React.useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{
          height:"100vh",
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <CssBaseline />
        <Grid item xs={false} md={7} />
        <Grid
          item
          md={4}
          xs={10}
          component={Paper}
          elevation={6}
          square
          style={
            isLoginPage
              ? {
                  height: "auto",
                  borderRadius: "5%",
                  top: "17vh",
                  margin: "auto",
                }
              : {
                  borderRadius: "5%",
                  top: "12.5vh",
                  margin: "auto",
                }
          }
        >
          <Box
            sx={{
              my: 2,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Grid container>
              <Grid item xs>
                <Typography
                className="create"
                  variant="h3"
                  color="secondary"
                  fontFamily="Nunito Sans"
                >
                  {isLoginPage ? "Login" : "Create Account"}
                </Typography>
              </Grid>
              <Grid item>
                <Link href="#" className="underline1" onClick={() => setIsLoginPage(!isLoginPage)}>
                  <Typography className="account" color="secondary" variant="caption">
                    {isLoginPage
                      ? "Don't have account"
                      : "Already have Account"}
                  </Typography>
                  <Grid></Grid>
                  <Typography color="secondary" className="account" variant="caption">
                    {isLoginPage ? "Create One" : "Log In"}
                  </Typography>
                </Link>
              </Grid>
            </Grid>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              {isLoginPage ? (
                ""
              ) : (
                <>
                 {/* <Typography variant="paragraph" color="#000000"> */}
                 <h5 className="email ">
                    Name
                  {/* </Typography> */}
                  </h5>
                  <TextField
                    error={emailErr}
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    // label="Email Address"
                    name="text"
                    placeholder="Name"
                    //autoComplete="email"
                    // helperText={emailHeplerText}
                    autoFocus
                    // onChange={(event) => {
                    //   setEmailErr(!emailErr);
                    //   if (event.target.value)
                    //     setEmailHelperText("Not empty now");
                    //   else setEmailHelperText("");
                    // }}
                  />
                </>
              )}
              {/* <Typography variant="paragraph" color="#000000">
                Email
              </Typography> */}
              <h5 className="email for">
                Email
              </h5>
              <TextField

                error={emailErr}
                margin="normal"
                required
                fullWidth
                className="fields"
                id="email"
                // label="Email Address"
                name="email"
                placeholder="Email"
                //autoComplete="email"
                helperText={emailHeplerText}
                autoFocus
                onChange={(event) => {
                  if (event.target.value) setEmailHelperText("");
                  else {
                    setEmailErr(!emailErr);
                    setEmailHelperText("Should not be empty");
                  }
                }}
              />
              {/* <Typography variant="paragraph" color="#000000">
                Password
              </Typography> */}
              <h5 className="email">
                Password
              </h5>
              <TextField
                margin="normal"
                required
                className="fields"
                fullWidth
                name="password"
                // label="Password"
                placeholder="Password..."
                type="password"
                id="password"
                autoComplete="current-password"
                fontFamily="Nunito Sans"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Link to={{ pathname: "/home" }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 3, mb: 2 }}
                  style={{padding:"1.5rem", margin:"1rem auto", height: "4vh", borderWidth: " 50%" }}
                >
                  {/* <Typography variant="h6" style={{ fontWeight: "bold" }}> */}
                  <h5 >
                    {isLoginPage ? "Login" : "Create Account"}
                 </h5> {/* </Typography> */}
                </Button>
              </Link>
              {isLoginPage ? (
                <Grid container>
                  <Grid item xs style={{ width: "100%", textAlign: "center" }}>
                    <Link
                      href="#"
                      variant="body2"
                      style={{ textDecoration: "none" }}
                      className="account1"
                    >
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
              ) : (
                ""
              )}

              <Typography
                variant="h5"
                color="#000000"
                style={{ width: "100%", textAlign: "center" }}
                fontWeight="bold"
                className="account"
              >
                -- OR --
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="primary"
                sx={{ mt: 1, mb: 2 }}
                style={{ textAlign: "start",borderColor:"black", justifyContent: "start" }}
              >
                <GoogleIcon />
                <Typography
                  variant="h6"
                  color="#000"
                  className="google"
                >
                  {isLoginPage ? "Sign in with Google" : "Sign Up with Google"}
                </Typography>
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="primary"
                style={{ textAlign: "start",borderColor:"black", justifyContent: "start" }}
              >
                <FacebookIcon />
                <Typography
                  variant="h6"
                  color="#000"
                  className="google"
                  
                >
                  {isLoginPage
                    ? "Sign in with Facebook"
                    : "Sign Up with Facebook"}
                </Typography>
              </Button>
              <Copyright sx={{ mt: 2 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignInSide;
