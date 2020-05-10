import React from 'react';
import {StoriesContainer} from '../Containers/storyCont';
import {imp} from '../Stories/story';
import './component.css'
import Logo from '../sun-logo.png'

export const UpperComp = () =>{
    console.log("imp" , imp);
    let date , ydate , mdate , day
    date = new Date();
    ydate = date.getFullYear();
    mdate = date.getMonth();
    day = date.getDay();
    date = date.getDate();
    const days = ['SUNDAY' , 'MONDAY' , 'TUESDAY' , 'WEDNESDAY' , 'THURSDAY' ,'FRIDAY' , 'SATURDAY' ]
    const months = ['JANUARY' , 'FEBRUARY' , 'MARCH' , 'APRIL' , 'MAY' , 'JUNE' ,'JULY' ,  'AUGUST' , 'SEPTEMBER' , 'OCTOBER' , 'NOVEMBER' , 'DECEMBER']
    return(
        <>
    <div className = "upperContainer" >Divya <span className = "image"><img src = {Logo} /></span> Darshan</div>
    <div className="details">INDIA | {days[day]} | {months[mdate]} {date}, {ydate}</div>
</>
    );
}
