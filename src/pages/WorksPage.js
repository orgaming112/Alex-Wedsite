import React, { useState } from 'react';
import {
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import BuildIcon from '@mui/icons-material/Build';
import WindowIcon from '@mui/icons-material/Window';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { colors } from '../App';

const WorksPage = () => {
  const theme = useTheme();
  const [expandedService, setExpandedService] = useState(null);

  const handleExpand = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const works = [
    {
      id: 1,
      title: 'שירותי אינסטלציה',
      icon: PlumbingIcon,
      description: 'שירותים מלאים של אינסטלציה',
      image: '/works/plumbing.jpg',
      details: [
        'התקנת ברזים ומקלחות',
        'תיקור קו הביוב',
        'התקנת מערכות מים חדשות',
        'תיקון זליגות וקשיות במים',
        'התקנת מכשירים סניטריים',
      ],
    },
    {
      id: 2,
      title: 'עבודות חשמל ותיקור',
      icon: ElectricBoltIcon,
      description: 'שירותי חשמל דירתי ותיקור',
      image: '/works/electrical.jpg',
      details: [
        'התקנת שקעים וחיבורים',
        'תיקור לוחות חשמל',
        'בדיקת בטיחות חשמלית',
        'התקנת משאבות ודוודים',
        'בדיקות שנתיות',
      ],
    },
    {
      id: 3,
      title: 'תיקון כללי ותיקור',
      icon: BuildIcon,
      description: 'שירותים כלליים לדירה',
      image: '/works/general.jpg',
      details: [
        'תיקור דלתות וחלונות',
        'היצקים והסתמות דליפות',
        'תיקור טיח וצבע',
        'תיקור מכשירים חשמליים',
        'עבודות אחרות בהגדרה',
      ],
    },
    {
      id: 4,
      title: 'עבודות יד וריהוט',
      icon: WindowIcon,
      description: 'עבודות יד וריהוט מותאם',
      image: '/works/furniture.jpg',
      details: [
        'סידור וספרים מעצבות',
        'קביעת מידוגים',
        'תיקור וציפוי ריהוט',
        'התקנת מראות וצילומים',
        'עבודות קרנישים',
      ],
    },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      {/* Header */}
      <Box
        sx={{
          backgroundColor: colors.navy,
          color: 'white',
          py: { xs: 4, md: 6 },
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
              mb: 3,
              fontWeight: 700,
              fontFamily: '"Rubik", sans-serif',
            }}
          >
            העבודות שלנו
          </Typography>
          {/* Copper underline bar below title */}
          <Box
            sx={{
              width: '50px',
              height: '3px',
              backgroundColor: colors.copper,
              margin: '0 auto',
              mb: 3,
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
            שירותים מקצועיים ומהימנים לכל צרכי הדירה
          </Typography>
        </Container>
      </Box>

      {/* Works List */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 }, direction: 'rtl' }}>
        <Grid container spacing={3}>
          {works.map((work) => {
            const IconComponent = work.icon;
            const isExpanded = expandedService === work.id;

            return (
              <Grid item xs={12} md={6} key={work.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: colors.slate,
                    boxShadow: isExpanded
                      ? `0 8px 24px rgba(${196}, ${122}, ${58}, 0.25)`
                      : `0 2px 8px rgba(${10}, ${22}, ${40}, 0.15)`,
                    transition: 'all 0.3s ease',
                    borderRadius: '8px',
                  }}
                >
                  <CardHeader
                    avatar={
                      <Box
                        sx={{
                          p: 1.5,
                          backgroundColor: colors.copper,
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconComponent
                          sx={{ color: 'white', fontSize: '2rem' }}
                        />
                      </Box>
                    }
                    title={
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: colors.copper,
                          textAlign: 'right',
                          fontFamily: '"Rubik", sans-serif',
                        }}
                      >
                        {work.title}
                      </Typography>
                    }
                    subheader={
                      <Typography
                        variant="body2"
                        sx={{
                          textAlign: 'right',
                          color: colors.pipeGray,
                          fontFamily: '"Heebo", sans-serif',
                        }}
                      >
                        {work.description}
                      </Typography>
                    }
                    action={
                      <IconButton
                        onClick={() => handleExpand(work.id)}
                        sx={{
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease',
                          color: colors.copper,
                        }}
                      >
                        <ExpandMoreIcon />
                      </IconButton>
                    }
                  />
                  <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                    <CardContent sx={{ pt: 0 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          mb: 2,
                          fontWeight: 600,
                          color: colors.pipeGray,
                          fontFamily: '"Rubik", sans-serif',
                        }}
                      >
                        מה כלול בשירות זה:
                      </Typography>
                      <List sx={{ p: 0 }}>
                        {work.details.map((detail, index) => (
                          <ListItem
                            key={index}
                            sx={{
                              py: 1,
                              px: 0,
                              '&:not(:last-child)': {
                                borderBottom: `1px solid rgba(${196}, ${122}, ${58}, 0.2)`,
                              },
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 36,
                                display: 'flex',
                                justifyContent: 'flex-end',
                                ml: 1,
                              }}
                            >
                              <CheckCircleIcon
                                sx={{
                                  color: colors.copper,
                                  fontSize: '1.3rem',
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={detail}
                              sx={{
                                textAlign: 'right',
                                color: colors.pipeGray,
                                '& .MuiTypography-root': {
                                  fontFamily: '"Heebo", sans-serif',
                                },
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

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
              תשלום וביקור חינם
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
                    📞 בדיקה חינם
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      mb: 2,
                      color: colors.pipeGray,
                      fontFamily: '"Heebo", sans-serif',
                    }}
                  >
                    נבקר באתרך, נבדוק את הבעיה, ונתן הערכה חינמית למחיר העבודה.
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
                    יעבודה יתואם עם ך לפני תחילתה - לא תהיה הפתעה בסוף!
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
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              textTransform: 'none',
              fontWeight: 700,
              backgroundColor: colors.copper,
              color: 'white',
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
            קרא עכשיו: 052-641-0042
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default WorksPage;
