import React from 'react';
import {
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import HandymanIcon from '@mui/icons-material/Handyman';
import ImageSlider from '../components/ImageSlider';
import { useNavigate } from 'react-router-dom';
import { colors } from '../App';

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: 'שירותי אינסטלציה',
      description: 'התקנה ותיקון של מערכות מים וביוב',
      icon: PlumbingIcon,
    },
    {
      id: 2,
      title: 'תיקור וחשמל',
      description: 'עבודות חשמל ותיקור דירתי',
      icon: ElectricBoltIcon,
    },
    {
      id: 3,
      title: 'תיקון כללי',
      description: 'תיקון מכשירים חשמליים ועוד',
      icon: BuildIcon,
    },
    {
      id: 4,
      title: 'עבודות יד',
      description: 'ריהוט, דלתות וחלונות',
      icon: HandymanIcon,
    },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      {/* Hero Section with Slider */}
      <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
        <ImageSlider />
      </Container>

      {/* Welcome Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 }, direction: 'rtl' }}>
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              mb: 3,
              color: colors.navy,
              fontFamily: '"Rubik", sans-serif',
              fontWeight: 700,
            }}
          >
            ברוכים הבאים!
          </Typography>
          {/* Copper underline bar */}
          <Box
            sx={{
              width: '50px',
              height: '3px',
              backgroundColor: colors.copper,
              margin: '0 auto 1.5rem auto',
            }}
          />
          <Typography
            variant="h5"
            sx={{
              color: colors.pipeGray,
              maxWidth: '600px',
              mx: 'auto',
              fontFamily: '"Heebo", sans-serif',
            }}
          >
            אנחנו מתמחים בשירותי אינסטלציה ותיקון כללי עם ניסיון של שנים רבות.
            סיוע מהיר, עבודה איכותית, וירוד הוגן.
          </Typography>
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 700,
              textTransform: 'none',
              backgroundColor: colors.copper,
              color: 'white',
              fontFamily: '"Rubik", sans-serif',
              '&:hover': {
                backgroundColor: colors.copperLight,
                transform: 'translateY(-2px)',
                boxShadow: `0 8px 16px rgba(${196}, ${122}, ${58}, 0.35)`,
              },
            }}
            onClick={() => navigate('/works')}
          >
            ראה את כל העבודות שלנו
          </Button>
        </Box>
      </Container>

      {/* Services Overview */}
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
              השירותים שלנו
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

          <Grid container spacing={3}>
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Grid item xs={12} sm={6} md={3} key={service.id}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      backgroundColor: colors.slate,
                      boxShadow: `0 2px 8px rgba(${10}, ${22}, ${40}, 0.1)`,
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 8px 24px rgba(${196}, ${122}, ${58}, 0.25)`,
                      },
                      borderRadius: '8px',
                    }}
                  >
                    <Box
                      sx={{
                        p: 2,
                        backgroundColor: colors.copper,
                        color: 'white',
                      }}
                    >
                      <IconComponent sx={{ fontSize: '3rem' }} />
                    </Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 1,
                          fontWeight: 700,
                          color: colors.copper,
                          fontFamily: '"Rubik", sans-serif',
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          lineHeight: 1.6,
                          color: colors.pipeGray,
                          fontFamily: '"Heebo", sans-serif',
                        }}
                      >
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 }, direction: 'rtl' }}>
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
            למה לבחור בנו?
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

        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                backgroundColor: colors.slate,
                boxShadow: `0 2px 8px rgba(${10}, ${22}, ${40}, 0.1)`,
                borderRadius: '8px',
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1,
                    fontWeight: 700,
                    color: colors.copper,
                    fontFamily: '"Rubik", sans-serif',
                  }}
                >
                  ✓ ניסיון רב שנים
                </Typography>
                <Typography
                  sx={{
                    color: colors.pipeGray,
                    fontFamily: '"Heebo", sans-serif',
                  }}
                >
                  עבודנו עם אלפי לקוחות מרוצים על פני שנים רבות.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                backgroundColor: colors.slate,
                boxShadow: `0 2px 8px rgba(${10}, ${22}, ${40}, 0.1)`,
                borderRadius: '8px',
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1,
                    fontWeight: 700,
                    color: colors.copper,
                    fontFamily: '"Rubik", sans-serif',
                  }}
                >
                  ✓ מענה מהיר
                </Typography>
                <Typography
                  sx={{
                    color: colors.pipeGray,
                    fontFamily: '"Heebo", sans-serif',
                  }}
                >
                  אנחנו מגיעים בתוך 24 שעות למרבית הקריאות.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                backgroundColor: colors.slate,
                boxShadow: `0 2px 8px rgba(${10}, ${22}, ${40}, 0.1)`,
                borderRadius: '8px',
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1,
                    fontWeight: 700,
                    color: colors.copper,
                    fontFamily: '"Rubik", sans-serif',
                  }}
                >
                  ✓ עבודה איכותית
                </Typography>
                <Typography
                  sx={{
                    color: colors.pipeGray,
                    fontFamily: '"Heebo", sans-serif',
                  }}
                >
                  כל עבודה מבוצעת בדייקנות עם שימוש בחומרים איכותיים.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                backgroundColor: colors.slate,
                boxShadow: `0 2px 8px rgba(${10}, ${22}, ${40}, 0.1)`,
                borderRadius: '8px',
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1,
                    fontWeight: 700,
                    color: colors.copper,
                    fontFamily: '"Rubik", sans-serif',
                  }}
                >
                  ✓ ירוד הוגן
                </Typography>
                <Typography
                  sx={{
                    color: colors.pipeGray,
                    fontFamily: '"Heebo", sans-serif',
                  }}
                >
                  בדיקה חינם והצעה ברורה לפני תחילת כל עבודה.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Contact Section */}
      <Box
        sx={{
          backgroundColor: colors.navy,
          color: 'white',
          py: { xs: 4, md: 6 },
          textAlign: 'center',
          direction: 'rtl',
          borderTop: `3px solid ${colors.copper}`,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 700,
              fontFamily: '"Rubik", sans-serif',
            }}
          >
            צריך עזרה? יצור קשר עכשיו!
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontSize: { xs: '1rem', md: '1.3rem' },
              opacity: 0.9,
              fontFamily: '"Heebo", sans-serif',
            }}
          >
            052-641-0042
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: colors.copper,
              color: 'white',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 700,
              textTransform: 'none',
              fontFamily: '"Rubik", sans-serif',
              '&:hover': {
                backgroundColor: colors.copperLight,
                transform: 'translateY(-2px)',
                boxShadow: `0 8px 16px rgba(${196}, ${122}, ${58}, 0.35)`,
              },
            }}
            component="a"
            href="tel:+972526410042"
          >
            קרא עכשיו
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
