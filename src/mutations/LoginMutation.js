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
const GET_VOTED_IN = gql `
query($id:ID) {
  getBallotsVoted(electionId:$id)
}
`;



export const LoginMutation = (props)=>{

  return <Query query={GET_VOTED_IN} variables={{id:props.match.params.ballotId}}>
    {({data,loading,error}) => {
      if (loading) {
        return null;
      }
      if (error) {
        console.log(error);
        return null;
      }
      const finishLogin= (result)=>{
        console.log("Routing to Votes",result);
        console.log("arrayOfBallots",data);
        console.log("compare",result.simpleLogin.id,data.getBallotsVoted,data.getBallotsVoted.includes(result.simpleLogin.id));
        if(result.simpleLogin.authToken && !data.getBallotsVoted.includes(result.simpleLogin.id)){
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
    }}

  </Query>
}
