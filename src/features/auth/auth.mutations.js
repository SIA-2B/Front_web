import { gql } from "@apollo/client";

export const GET_TOKEN = gql`
mutation getToken($parameter: AuthInput!){
    createAuth(auth:$parameter){
      token    
    }
  }
`;

