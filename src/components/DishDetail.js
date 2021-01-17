
  
import React,{Component}  from 'react';
import {Modal,Col,Row,ModalBody,ModalHeader,Label,Button,Card,CardImg,CardText,CardBody,CardTitle,ListGroupItem,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, LocalForm,Errors} from 'react-redux-form';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';
    const required = (val) =>  val && val.length;
    const maxLength = (len) =>(val)=> !(val) || (val.length <= len);
    const minLength = (len) =>(val)=> (val) && (val.length >=len);

    class CommentForm extends Component {
        constructor(props){
            super(props);
            this.state = {
                isOpen: false,
            }
            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        toggleModal(){
            this.setState({
                isOpen : !this.state.isOpen,
            }
            )
        }

        handleSubmit(values){
            this.props.postComment(this.props.dishId,values.rating,values.author,values.comment);
        }
        render() {
            return(

                <div className ='mr-auto'>
                <Button outline onClick = {this.toggleModal}>
                    <span className = "fa fa-pencil"></span>Submit Comment
                </Button>
                <Modal isOpen = {this.state.isOpen} toggle = {this.toggleModal}>
                    <ModalHeader toggle = {this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit = {(values) => this.handleSubmit(values)}>
                            <Row className = 'form-group'>
                                <Label htmlFor = "rating" md=  {2}> Rating</Label>
                                <Col md = {10}>
                                    <Control.select model = '.rating' className = 'form-control' id = 'rating' name ='rating'>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className = 'form-group'>
                                <Label htmlFor = "author" md=  {2}> Author</Label>
                                <Col md = {10}>
                                    <Control.text model = '.author' className = 'form-control' id = 'author' name ='author'
                                    validators = {{required,minLength:minLength(3),maxLength:maxLength(15)}}
                                    />
                                    <Errors className = 'text-danger' model = '.author' show = 'touched' messages= {{
                                        required: 'Required',
                                        minLength: 'Must be more than 2 characters',
                                        maxLength: 'Must be less than 16 characters',
                                    }}/>
                                </Col>
                            </Row>
                            <Row className = 'form-group'>
                                <Label htmlFor = "comment" md=  {2}> Comment</Label>
                                <Col md = {10}>
                                    <Control.textarea model = '.comment' rows = '12' className = 'form-control' id = 'comment' name ='comment'/>
                                </Col>
                            </Row>
                            <Button type = 'submit' color ='primary'>Send</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                </div>
                )
        }
    }

    function DishDetail({dish,comments,postComment,isLoading,errMess}){
        //reassigning dish into a local constant.
        const dishc = dish;

        //defining a variable r, which will be the returned JSX of this class;
        var r = null;
        if(isLoading){
            return(<div className = 'container'>
                <div className = 'row'>
                <Loading/>
                </div>
            </div>)
        }
        else if (errMess) {
            return(
                <div className = 'container'>
                    <div className = 'row'>
                        <h4>{dish.errMess}</h4>
                    </div>
                </div>
            )
        }
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
                                    <CardImg width = "20%" src = {baseUrl+ dishc.image} alt = {dishc.name}/>
                                    <CardBody>
                                        <CardTitle>{dishc.name}</CardTitle>
                                        <CardText>{dishc.description}</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className = "col-10 col-md-7 ml-4 mt-0">
                                <h5>Comments</h5>
                                {cmts}
                                <CommentForm postComment = {postComment} dishId = {dish.id}/>
                            </div>
                        </div>
                </div>
            );}
        return(r);
    }


export default DishDetail;
