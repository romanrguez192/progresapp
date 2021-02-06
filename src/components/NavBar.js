import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import NotificationsIcon from "@material-ui/icons/Notifications";
import LogOutIcon from "@material-ui/icons/ExitToApp";
import { ReactComponent as BarLogo } from "../assets/bar-logo.svg";
import BarDarkMode from "@material-ui/icons/Brightness4";
import DrawerIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import "./NavBar.css";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";
import EditT from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import Background from "../assets/background-appbar.svg";
import ExitIcon from "@material-ui/icons/ExitToApp";
import Assignment from "@material-ui/icons/Assignment"
import { signOut } from "../firebase/functions";
import Badge from '@material-ui/core/Badge';

function NavBar() {
  const [open, setOpen] = useState(false);

  const numerito = 7;

  const handleDrawer = () => {
    setOpen(true);
  };
  return (
    <>
      <AppBar
        position="sticky"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            style={{ marginRight: "5pt" }}
            onClick={handleDrawer}
          >
            <DrawerIcon />
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            component={Link}
            to="/"
          >
            <SvgIcon>
              <BarLogo />
            </SvgIcon>
          </IconButton>
          <Link className="titulo" to="/">
            ProgresApp
          </Link>
          <div className="separador1" />
          <IconButton color="inherit">
            <Badge color="secondary" badgeContent={numerito} invisible={false}>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <SvgIcon>
              <BarDarkMode />
            </SvgIcon>
          </IconButton>
          <IconButton color="inherit">
            <LogOutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <div className="drawerContainer">
          <ListItem
            button
            component={Link}
            to="/"
            onClick={() => setOpen(false)}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/tutorias"
            onClick={() => setOpen(false)}
          >
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary="Buscar Tutorías" />
          </ListItem>
          <div className="tutorOptions">
            <Divider style={{ marginTop: "5pt", marginBottom: "5pt" }} />
            {/* TODO: Colocar un condicional para que solo le aparezca a tutores */}
            <ListItem
              button
              component={Link}
              to="/mistutorias"
              onClick={() => setOpen(false)}
            >
              <ListItemIcon>
                {/* TODO: Cambiar iconooooooo */}
                <Assignment />
              </ListItemIcon>
              <ListItemText primary="Mis Tutorías" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <EditT />
              </ListItemIcon>
              <ListItemText primary="Editar Tutorías" />
            </ListItem>
          </div>
          <div className="cDrawerBottom">
            <ListItem button onClick={() => signOut()}>
              <ListItemIcon>
                <ExitIcon />
              </ListItemIcon>
              <ListItemText primary="Cerrar Sesión" />
            </ListItem>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default NavBar;
