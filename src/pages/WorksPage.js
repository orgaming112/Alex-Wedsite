import React, { useState } from 'react';
import {
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { colors } from '../App';
import StyledButton from '../components/StyledButton';

const WorksPage = () => {
  const [currentImages, setCurrentImages] = useState([0, 0, 0, 0, 0, 0]);

  const handleNext = (index) => {
    setCurrentImages(prev => {
      const newImages = [...prev];
      newImages[index] = (newImages[index] + 1) % 3;
      return newImages;
    });
  };

  const handlePrev = (index) => {
    setCurrentImages(prev => {
      const newImages = [...prev];
      newImages[index] = (newImages[index] - 1 + 3) % 3;
      return newImages;
    });
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
      {/* Header */}
      <Box
        sx={{
          backgroundColor: colors.navy,
          color: 'white',
          py: { xs: 5, md: 8 },
          textAlign: 'center',
          borderBottom: `3px solid ${colors.copper}`,
          direction: 'rtl',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              mb: 2,
              fontWeight: 700,
              fontFamily: '"Rubik", sans-serif',
              lineHeight: 1.2,
            }}
          >
            מבחר העבודות שלנו
          </Typography>
          {/* Copper underline bar below title */}
          <Box
            sx={{
              width: '60px',
              height: '4px',
              backgroundColor: colors.copper,
              margin: '0 auto',
              mb: 2.5,
              borderRadius: '2px',
            }}
          />
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              opacity: 0.9,
              fontFamily: '"Heebo", sans-serif',
            }}
          >
            מוזמנים להתרשם ממבחר עבודות שביצענו - איכות, דיוק ושירות ללא פשרות.
          </Typography>
        </Container>
      </Box>

      {/* Image Collage Placeholder */}
      <Box sx={{ backgroundColor: colors.cream, py: { xs: 4, md: 6 }, direction: 'rtl' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                color: colors.navy,
                fontFamily: '"Rubik", sans-serif',
                fontWeight: 700,
              }}
            >
              עבודות שלנו 
            </Typography>
            {/* Copper underline bar */}
            <Box
              sx={{
                width: '60px',
                height: '4px',
                backgroundColor: colors.copper,
                margin: '0 auto',
                borderRadius: '2px',
              }}
            />
          </Box>

          {/* Placeholder Grid for Images */}
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={item}>
                <Box
                  sx={{
                    height: { xs: 200, md: 250 },
                    backgroundColor: colors.slate,
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `2px dashed ${colors.copper}`,
                    position: 'relative',
                  }}
                >
                  <Typography
                    sx={{
                      color: colors.pipeGray,
                      fontFamily: '"Heebo", sans-serif',
                      textAlign: 'center',
                      mb: 1,
                    }}
                  >
                    תמונה {currentImages[index] + 1} מתוך 3
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                      onClick={() => handlePrev(index)}
                      sx={{ color: colors.copper }}
                      size="small"
                    >
                      <ArrowForwardIcon />
                    </IconButton>
                    <Typography
                      sx={{
                        color: colors.pipeGray,
                        fontFamily: '"Heebo", sans-serif',
                        textAlign: 'center',
                        mx: 1,
                      }}
                    >
                      עבודה {item}
                    </Typography>
                    <IconButton
                      onClick={() => handleNext(index)}
                      sx={{ color: colors.copper }}
                      size="small"
                    >
                      <ArrowBackIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box sx={{ backgroundColor: colors.cream, py: { xs: 4, md: 6 }, direction: 'rtl' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                color: colors.navy,
                fontFamily: '"Rubik", sans-serif',
                fontWeight: 700,
              }}
            >
              תשלום וביקור 
            </Typography>
            {/* Copper underline bar */}
            <Box
              sx={{
                width: '50px',
                height: '3px',
                backgroundColor: colors.copper,
                margin: '0 auto',
              }}
            />
          </Box>

          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: `0 2px 8px rgba(${10}, ${22}, ${40}, 0.1)`,
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: 700,
                      color: colors.copper,
                      fontFamily: '"Rubik", sans-serif',
                    }}
                  >
                    📞 בדיקה
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      mb: 2,
                      color: colors.pipeGray,
                      fontFamily: '"Heebo", sans-serif',
                    }}
                  >
                   שלחו לנו הודעה, ואנחנו כבר נדאג לכל השאר, נבין יחד את הצורך, נתאם זמן הגעה שנוח לכם, ונציג הצעת מחיר הוגנת וברורה עוד לפני תחילת העבודה.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: `0 2px 8px rgba(${10}, ${22}, ${40}, 0.1)`,
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: 700,
                      color: colors.copper,
                      fontFamily: '"Rubik", sans-serif',
                    }}
                  >
                    💰 תיאום מחיר
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      mb: 2,
                      color: colors.pipeGray,
                      fontFamily: '"Heebo", sans-serif',
                    }}
                  >
                    מחיר הוגן, שקוף וברור – כבר מהשלב הראשון.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Schedule Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 }, direction: 'rtl' }}>
        <Box
          sx={{
            backgroundColor: colors.slate,
            p: { xs: 3, md: 4 },
            borderRadius: '8px',
            textAlign: 'center',
            border: `1px solid ${colors.copper}`,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontWeight: 700,
              color: colors.copper,
              fontFamily: '"Rubik", sans-serif',
            }}
          >
            רוצה לתאם ביקור?
          </Typography>
          <StyledButton
            component="a"
            href="tel:0526410042"
            variant="primary"
            size="large"
            startIcon={<PhoneIcon />}
            sx={{
              flexDirection: 'row',
              '& .MuiButton-startIcon': {
                marginLeft: 0,
                marginRight: '0.75rem',
              },
            }}
          >
            קרא עכשיו: 052-641-0042
          </StyledButton>
        </Box>
      </Container>
    </Box>
  );
};

export default WorksPage;
