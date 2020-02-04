import React from 'react';
import ProfileCard from './ProfileCard';
import Notification from './Notification';
import Articles from './Articles';
import QRCard from './QRCard';
import AllCards from './AllCards';


export default function BusinessCard(){
 //MOST LIKELY BRING AXIOS CALL HERE TO PASS PROPS DOWN COMPONENTS

    return(

        // <div style={{height: '100%', overflow: 'hidden', margin: '0px', display: 'flex', boxSizing: 'border-box'}}>
        // {/* <h1>PrivateRoute</h1> */}
        
        // <div style={{height: '100%', display: 'flex', flexDirection: 'column', flexShrink: '0'}}>
        // <ProfileCard /> {/*Needs API data */}
        // <AllCards style={{display: 'inline-flex'}} />
        // <Notification /> {/*Needs API data */}
        // </div>
        // <div style={{height: '100%', display: 'flex', flexDirection: 'column', flexShrink: '0', display: 'inline-flex'}}>
        // <QRCard />
        // <Articles />
        // </div>
// =========
        // <div className="main" style={{height: '100%', overflow: 'hidden', margin: '0px', display: 'flex', boxSizing: 'border-box', justifyContent: 'center'}}>
        // {/* <h1>PrivateRoute</h1> */}
        
        // <div className="article" style={{height: '100%', display: 'flex', flexDirection: 'column', flexShrink: '0', background:'burlywood'}}>
        // <ProfileCard /> {/*Needs API data */}
        // <AllCards style={{display: 'inline-flex'}} />
        // <Notification /> {/*Needs API data */}
        // </div>
        // <div className="side" style={{height: '100%', display: 'flex', flexDirection: 'column', flexShrink: '0', display: 'inline-flex', background: 'cadetblue'}}>
        // <QRCard />
        // <Articles />
        // </div>
        
        // </div>


        <div className="main" style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'nowrap',
            alignContent: 'center'}}>
        
        <div className="article" style={{
            background: 'burlywood',
            flex: 2,
            flexShrink: 3.4
        }}>
        <ProfileCard /> {/*Needs API data */}
        <AllCards/>
        <Notification /> {/*Needs API data */}
        </div>
        <div className="side" style={{background: 'crimson', flex: 1}}>
        <QRCard />
        <Articles />
        </div>
        
        </div>
        
        // </div>

        // <div style={{
        //     display: 'flex',
        //     flexDirection: 'row',
        //     justifyContent: 'center',
        //     flexWrap: 'nowrap',
        //     alignContent: 'center'
        // }}>
        // {/* <h1>PrivateRoute</h1> */}
        
        // <div style={{height: '100%', display: 'flex', flexDirection: 'column', flexShrink: '0'}}>
        //     <div style={{
        //          flexShrink: 1,
        //          width: '300px',
        //          height: '300px',
        //          margin: '0.5em',
        //          border: '3px solid #000',
        //          background: '#ccc',
        //          flexGrow: 1
        //     }}>
        // <ProfileCard /> {/*Needs API data */}
        // <AllCards style={{display: 'inline-flex'}} />
        // <Notification /> {/*Needs API data */}
        // </div>
        // <div style={{
        //       flexShrink: 1,
        //       width: '300px',
        //       height: '300px',
        //       margin: '0.5em',
        //       border: '3px solid #000',
        //       background: '#ccc',
        //       flexGrow: 3.4
        // }}>
        // {/* <div style={{height: '100%', display: 'flex', flexDirection: 'column', flexShrink: '0', display: 'inline-flex'}}> */}
        // <QRCard />
        // <Articles />
        // </div>
        // </div>
        // </div>
    )
}