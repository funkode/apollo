import React from 'react';
import gql from 'graphql-tag'
import {Mutation,Query} from  'react-apollo';
import {LoginFormComponent} from '../components/LoginFormComponent';
const LOGIN_MUTATION = gql `
mutation ($cred:Login){
  simpleLogin(cred:$cred)
}
`;



export const LoginMutation = (props)=>{
  const finishLogin= (result)=>{
    console.log("Routing to Votes",props);

    if(!result.simpleLogin){
      props.history.push('/campaign/'+ props.match.params.ballotId +'/VotePage');
    }else{
      //TODO NOTIFICATION
      console.log("BAD LOGIN");
    }

  };
  return <Mutation mutation={LOGIN_MUTATION} onCompleted={finishLogin}>
    {(login)=>{
      const submitLogin= (credentials)=>{
        return login(
          {
            variables:{cred:credentials}
          }
        )
      };
      console.log("",props.match.params);
      return<LoginFormComponent {...props} loginForm={submitLogin}/>
    }
  }
  </Mutation>
}
