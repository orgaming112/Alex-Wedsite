import React from 'react';
import {
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Rating,
  Avatar,
  useTheme,
} from '@mui/material';
import { colors } from '../App';

const ReviewsPage = () => {
  const theme = useTheme();

  const reviews = [
    {
      id: 1,
      name: 'דוד לוי',
      rating: 5,
      date: '2026-03-20',
      text: 'שירות יוצא דופן! התמחה הגיע בזמן, עבד באופן מקצועי ונקה הכל בסוף. ממליץ בחום!',
      service: 'תיקור ברז',
    },
    {
      id: 2,
      name: 'שרה כהן',
      rating: 5,
      date: '2026-03-18',
      text: 'עבודה איכותית מאוד. המחיר הוא הוגן והבחור מאוד אדיב. תודה!',
      service: 'תיקור דליפה',
    },
    {
      id: 3,
      name: 'משה רבי',
      rating: 4,
      date: '2026-03-15',
      text: 'עבודה טובה. קצת ארך זמן יותר מהצפוי אבל התוצאה הייתה טובה.',
      service: 'התקנת ברז חדש',
    },
    {
      id: 4,
      name: 'נעמי גוטמן',
      rating: 5,
      date: '2026-03-12',
      text: 'התמחה הגיע בדיוק בזמן המוזמן, עבד בדייקנות רבה וגם ערך סדר בסוף. מומלץ מאוד!',
      service: 'חשמלאות',
    },
    {
      id: 5,
      name: 'אברהם שלום',
      rating: 5,
      date: '2026-03-10',
      text: 'שירות מעולה! הקשיבו לכל הצרכים שלי וסיפקו פתרון מומלץ. תודה רבה!',
      service: 'תיקור כללי',
    },
    {
      id: 6,
      name: 'רחל מנדלבאום',
      rating: 4,
      date: '2026-03-08',
      text: 'עבודה מינהלתית טובה. בחור אדיב ומקצועי. מוצלח!',
      service: 'התקנה מקלחת',
    },
  ];

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  };

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
            ביקורות לקוחות
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
              fontSize: { xs: '1rem', md: '1.2rem' },
              opacity: 0.9,
              fontFamily: '"Heebo", sans-serif',
            }}
          >
            אלפי לקוחות מרוצים שהאמינו בנו
          </Typography>
        </Container>
      </Box>

      {/* Reviews Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 }, direction: 'rtl' }}>
        {/* Overall Rating Summary */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
            p: { xs: 2, md: 4 },
            backgroundColor: colors.slate,
            borderRadius: '8px',
            boxShadow: `0 2px 8px rgba(${10}, ${22}, ${40}, 0.1)`,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 1,
              color: colors.copper,
              fontFamily: '"Rubik", sans-serif',
            }}
          >
            ממוצע דירוגים
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 1 }}>
            <Rating value={4.8} readOnly size="large" sx={{ color: colors.copper }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: colors.copper,
                fontFamily: '"Rubik", sans-serif',
              }}
            >
              4.8 / 5.0
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: '0.95rem',
              color: colors.pipeGray,
              fontFamily: '"Heebo", sans-serif',
            }}
          >
            בהתאם ל-{reviews.length} ביקורות אמתיות מלקוחות
          </Typography>
        </Box>

        {/* Reviews Cards */}
        <Grid container spacing={3}>
          {reviews.map((review) => (
            <Grid item xs={12} md={6} key={review.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: colors.slate,
                  boxShadow: `0 2px 8px rgba(${10}, ${22}, ${40}, 0.1)`,
                  transition: 'all 0.3s ease',
                  borderRadius: '8px',
                  '&:hover': {
                    boxShadow: `0 8px 24px rgba(${196}, ${122}, ${58}, 0.25)`,
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  {/* Header with Avatar and Name */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      mb: 2,
                      flexDirection: 'row-reverse',
                    }}
                  >
                    <Avatar
                      sx={{
                        backgroundColor: colors.copper,
                        width: 48,
                        height: 48,
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        color: 'white',
                      }}
                    >
                      {getInitials(review.name)}
                    </Avatar>
                    <Box sx={{ flex: 1, textAlign: 'right' }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          mb: 0.5,
                          color: colors.copper,
                          fontFamily: '"Rubik", sans-serif',
                        }}
                      >
                        {review.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          display: 'block',
                          color: colors.pipeGray,
                          fontFamily: '"Heebo", sans-serif',
                        }}
                      >
                        {review.service}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Rating */}
                  <Box sx={{ mb: 2 }}>
                    <Rating value={review.rating} readOnly size="small" sx={{ color: colors.copper }} />
                  </Box>

                  {/* Review Text */}
                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 1.7,
                      mb: 2,
                      color: colors.pipeGray,
                      textAlign: 'right',
                      fontStyle: 'italic',
                      fontFamily: '"Heebo", sans-serif',
                    }}
                  >
                    "{review.text}"
                  </Typography>

                  {/* Date */}
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'block',
                      textAlign: 'right',
                      color: colors.pipeGray,
                      fontFamily: '"Heebo", sans-serif',
                    }}
                  >
                    {new Date(review.date).toLocaleDateString('he-IL')}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box
        sx={{
          backgroundColor: colors.cream,
          py: { xs: 4, md: 6 },
          textAlign: 'center',
          direction: 'rtl',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              fontWeight: 700,
              fontSize: { xs: '1.5rem', md: '2rem' },
              color: colors.navy,
              fontFamily: '"Rubik", sans-serif',
            }}
          >
            רוצה שנוכל לעזור גם לך?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              color: colors.pipeGray,
              fontSize: { xs: '1rem', md: '1.1rem' },
              fontFamily: '"Heebo", sans-serif',
            }}
          >
            התמחה שלנו זמינים לשירותך כל יום קבוע
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Box
              component="a"
              href="tel:+972526410042"
              sx={{
                px: 3,
                py: 1.5,
                backgroundColor: colors.copper,
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: 700,
                display: 'inline-block',
                transition: 'all 0.3s ease',
                fontFamily: '"Rubik", sans-serif',
                '&:hover': {
                  backgroundColor: colors.copperLight,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 8px 16px rgba(${196}, ${122}, ${58}, 0.35)`,
                },
              }}
            >
              📞 קרא: 052-641-0042
            </Box>
            <Box
              component="a"
              href="https://wa.me/972526410042"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 3,
                py: 1.5,
                backgroundColor: '#25d366',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: 700,
                display: 'inline-block',
                transition: 'all 0.3s ease',
                fontFamily: '"Rubik", sans-serif',
                '&:hover': {
                  backgroundColor: '#20ba5c',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 16px rgba(32, 186, 92, 0.35)',
                },
              }}
            >
              💬 WhatsApp
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Share Your Experience */}
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 }, direction: 'rtl' }}>
        <Box
          sx={{
            backgroundColor: colors.slate,
            p: { xs: 3, md: 4 },
            borderRadius: '8px',
            textAlign: 'center',
            boxShadow: `0 2px 8px rgba(${10}, ${22}, ${40}, 0.1)`,
            border: `1px solid ${colors.copper}`,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: 700,
              color: colors.copper,
              fontFamily: '"Rubik", sans-serif',
            }}
          >
            ⭐ שיתפת עם אחד מהשירותים שלנו?
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mb: 2,
              color: colors.pipeGray,
              fontFamily: '"Heebo", sans-serif',
            }}
          >
            אנחנו הייינו שמחים לשמוע מהעיתונות שלך. כתוב לנו דרך WhatsApp או התקשר!
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Box
              component="a"
              href="tel:+972526410042"
              sx={{
                px: 2,
                py: 1,
                backgroundColor: colors.copper,
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '0.9rem',
                fontWeight: 600,
                display: 'inline-block',
                transition: 'all 0.3s ease',
                fontFamily: '"Rubik", sans-serif',
                '&:hover': {
                  backgroundColor: colors.copperLight,
                  transform: 'translateY(-2px)',
                },
              }}
            >
              התקשר
            </Box>
            <Box
              component="a"
              href="https://wa.me/972526410042"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 2,
                py: 1,
                backgroundColor: '#25d366',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '0.9rem',
                fontWeight: 600,
                display: 'inline-block',
                transition: 'all 0.3s ease',
                fontFamily: '"Rubik", sans-serif',
                '&:hover': {
                  backgroundColor: '#20ba5c',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              שלח סימים
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ReviewsPage;
