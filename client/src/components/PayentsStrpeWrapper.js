
import React, {Component} from 'react'
import StripeCheckout from "react-stripe-checkout"
import {connect}from 'react-redux'
import * as asctions from '../actions'

class PaymentStripeWrapper extends Component{

    render(){
        
        return(
            <StripeCheckout 
            amount = {500}
            token = {(tkn) => {
                
                console.log(tkn);
                this.props.handleToken(tkn)
            }}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            name="Emaily"
            description ="$5 to create five survey credit"
            >
            
            <button className="btn">ADD CREDITS</button>
            </StripeCheckout>
        );
    }


} 

export default connect(null,asctions) (PaymentStripeWrapper);