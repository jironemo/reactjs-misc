import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetail';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import About from './AboutComponent';
import {fetchLeaders,postComment,fetchDishes,fetchComments,fetchPromos,postFeedback} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';
const mapStateToProps = (state) =>{
  return {
    dishes:  state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,

  }
}


const mapDispatchToProps = (dispatch) =>({
  postComment: (dishId,rating,author,comment) => dispatch(postComment(dishId,rating,author,comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  postFeedback: (firstname,lastname,telnum,email,agree,contactType,message,date) => dispatch(postFeedback(firstname,lastname,telnum,email,agree,contactType,message,date)),
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () => {dispatch(fetchPromos())},
  fetchLeaders: () => {dispatch(fetchLeaders())},
  resetFeedbackForm: ()=> {dispatch(actions.reset('feedback'))},
  })

class Main extends Component {

  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  render() {

    const DishWithId = ({match}) => {
      var r = null;
      if (this.props.dishes.dishes != null){
        r = (
            <DishDetail dish= {this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
             postComment = {this.props.postComment}
            isLoading = {this.props.dishes.isLoading}

            commentserrMess = {this.props.comments.errMess}
            errMess = {this.props.dishes.errMess}
            comments= {this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            
      );
      }
      else r = (<div className = 'container'><h1>ERROR: Dish Unavailable</h1></div>);
      return(r);
    }
	  const HomePage = () =>{

      console.log("leader:"+JSON.stringify(this.props.leaders.leaders));
      return(
			  <Home dish= {this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotions.promotions.filter((promotion) => promotion.featured === true)[0]}
        leader = {this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
        leaderLoading = {this.props.leaders.isLoading} leadererrMess = {this.props.leaders.errMess}
        dishesLoading = {this.props.dishes.isLoading} disheserrMess = {this.props.dishes.errMess}
        promosLoading = {this.props.promotions.isLoading} promoserrMess = {this.props.promotions.errMess}
      />
		  )
	  }
    return (
      <div>
        <Header/>
			<Switch>
				<Route path = "/home" component = {HomePage}/>
				<Route exact path = "/menu" component = {() => <Menu dishes = {this.props.dishes}/>}/>
				<Route path = "/contactus" component = {() => <Contact postFeedback = {this.props.postFeedback} resetFeedbackForm = {this.props.resetFeedbackForm}/>}/>
        <Route path = "/aboutus" component = {() => <About leaders = {this.props.leaders.leaders}/>}/>
        <Route path = "/menu/:dishId" component = {DishWithId}/>
				<Redirect to = "/home"/>
			</Switch>
		<Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));