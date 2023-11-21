import React from 'react';
import { Container, Card, CardContent, Typography, CardHeader, Divider, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import backgroundImage from '../Utils/event.jpg';

const eventsData = [
    {
        id: 1,
        name: "Workshop on Digital Innovation",
        date: "25th October 2023",
        time: "2:00 PM",
        location: "LUT Lahti"
      },
      {
        id: 2,
        name: "Sustainability in Business Seminar",
        date: "28th October 2023",
        time: "10:00 AM",
        location: "LUT Lappeenranta"
      },
      {
        id: 3,
        name: "Nokia's Future in 5G Technology",
        date: "30th October 2023",
        time: "11:00 AM",
        location: "LUT Lahti"
      },
      {
        id: 4,
        name: "Supercell Gaming Convention",
        date: "5th November 2023",
        time: "3:00 PM",
        location: "LUT Lappeenranta"
      },
      {
        id: 5,
        name: "Rovio Entertainment's Vision 2024",
        date: "8th November 2023",
        time: "1:00 PM",
        location: "LUT Lahti"
      },
      {
        id: 6,
        name: "Smart Tampere: A Digital City Initiative",
        date: "10th November 2023",
        time: "4:00 PM",
        location: "LUT Lappeenranta"
      },
      {
        id: 7,
        name: "KONE's Elevator Innovations",
        date: "15th November 2023",
        time: "10:00 AM",
        location: "LUT Lahti"
      },
      {
        id: 8,
        name: "Wärtsilä: Navigating the Future of Energy",
        date: "18th November 2023",
        time: "12:00 PM",
        location: "LUT Lappeenranta"
      }
    ];    
    const StyledCard = styled(Card)(({ theme }) => ({
    height: 250,
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
      transform: 'scale(1.03)'
    },
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}));

const JoinButton = styled(Button)(({ theme }) => ({
    marginTop: 10,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark
    }
}));

const EventsContainer = styled(Container)(({ theme }) => ({
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
}));

const Events = () => {
  return (
    <EventsContainer maxWidth="lg" className="events-container">
      <Typography variant="h3" gutterBottom align="center" style={{ marginBottom: 30, color: '#2E3B55' }}>
        Upcoming Events
      </Typography>
      <Divider />
      <Grid container spacing={3}>
        {eventsData.map(event => (
          <Grid item xs={12} sm={4} key={event.id}>
            <StyledCard className="event-card">
              <CardHeader className="event-card-content" title={event.name} subheader={event.location} />
              <CardContent className="event-card-content">
                <Typography variant="h6">
                  {event.date} at {event.time}
                </Typography>
                <JoinButton className="join-button" variant="contained">Join Event</JoinButton>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </EventsContainer>
  );
}

export default Events;