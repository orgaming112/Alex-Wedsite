import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link as RouterLink } from 'react-router-dom';
import { colors } from '../App';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { label: 'בית', path: '/' },
    { label: 'עבודות', path: '/works' },
    { label: 'ביקורות', path: '/reviews' },
  ];

  const phoneNumber = '052-641-0042';
  const phoneLink = 'tel:+972526410042';
  const whatsappLink = 'https://wa.me/972526410042';

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: 280,
        pt: 2,
        direction: 'rtl',
        backgroundColor: colors.navy,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, mb: 3 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: colors.copper }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ textAlign: 'center', flex: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ justifyContent: 'center' }}>
            <ListItemButton
              component={RouterLink}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                width: 'auto',
                textAlign: 'center',
                py: 2,
                '&:hover': {
                  backgroundColor: `${colors.copper}20`,
                  color: colors.copper,
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  sx: {
                    fontFamily: '"Rubik", sans-serif',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: colors.white,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ backgroundColor: colors.copper, opacity: 0.3, my: 2 }} />

      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Button
          component="a"
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          fullWidth
          variant="contained"
          startIcon={<WhatsAppIcon />}
          sx={{
            backgroundColor: '#25d366',
            color: colors.white,
            py: 1.5,
            fontWeight: 700,
            textTransform: 'none',
            fontSize: '1rem',
            fontFamily: '"Rubik", sans-serif',
            '&:hover': {
              backgroundColor: '#20ba5c',
              transform: 'translateY(-2px)',
              boxShadow: `0 8px 16px rgba(37, 211, 102, 0.35)`,
            },
          }}
        >
          WhatsApp
        </Button>
      </Box>

      <Box sx={{ p: 2, textAlign: 'center', color: colors.pipeGray }}>
        <Typography
          variant="body2"
          sx={{
            mb: 1,
            fontFamily: '"Heebo", sans-serif',
          }}
        >
          או התקשר ישירות:
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: colors.copper,
            fontWeight: 700,
            fontSize: '1.2rem',
            fontFamily: '"Rubik", sans-serif',
          }}
        >
          {phoneNumber}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: colors.navy,
          borderBottom: `3px solid ${colors.copper}`,
          boxShadow: `0 2px 8px rgba(${10}, ${22}, ${40}, 0.4)`,
          zIndex: 1200,
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: '56px', md: '64px' },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                color: colors.copper,
                order: 2,
              }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Logo / Title */}
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flex: 1,
              textDecoration: 'none',
              color: colors.copper,
              fontWeight: 900,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              letterSpacing: 0.5,
              fontFamily: '"Rubik", sans-serif',
              order: isMobile ? 1 : 0,
              textAlign: isMobile ? 'center' : 'right',
            }}
          >
            מומחה אינסטלציה
          </Typography>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 4, alignItems: 'center', ml: 4 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: colors.white,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    fontFamily: '"Rubik", sans-serif',
                    textTransform: 'none',
                    position: 'relative',
                    '&:hover': {
                      color: colors.copper,
                      '&::after': {
                        width: '100%',
                      },
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -4,
                      right: 0,
                      width: '0%',
                      height: '2px',
                      backgroundColor: colors.copper,
                      transition: 'width 0.3s ease',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: colors.navy,
            direction: 'rtl',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
