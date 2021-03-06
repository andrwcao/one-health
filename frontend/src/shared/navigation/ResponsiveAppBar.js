import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


import { AuthContext } from '../context/auth-context';
import LinkButton from '../buttons/LinkButton';


const ResponsiveAppBar = () => {
  const auth = useContext(AuthContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);

  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);

  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    handleCloseNavMenu();
    auth.logout();
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages = (auth.token ? ['Overview', 'Weight', 'Heart Rate'] : []);
  const settings = ['Profile', 'Logout'];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            id="navigation-title"
          >
            OneHealth
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <div>
                  <Link id={page} to={page.toLowerCase().split(' ').join('-')} style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  </Link>
                </div>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            OneHealth
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={page.toLowerCase().split(' ').join('-')} style={{ textDecoration: 'none' }}>
              <Button
                key={page} 
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {auth.token ?
              <Tooltip title="Open settings">
                <IconButton id="profile-pic" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip> :
              <Stack spacing={2} direction="row">
                <LinkButton id='sign-up-button' link='/signup' color='secondary' variant='contained'>Sign Up</LinkButton>
                <LinkButton id='login-button' link='/login' color='secondary' variant='contained'>Login</LinkButton>
              </Stack>
            } 
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              onClick={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                (setting.toLowerCase() == 'logout' ?
                <MenuItem key={setting} selection={setting} onClick={handleLogout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
                :
                <Link id={setting} to={setting.toLowerCase().split(' ').join('-')} style={{ textDecoration: 'none', color: 'black' }}>
                  <MenuItem  key={setting} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                </Link>)
              ))}
            </Menu>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
