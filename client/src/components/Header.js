import React , { Component  } from 'react'
import {connect} from 'react-redux'
import Link from 'react-router-dom/Link';
import PayentsStrpeWrapper from './PayentsStrpeWrapper'
class Header extends Component{
    renderContext(){

        switch(this.props.auth){
            case null :
            return <li><a >Logging in...</a></li>;
            case false:
            return <li><a href="/auth/google">Log in with Google</a></li> ;
            default:
        return [
            <li key="1"><PayentsStrpeWrapper /></li>,
            <li key="3" style={{margin:'0 5px'}}>
            Credits:{this.props.auth.credits}
            </li>,

        <li key="2"><a href="/api/logout">Logout</a></li> ];
        }
    }


   render() {
       console.log("----",this.props)
    return(
        <nav>
            <div className="nav-wrapper">
      <Link to={
          this.props.auth ? '/surveys' : '/'

      } className="left brand-logo">Emaily</Link>
      <ul  className="right">
        {this.renderContext()}
        
      </ul>
    </div>
        </nav>
        
    );

   };
}

const mapStateToProps = (state) =>{

    return {

        auth:state.auth
    }



}
export default connect(mapStateToProps) (Header) ;