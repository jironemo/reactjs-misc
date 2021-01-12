
import { render } from '@testing-library/react';
import React from 'react';
import {Card,CardImg,CardImgOverlay,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

    function RenderMenuItem({dish}){
        return(
            <Card>
                <Link to = {`/menu/${dish.id}`} >
                    <CardImg width = "100%" src = {dish.image} alt = {dish.name}/>
                    <CardImgOverlay>
                        <CardTitle className = "font-weight-bold"> {dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }
    const Menu = (props) => {
        const menu = props.dishes.map((dish)=>{
            return(
                <div key ={dish.id} className = "col-6 col-md-2 m-1">
                    <RenderMenuItem dish = {dish}/> 
                </div>
    
                );
            });
            
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Menu</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        {menu}
                    </div>
                </div>
            );
    }

export default Menu;