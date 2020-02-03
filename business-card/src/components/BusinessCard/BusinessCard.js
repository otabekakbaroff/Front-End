import React from 'react';
import ProfileCard from './ProfileCard';
import Notification from './Notification';
import Articles from './Articles';
import QRCard from './QRCard';
import AllCards from './AllCards';


export default function BusinessCard(){
 //MOST LIKELY BRING AXIOS CALL HERE TO PASS PROPS DOWN COMPONENTS

    return(
        <>
        <h1>PrivateRoute</h1>
        <ProfileCard /> {/*Needs API data */}
<AllCards style={{display: 'inline-flex'}} />
        <Notification /> {/*Needs API data */}
        <QRCard />
        <Articles />
        </>
    )
}