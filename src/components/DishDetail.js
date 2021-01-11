import React,{Component} from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,ListGroupItem} from 'reactstrap';

class DishDetail extends Component {
    render(){
        //reassigning dish into a local constant.
        const dishc = this.props.dish;

        //defining a variable r, which will be the returned JSX of this class;
        var r = null;

        ///if the passed dish is not null;
        if(dishc != null){

            ///this is the list of JSX formatted comments on the selected dish
            const comments = dishc.comments.map((comment)=>{
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
                <div className = "row">    
                    <div key ={dishc.id} className = "col-6 col-md-2 m-4">
                        <Card>
                            <CardImg width = "100%" src = {dishc.image} alt = {dishc.name}/>
                            <CardBody>
                                <CardTitle>{dishc.name}</CardTitle>
                                <CardText>{dishc.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className = "col-2 col-md-3  m-1">
                        {comments}
                    </div>
                </div>
            );}
        return(r);
    }
}


export default DishDetail;