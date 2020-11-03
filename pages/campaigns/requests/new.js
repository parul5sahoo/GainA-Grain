import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';
import web3 from '../../../ethereum/web3';
import Campaign from '../../../ethereum/campaign';

class RequestNew extends Component {
 state = {
   value: '',
   description: '',
   recipient: '',
   loading: false,
   errorMessage: ''
 };



    static async getInitialProps(props) {
      const { address } = props.query;

      return { address };
    }

   onSubmit = async event => {
     event.preventDefault();

     const campaign = Campaign(this.props.address);
    const { description, value, recipient } = this.state;
    this.setState({ loading: true, errorMessage: '' });
    try{
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.createRequest(
        description,
        web3.utils.toWei(value, 'ether'),
        recipient
      ).send({ from: accounts[0] });

      Router.pushRoute(`/campaigns/${this.props.address}/requests`);

    }catch (err) {
        this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false});

   };

  render() {
    return (
       <Layout>
         <Link route={`/campaigns/${this.props.address}/requests`}>
           <a>
              Requests List
           </a>
         </Link>
         <h3> Create a request</h3>

         <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Field>
                 <label> Description </label>
                 <Input
                    value = {this.setState.description}
                    onChange= {event => this.setState({ description: event.target.value })}
                 />
            </Form.Field>
            <Form.Field>
                 <label> Value in Ether </label>
                 <Input
                    value = {this.setState.value}
                    onChange= {event => this.setState({ value: event.target.value })}
                  />
            </Form.Field>
            <Form.Field>
                 <label> Recipient </label>
                 <Input
                   value = {this.setState.recipient}
                   onChange= {event => this.setState({ recipient: event.target.value })}
                 />
            </Form.Field>

             <Message error header="Oops!" content={this.state.errorMessage} />
           <Link>
            <a>
              <Button primary loading={this.state.loading}> Submit Request </Button>
            </a>
          </Link>
        </Form>
       </Layout>
    );
  }
}

export default RequestNew;
