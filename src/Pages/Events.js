import React from 'react';
import { Typography, Container, Grid } from '@mui/material';
import EventCard from '../Components/EventCard/index'; // This will be your custom card component
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer';

const Events = () => {
    const events = [
        {
            id: 1,
            title: "Workshop on Digital Innovation",
            imageUrl: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description: 'LUT Lahti'
          },
          {
            id: 2,
            title: "Sustainability in Business Seminar",
            imageUrl: "https://images.pexels.com/photos/3321793/pexels-photo-3321793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description: 'LUT Lahti'
          },
          {
            id: 3,
            title: "Nokia's Future in 5G Technology",
            imageUrl: "https://images.pexels.com/photos/6150527/pexels-photo-6150527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description: 'LUT Lahti'
          },
          {
            id: 4,
            title: "Supercell Gaming Convention",
            imageUrl: "https://images.pexels.com/photos/2608516/pexels-photo-2608516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description: 'LUT Lahti'
          },
          {
            id: 5,
            title: "Rovio Entertainment's Vision 2024",
            imageUrl: "https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description: 'LUT Lahti'
          },
          {
            id: 6,
            title: "Smart Tampere: A Digital City Initiative",
            imageUrl: "https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description: 'LUT Lahti'
          },
          {
            id: 7,
            title: "KONE's Elevator Innovations",
            imageUrl: "https://images.pexels.com/photos/5257759/pexels-photo-5257759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description: 'LUT Lahti'
          },
          {
            id: 8,
            title: "Wärtsilä: Navigating the Future of Energy",
            imageUrl: "https://images.pexels.com/photos/7688164/pexels-photo-7688164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description: 'LUT Lahti'
          }
        
    ];

    return (
      <>
        <NavBar/>
        <Container>
            <Typography variant="h2" align="center" gutterBottom>
                Upcoming Events
            </Typography>
            <Typography variant="body1" align="center" paragraph>
                Check out the latest events happening around you!
            </Typography>
            <Grid container spacing={4}>
                {events.map(event => (
                    <Grid item key={event.id} xs={12} sm={6} md={4}>
                        <EventCard event={event} />
                    </Grid>
                ))}
            </Grid>
        </Container>
        <Footer/>

      </>
    );
};

export default Events;
