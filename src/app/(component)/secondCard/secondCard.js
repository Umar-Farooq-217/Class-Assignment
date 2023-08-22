import React from 'react';
import Image from 'next/image';
const SecondCard = (props) => {
    return (
        <div class="facilities-col">
        <Image src={props.src} width='100' height='100' alt="pic"/>
        <h3>{props.title}</h3>
        <p>{props.pera}
        </p>
    </div> 
       );
}

export default SecondCard;
