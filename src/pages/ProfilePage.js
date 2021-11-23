import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";

const allTabs = [
  { title: "About", is_active: false },
  { title: "Payment Info", is_active: false },
  { title: "Travel History", is_active: false },
  { title: "Business", is_active: false },
];

const drawerWidth = 300;

export default function ProfilePage() {
  const [state, setState] = React.useState(0);
  return (
    <Box
      sx={{
        display: "flex",
        position: "absolute",
        zIndex: "2",
        height: "100vh",
        width: "100vw",
      }}
    >
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Typography variant="h3" fontWeight="bold">
          Your profile
        </Typography>
        <List style={{ marginTop: "2vh" }}>
          {allTabs.map((item, index) => (
            <ListItem
              button
              key={item.title}
              style={{ marginLeft: "2vw" }}
              onClick={() => setState(index)}
            >
              {index === state ? (
                <ListItemText
                  primary={item.title}
                  style={{ color: "purple" }}
                  onClick={() => setState(index)}
                />
              ) : (
                <ListItemText primary={item.title} style={{ color: "black" }} />
              )}
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Typography>Something related to {allTabs[state].title}</Typography>
      </Box>
    </Box>
  );
}
