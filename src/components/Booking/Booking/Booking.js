import React, { useState } from 'react';
import Navigation from '../../Home/Navigation/Navigation';
import BookingDetails from '../BookingDetails/BookingDetails';
import BookingMain from '../BookingMain/BookingMain';
import TestForm from '../TestForm/TestForm';

const Booking = () => {
    const [bookingDate,setBookingDate]=useState(new Date())
    const handleDateChange = (date) => {
        setBookingDate(date);
    }
    return (
        <div>
            <Navigation></Navigation>
            <BookingMain handleDateChange={handleDateChange}></BookingMain>
            <BookingDetails bookingDate={bookingDate}></BookingDetails>
        </div>
    );
};

export default Booking;