
  
import * as React from 'react';
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
                    <ListGroupItem >
                            <p><b>{comment.author}</b></p>
                            <p className = "text-left">"{comment.comment}"</p>
                            <p>Rating:{comment.rating}/5</p>
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
                        <div className="col-12 ml-4">
                            <h3>{dishc.name}</h3>
                        </div>                
                    </div>
                        <div className = "row">    
                
                            <div key ={dishc.id} className = "col-10 col-md-4 ml-4 mt-0">
                                <Card>
                                    <CardImg width = "20%" src = {dishc.image} alt = {dishc.name}/>
                                    <CardBody>
                                        <CardTitle>{dishc.name}</CardTitle>
                                        <CardText>{dishc.description}</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className = "col-10 col-md-7 ml-4 mt-0">
                                <h5>Comments</h5>
                                {cmts}
                            </div>
                        </div>
                </div>
            );}
        return(r);
    }


export default DishDetail;
