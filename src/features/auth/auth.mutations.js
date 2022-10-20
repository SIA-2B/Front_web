import { gql } from "@apollo/client";

export const GET_TOKEN = gql`
mutation{
    createAuth(auth:{
      username:"developer",
      password:"developer",
    }){
      token    
    }
  }
`;