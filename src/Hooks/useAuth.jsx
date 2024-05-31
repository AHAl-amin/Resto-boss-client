import  { useContext } from 'react';
import { AuthContext } from '../providers/Authprovider';
import UseAxiousSequre from './UseAxiousSequre';

const useAuth = () => {

    const axiosSecure = UseAxiousSequre();
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;