import Div from '../../shared/Div/Div'
import '../../themes/header/nav.css';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import NightlightRoundSharpIcon from '@mui/icons-material/NightlightRoundSharp';
// import favicon from './images/favicon.png';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import favicon from '../../images/favicon.png'
import VoiceChatOutlinedIcon from '@mui/icons-material/VoiceChatOutlined';
import AdUnitsOutlinedIcon from '@mui/icons-material/AdUnitsOutlined';
import { Tooltip } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import Sidebar from '../sidebar/Sidebar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTheme } from '@emotion/react';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'lightgray', // Set a fixed background color
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const AppBarWithWhiteBackground = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#3B3363',
  color: "white", // Set the background color to white
  boxShadow: 'none',
}));

const Navbar = ({ setOpen, open }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [showMenuIcon, setShowMenuIcon] = React.useState(false);
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
    setShowMenuIcon(false);
  };
  const handleDrawerClose = () => {
    setOpen(false);
    setShowMenuIcon(true);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  
  const toggleIcon = () => {
    // Toggle the icon when the IconButton is clicked
    setShowMenuIcon(!showMenuIcon);
    if (open) {
      handleDrawerClose();
    } else {
      handleDrawerOpen();
    }
  };

  return (
    <>
    <Box sx={{ flexGrow: 1, }}>
      <AppBarWithWhiteBackground sx={{ zIndex: "9999" }}>
        <Toolbar>
          <Typography
            // variant="h6"
            // noWrap
            // component="a"
            // href="#app-bar-with-responsive-menu"
            // sx={{
            //   // mr: 2,
            //   display: { md: 'flex' },
            //   fontFamily: 'monospace',
            //   fontWeight: 700,
            //   letterSpacing: '.3rem',
            //   color: 'inherit',
            //   textDecoration: 'none',
            // }}
          >
            <Div sx={{  width: '50px', height: '50px', display: "flex", justifyContent: "center", alignItems: "center", background: "#eb8153" }}>
              <AccountBalanceOutlinedIcon />
            </Div>
          </Typography>
          <Div style={{ padding: "0 50px 0 20px" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block', width: 74, height: 22, fontSize: 18, fontWeight: 700, } }}
            >
              ZENIX
            </Typography>
          </Div>


          {showMenuIcon ? (
            <IconButton onClick={toggleIcon} style={{ color: '#B3B3B3' }}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ArrowBackIcon />}
            </IconButton>

          ) : (
            <>
              <IconButton
                position="fixed"
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={toggleIcon}
              >
                <MenuIcon />
              </IconButton>
            </>
          )}

          <Search sx={{ background: "lightgray", background: "#2C254A" }} >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search here..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Div>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block', width: 74, height: 22, fontSize: 18, fontWeight: 700, } }}
            >
              <NightlightRoundSharpIcon />
            </Typography>
          </Div>
          <Div >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block', width: 74, height: 22, fontSize: 18, fontWeight: 700, } }}
            >
              <FullscreenIcon />
            </Typography>
          </Div>

          <Div>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block', width: 74, height: 22, fontSize: 18, fontWeight: 700, } }}
            >
              <NotificationImportantOutlinedIcon />
            </Typography>
          </Div>

          <Div>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block', width: 74, height: 22, fontSize: 18, fontWeight: 700, } }}
            >
              <VoiceChatOutlinedIcon />

            </Typography>
          </Div>

          <Div>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block', width: 74, height: 22, fontSize: 18, fontWeight: 700, } }}
            >
              <AdUnitsOutlinedIcon />

            </Typography>
          </Div>

         
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} >
                <img style={{
                  width: '40px', // Set your desired width
                  height: '40px', // Set your desired height
                  background: `url("https://zenix.dexignzone.com/xhtml/images/profile/pic1.jpg")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '8px', // You can adjust the border radius as needed
                }} />
                {/* <Avatar alt="Remy Sharp" src="https://zenix.dexignzone.com/xhtml/images/profile/pic1.jpg" /> */}
              </IconButton>
            </Tooltip>
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
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>

          </Box>
          <Box>
            <Div sx={{ paddingLeft: "10px" }}>
              <h3 style={{ color: "#fff", fontSize: "16px", display: "block", fontWeight: "600", fontFamily: "Poppins, sans-serif" }}>Johndoe</h3>
              <p style={{ color: "#89879f", fontSize: "12px", display: "block", fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>Super Admin</p>
            </Div>
          </Box>
        </Toolbar>


      </AppBarWithWhiteBackground>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    </>
  )
}

export default Navbar
