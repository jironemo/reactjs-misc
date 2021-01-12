
  
import React from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,ListGroupItem,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
    function DishDetail({dish,comments}){
        //reassigning dish into a local constant.
        const dishc = dish;

        //defining a variable r, which will be the returned JSX of this class;
        var r = null;

        ///if the passed dish is not null;
        if(dishc != null){

            ///this is the list of JSX formatted comments on the selected dish
            const cmts = comments.map((comment)=>{
                return(
                    <ListGroupItem className="border-0">
                            <p><b>{comment.author}</b> --{comment.comment}</p>
                            <p>{comment.rating}/5</p>
                            <p>{comment.date}</p>
                    </ListGroupItem>
    
                );
            });

            //the JSX value to be returned.
            r = (
                <div className = 'container'>
                    <div className="row">
                        <Breadcrumb>

                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{dishc.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{dishc.name}</h3>
                            <hr />
                        </div>                
                    </div>
                        <div className = "row">    
                
                            <div key ={dishc.id} className = "col-2 col-md-4 m-4">
                                <Card>
                                    <CardImg width = "20%" src = {dishc.image} alt = {dishc.name}/>
                                    <CardBody>
                                        <CardTitle>{dishc.name}</CardTitle>
                                        <CardText>{dishc.description}</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className = "col-6 col-md-3  m-1">
                                {cmts}
                            </div>
                        </div>
                </div>
            );}
        return(r);
    }


export default DishDetail;
