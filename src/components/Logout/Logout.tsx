import { useHistory } from 'react-router-dom';
import { Routes } from '~/constants';

const Logout = ({username}) => {
  const {push} = useHistory();
  const logout = () => {
    localStorage.removeItem('token');
    push(Routes.Login);
  }

  return (
    <button onClick={logout}>{`Logout ${username}`}</button>
  )
}

export default Logout