import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import TocIcon from '@mui/icons-material/Toc';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ClosedCaptionOffIcon from '@mui/icons-material/ClosedCaptionOff';
import CopyrightIcon from '@mui/icons-material/Copyright';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TuneIcon from '@mui/icons-material/Tune';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import GridViewIcon from '@mui/icons-material/GridView';
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  };

  const drawer = (
    <div>
      <Toolbar style={{ justifyContent: "center", }}>
        <Typography style={{ textAlign: 'center', justifyContent: "center", }} align="center" variant="h4" noWrap component="h1">
          Studio
        </Typography>
      </Toolbar>

      <Divider />
      <List>
        {[
          {
            text: "Dashboard",
            icon: <GridViewIcon />,
            path: "/"
            
        },
          {
            text: "Content",
            icon: <TocIcon />,
            path: "content"
        },
          {
            text: "Analytics",
            icon: <TrendingUpIcon />,
            path: "analytics"
        },
          {
            text: "Comments",
            icon: <ChatBubbleOutlineIcon />,
            path: "comments"
        },
          {
            text: "Subtitles",
            icon: <ClosedCaptionOffIcon />,
            path: "subtitles"
        },
          {
            text: "Copyright",
            icon: <CopyrightIcon />,
            path: "copyright"
        },
          {
            text: "Earn",
            icon: <AttachMoneyIcon />,
            path: "earn"
        },
          {
            text: "Customization",
            icon: <TuneIcon />,
            path: "customization"
        },
          {
            text: "Audio library",
            icon: <AudiotrackIcon />,
            path: "audio"
        }]
        .map((item, index) => {
          const {text, icon, path} = item
          return(
          <ListItem key={text} disablePadding button component={Link} to={path}>
            <ListItemButton>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        )})}
      </List>

      <Divider />

      <List>
        {[
          {
          text: "Settings",
          icon: <SettingsIcon />,
          path: "settings"
        },
        {
          text: "Logout",
          icon: <LogoutIcon />,
          path: "logout"
        }
      ]
        .map((item, index) => {
          const {text, icon, path} = item
          return(
          <ListItem key={text} disablePadding button component={Link} to={path}>
            <ListItemButton>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
          )})}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          Channel dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Outlet />

      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;