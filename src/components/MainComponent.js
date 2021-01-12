import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetail';
import { DISHES } from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
import About from './AboutComponent';
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments:COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
    };
  }

  render() {

    const DishWithId = ({match}) => {
      var r = null;
      var selecteddish = this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0];
      if (selecteddish != null){
        r = (
            <DishDetail dish= {selecteddish}
            comments= {this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
      }
      else r = (<h1>ERROR</h1>);
      return(r);
    };

	  const HomePage = () =>{
		  return(
			  <Home dish={this.state.dishes.filter((dish) => dish.featured === true)[0]}
        promotion={this.state.promotions.filter((promotion) => promotion.featured === true)[0]}
        leader = {this.state.leaders.filter((leader) => leader.featured === true)[0]}
        />
		  )
	  }
    return (
      <div>
        <Header/>
			<Switch>
				<Route path = "/home" component = {HomePage}/>
				<Route exact path = "/menu" component = {() => <Menu dishes = {this.state.dishes}/>}/>
				<Route path = "/contactus" component = {Contact}/>
        <Route path = "/aboutus" component = {() => <About leaders = {this.state.leaders}/>}/>
        <Route path = "/menu/:dishId" component = {DishWithId}/>
				<Redirect to = "/home"/>
			</Switch>
		<Footer/>
      </div>
    );
  }
}

export default Main;