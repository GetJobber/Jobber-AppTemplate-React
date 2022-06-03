import { gql, useQuery } from "@apollo/client";

export const GET_ACCOUNT_INFO_QUERY = gql`
  query GetAccountInfo {
    account {
      id
      name
    }
  }
`;

const useAccount = () => {
  const result = useQuery(GET_ACCOUNT_INFO_QUERY);

  return result;
};

export default useAccount;
