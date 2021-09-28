import { useState } from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "next/link";
import { Grid } from "@material-ui/core";
import Image from "next/image";
import { Skeleton } from "@material-ui/lab";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import logo from "../../public/images/logoJamafud.png";
import { useAuth } from "../contexts/auth";
import { useRouter } from "next/router";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  if (user === null) {
    return <Skeleton variant="rect" width={100} height={30} />;
  }
  
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    //router.replace("/");
  };

  const handleProfile = () => {
    router.push("/profile");
  };
  
  return (
    <div
      style={{
        backgroundColor: "#FB93FF",
        border: "black solid 2px",
        lineHeight: 0,
        padding: 10,
      }}
    >
      <Grid container>
        <Grid item xs={3}>
          <div style={{ marginLeft: 135 }}>
            <Image
              src={logo}
              width={200}
              height={50}
              placeholder="blur"
              alt="Not found image"
            />
          </div>
        </Grid>
        <Grid item xs={8} style={{ padding: 10 }}>
          <h1 style={{ marginLeft: 325 }}>Jamafud</h1>

          <div
            style={{
              display: "flex",
              marginLeft: 245,
              marginTop: 5,
            }}
          >
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/" onClick={handleClick}>
                Home
              </Link>
              {!user && (
                <Link color="inherit" href="/singIn" onClick={handleClick}>
                  Iniciar Sesión
                </Link>
              )}
              <Link
                color="textPrimary"
                href="/foodEcuador"
                onClick={handleClick}
                aria-current="page"
              >
                Comida Nacional
              </Link>
            </Breadcrumbs>
          </div>
        </Grid>
        {user && (
          <Grid item xs={1} style={{ textAlign: "center" }}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleProfile}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleLogout}>
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href="/">Cerrar sesión</a>
              </MenuItem>
            </Menu>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
