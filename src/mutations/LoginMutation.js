import React from 'react';
import gql from 'graphql-tag'
import {Mutation,Query} from  'react-apollo';
import {LoginFormComponent} from '../components/LoginFormComponent';
const LOGIN_MUTATION = gql `
mutation ($cred:Login){
  simpleLogin(cred:$cred){
    id
    authToken
  }

}
`;



export const LoginMutation = (props)=>{
  const finishLogin= (result)=>{
    console.log("Routing to Votes",result);

    if(result.simpleLogin.authToken){
      props.history.push('/campaign/'+ props.match.params.ballotId+"/"+result.simpleLogin.id +'/VotePage');
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
