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



const mapStateToProps = (state) =>{
  return {
    dishes:  state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,

  }
}
class Main extends Component {

  render() {

    const DishWithId = ({match}) => {
      var r = null;
      var selecteddish = this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0];
      if (selecteddish != null){
        r = (
            <DishDetail dish= {selecteddish}
            comments= {this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
      }
      else r = (
        <div className = 'container'><h1>ERROR: Dish Unavailable</h1></div>);
      return(r);
    };

	  const HomePage = () =>{
		  return(

			  <Home dish={this.props.dishes.filter((dish) => dish.featured === true)[0]}
        promotion={this.props.promotions.filter((promotion) => promotion.featured === true)[0]}
        leader = {this.props.leaders.filter((leader) => leader.featured === true)[0]}
        />
		  )
	  }
    return (
      <div>
        <Header/>
			<Switch>
				<Route path = "/home" component = {HomePage}/>
				<Route exact path = "/menu" component = {() => <Menu dishes = {this.props.dishes}/>}/>
				<Route path = "/contactus" component = {Contact}/>
        <Route path = "/aboutus" component = {() => <About leaders = {this.props.leaders}/>}/>
        <Route path = "/menu/:dishId" component = {DishWithId}/>
				<Redirect to = "/home"/>
			</Switch>
		<Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));