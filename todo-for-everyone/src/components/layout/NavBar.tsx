import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authState } from 'store/atoms';
import SideBarItem from './SideBarItem';
import { signOut } from 'firebase/auth';
import { auth } from 'config/firebaseConfig';
import NavBarItem from './NavBarItem';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export default function NavBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [loginState, setLoginState] = useRecoilState(authState);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSignOutClick = async () => {
    await signOut(auth);
    setLoginState({ uid: '', isLogined: false, displayName: '' });
    navigate('/signin');
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        component={Link}
        to="/"
        variant="h6"
        sx={{
          my: 2,
          display: 'block',
          textDecoration: 'none',
          boxShadow: 'none',
          color: '#000',
        }}>
        Todo App
      </Typography>
      <Divider />
      <List>
        {loginState.isLogined ? (
          <ListItem
            component="button"
            onClick={handleSignOutClick}
            disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary="SignOut" />
            </ListItemButton>
          </ListItem>
        ) : (
          <>
            <SideBarItem name={'SignIn'} href={'/signin'} />
            <SideBarItem name={'SignUp'} href={'/signup'} />
          </>
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              textDecoration: 'none',
              boxShadow: 'none',
              color: '#fff',
            }}>
            Todo App
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {loginState.isLogined ? (
              <>
                <Button onClick={handleSignOutClick} sx={{ color: '#fff' }}>
                  SignOut
                </Button>
              </>
            ) : (
              <>
                <NavBarItem name={'SignIn'} href={'/signin'} />
                <NavBarItem name={'SignUp'} href={'/signup'} />
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box component="nav">
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
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  );
}
