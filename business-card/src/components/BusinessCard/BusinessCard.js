import React from 'react';
import ProfileCard from './ProfileCard';
import Notification from './Notification';
import Articles from './Articles';


export default function BusinessCard(){
 //MOST LIKELY BRING AXIOS CALL HERE TO PASS PROPS DOWN COMPONENTS

    return(
        <>
        <h1>PrivateRoute</h1>
        <ProfileCard /> {/*Needs API data */}
        <Notification /> {/*Needs API data */}
        <Articles />
        </>
    )
}