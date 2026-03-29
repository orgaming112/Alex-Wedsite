import React from 'react';
import { Box, Fab, Tooltip, useTheme } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { colors } from '../App';

const WhatsAppButton = () => {
  const whatsappLink = 'https://wa.me/972526410042';

  return (
    <Tooltip title="צור קשר דרך WhatsApp">
      <Fab
        component="a"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: 'fixed',
          bottom: 30,
          left: 30,
          backgroundColor: '#25d366',
          color: colors.white,
          zIndex: 1000,
          width: 70,
          height: 70,
          boxShadow: `0 6px 20px rgba(37, 211, 102, 0.5)`,
          '&:hover': {
            backgroundColor: '#20ba5c',
            boxShadow: `0 10px 30px rgba(37, 211, 102, 0.7)`,
            transform: 'scale(1.15)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        <WhatsAppIcon sx={{ fontSize: '2.5rem' }} />
      </Fab>
    </Tooltip>
  );
};

export default WhatsAppButton;
