import React,{Component} from 'react';
import {Breadcrumb,BreadcrumbItem,Button,Form,FormGroup,Label,Input,Col,FormFeedback} from 'reactstrap';
import {Link} from 'react-router-dom';


class Contact extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            telnum:'',
            email:'',
            agree:false,
            contactType:'Tel.',
            message:'',
            touched:{
                firstName: false,
                lastName: false,
                telnum:false,
                email:false
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange(event){
        const target = event.target;

        const value = target.type === 'checkbox' ? target.checked: target.value;
        const name = target.name;
        this.setState({
            [name] : value
        });
    }


    handleSubmit(event){
        console.log('Current State:' + JSON.stringify(this.state));
       // alert(JSON.stringify(this.state));
        event.preventDefault();
    }

    handleBlur = (field) => (evt) =>{
        this.setState({
            touched:{...this.state.touched,[field]:true}
        });
    }

    validate(firstName,lastName,telnum,email){
        const errors = {
            firstName:'',
            lastName:'',
            telnum:'',
            email:''
        };
        
        ///firstname check
        if(this.state.touched.firstName && firstName.length < 3)
            errors.firstName = 'First Name should be more than 2 characters';
        else if (this.state.touched.firstName && firstName.length > 10)
            errors.firstName = 'First Name should not be more than 10 characters';

            ///lastname
        if(this.state.touched.lastName && lastName.length < 3)
            errors.lastName = 'Last Name should be more than 2 characters';
        else if (this.state.touched.lastName && lastName.length > 10)
            errors.lastName = 'Last Name should not be more than 10 characters';
        

        //telNum

        const reg = /^\d+$/;
        if(this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';
        
        if(this.state.touched.email && email.split('').filter(x=> x ==='@').length !== 1)
            errors.email = 'Invalid Email format.'
        return errors;
    }

    render(){
        
        const errors = this.validate(this.state.firstName,this.state.lastName,this.state.telnum,this.state.email);


        return(
            <div className="container">

                <div className ="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to= '/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active> Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    {/**/}
                    
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href = "https://www.facebook.com"><i className="fa fa-facebook"></i> Facebook</a>
                            <a role="button" className="btn btn-success" href="https://www.instagram.com"><i className="fa fa-instagram"></i> Instagram</a>
                        </div>
                        <div className = "row row-content">
                            <div className = "col-12">
                                <h3>Send us your Feedback</h3>
                            </div>
                            <div className = "col-12 col-md-9">
                                <Form onSubmit = {this.handleSubmit}>
                                    <FormGroup row>
                                        <Label htmlFor = 'firstname' md = {2}>First Name</Label>
                                        <Col md = {10}>
                                            <Input type ="text" id = 'firstname' name = 'firstName'
                                            placeholder = 'First Name' value = {this.state.firstName} 
                                            valid = {errors.firstName === ''}
                                            invalid = {errors.firstName !== ''}
                                            onChange = {this.handleInputChange} onBlur = {this.handleBlur('firstName')}/>
                                            <FormFeedback>
                                                {errors.firstName}
                                            </FormFeedback>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor = 'lastname' md = {2}>Last Name</Label>
                                        <Col md = {10}>
                                            <Input type ="text" id = 'lastname' name = 'lastName'
                                            placeholder = 'Last Name' value = {this.state.lastName} 
                                            onChange = {this.handleInputChange} onBlur = {this.handleBlur('lastName')}
                                            valid = {errors.lastName === ''}
                                            invalid = {errors.lastName !== ''}/>
                                            <FormFeedback>
                                                {errors.lastName}
                                            </FormFeedback>

                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor = 'telnum' md = {2}>Phone Number</Label>
                                        <Col md = {10}>
                                            <Input type ="text" id = 'telnum' name = 'telnum'
                                            placeholder = 'Tel. Number' value = {this.state.telnum} 
                                            valid = {errors.telnum === ''}
                                            invalid = {errors.telnum !== ''}
                                            onChange = {this.handleInputChange} onBlur = {this.handleBlur('telnum')}/>
                                            <FormFeedback>
                                                {errors.telnum}
                                            </FormFeedback>

                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor = 'email' md = {2}>Email</Label>
                                        <Col md = {10}>
                                            <Input type ="text" id = 'email' name = 'email'
                                            placeholder = 'Email' value = {this.state.email} 
                                            onChange = {this.handleInputChange}
                                            valid = {errors.email === ''}
                                            invalid = {errors.email !== ''}
                                            onBlur = {this.handleBlur('email')}/>
                                            <FormFeedback>
                                                {errors.email}
                                            </FormFeedback>

                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={{size:6, offset:2}}>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type = "checkbox" name = "agree" checked = {this.state.agree} onChange = {this.handleInputChange}/>{' '}
                                                    <strong> May we contact you?</strong>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col md={{size:3, offset:1}}>
                                            <Input type = "select" name = "contactType" value = {this.state.contactType} onChange = {this.handleInputChange}>
                                                <option>Tel.</option>
                                                <option>Email</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor = 'feedback' md ={2}> Your FeedBack</Label>
                                        <Col md = {10}>
                                            <Input type = "textarea" id = 'message' name = 'message' 
                                            rows = '12'
                                            value = {this.state.message} onChange = {this.handleInputChange}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md= {{size:10, offset:2}}>
                                            <Button type = 'submit' color = 'primary'>
                                                Send Feedback
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;