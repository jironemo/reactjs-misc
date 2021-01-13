import React from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle} from 'reactstrap';


import { slideInUp} from 'react-animations';
import Radium,{StyleRoot} from 'radium';

const styles= {
    slidein: {
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInUp,'slideInUp')
    }
}

function RenderCard({item}){
    return(
        <Card>
            <CardImg src = {item.image} alt = {item.name}/>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle><b>{item.designation}</b></CardSubtitle>:null}
                <CardText>{item.description}</CardText>
            </CardBody>
            
        </Card>
        );
}
function Home(props){
    return(
       <StyleRoot>
         <div className = "container"  >
            <div className = "row align-items-start mt-5" >
                <div className = "col-12 col-md m1" style = {styles.slidein}>
                    <RenderCard item = {props.dish} />
                </div>
                <div className = "col-12 col-md m1" style = {styles.slidein}>
                    <RenderCard item = {props.promotion}/>
                </div>
                <div className = "col-12 col-md m1" style = {styles.slidein}>
                    <RenderCard item = {props.leader}/>
                </div>
            </div>
        </div>  
       </StyleRoot> 
    )
}


export default Home;