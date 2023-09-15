import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from "@mui/material";

// 09:43

import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useStyles from "./styles";
import { useState, useEffect } from "react";
import { Search, Sidebar } from "..";
import { fetchToken, moviesApi, createSessionId } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { setUser, userSelector } from "../../features/auth";
const Navbar = () => {
  const { isAuthenticated, user } = useSelector(userSelector);
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width :600px)");
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const token = localStorage.getItem("request_token");
  const sessionIdFromLocalStorage = localStorage.getItem("session_id");
  const dispath = useDispatch();
  console.log(user, "im User");
  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionIdFromLocalStorage}`
          );
          dispath(setUser(userData));
        } else {
          const sessionId = await createSessionId();
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionId}`
          );
          dispath(setUser(userData));
        }
      }
    };
    logInUser();
  }, [token]);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => setMobileOpen((prev) => !prev)}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                {" "}
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/${user.id}`}
                className={classes.linkButton}
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp; </>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAM1BMVEWVu9////+QuN6Mtt35+/2vy+bq8fjx9vqqyOXF2e2dwOHW5PKjw+Pa5vO60urN3e/i6/UJgAYJAAADoUlEQVR4nO2b3XKrMAyEjYQBG2N4/6ctlJKfloCXeDmZOXwX7UUyZWuktWSBMRcXFxcUZObfXd14G13f9y5ab85XImr7qnik6q2eqUJDXxZ/KdugJykQ364ImGn9KWuhcW0NbmsRT1gKGTYUTAz0lfDVjoQxOj1Zw76EUQRVgaZIGEUQY0JckoSicLyYCIkSiiKwJOymxB1acthkCUVhORISA3KGFJYekFAUFJNITooZSmoIcivGm0HRAEkoCoaGBtTQ5JcAhgMlIPR14bJOmz87AZOcYVglrCG/hKTK4RFGFXFpuDQ88Am5qbAGgkf1oIY+/zpIBDVEgk9+wL5pDKiBIUG22u2/lJQ6CksMSocBJgYhLUYNSIszNjmcTgvSQFHwEX0WVNWyun/EpSgOZaBOi9JlfWtIvxm8g5j0zpt3NCddooSOeEaZeiBFO44yycUUoYR6IG0hmMuQ2PkSut1n6l0JNVmBkX2zbOgH97tGRTwnvqHbJtGdMk7adCqmOz2JeF3VUSq435eff7r1Grv86WuIQkTDcpGwZphD+Pk0BtKoU9SOF17Gdhp+R0W3DDd17AoHwsBVJLjZndwS92JsV9XTTSnrqrO3G6Bz8tYu5Jw+j38rDrcIuIedqPjQNE3wcv+v7wFbDtFkkqEan29+5V9bgP6aPQ5R3/cLDSu7VPsi8sWsffnNIbiYdSsonf+zyiL+Rcr27ySrvJ7qloM1y+MX8287vGzMqzcm8X673a9bF+0Ykza6dntLLw/XuLJfK6RSH1wIQacFW7SHRCRUKwiHKhuozd7nUCOedxkOdcE75RLOgQJLM0soClgDfCy7D3xwm9zepoOXmvn8aQHufbAhfxqgYcNT3RTA7id7Zk6A2Qk+aJAGeFC2s2sfA9zBcxv1DGTXBIeagFwqa+lwByoiMu/bC9D+rYyQHIMS0UBJCzAxOGkBJQYpLaDEoOwWE8COQUpNKDnh5wxSAYaeGRusZ4B2i2QPkEHkr6kXAJOiaUiXwCgmZ5KNMnO3+0hy5wtO1xGSJ/E0qwbM+hM0AM+0o6RP2z7Bo2iJgRwIbb32cxz0hSExLu/mObgDp7XTuKDKExhldXyQIOpj966Msov+vYGKqJrYHW03qi4azTLRmd4ObPqhRlakrIe+8blmKIsONcG6LqXCqjtng1HOi4yjEFVvXd9Va1rqquud9eN36O9RLmMLPw0Nvt/fnEYI/uGTM5E7J1/54uLiP+ELbGopRY8MpBkAAAAASUVORK5CYII="
                  }
                />
              </Button>
            )}
          </div>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temoporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => {
                setMobileOpen((prev) => !prev);
              }}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant="permanent"
              open
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
