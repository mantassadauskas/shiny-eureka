import List from './components/List/List';
import useItemsProvider from './useItemsProvider';
import ErrorBlock from '../ErrorBlock';
import Filter from './components/Filter/Filter';
import LoadingScreen from '../LoadingScreen';
import Header from './components/Header/Header';
import {Route, Switch} from "react-router-dom";
import {Routes} from '~/constants';
import { weakPassword } from "~/utils/weakPassword";
import { reusedPassword } from "~/utils/reusedPassword";
import { oldPassword } from '~/utils/oldPassword';
import { useUserContext } from '../UserContext';

const PasswordHealth = () => {
  const {
    errorMessage: userProviderErrorMessage,
    isLoading: userDataIsLoading,
    username,
  } = useUserContext();

  const {
    items,
    isLoading,
    errorMessage,
  } = useItemsProvider();

  if (isLoading || userDataIsLoading) {
    return <LoadingScreen/>
  }

  if (userProviderErrorMessage || errorMessage) {
    return <ErrorBlock error={userProviderErrorMessage || errorMessage}/>
  }

  return (
    <div className="container">
      <Header items={items} username={username} />
      <Filter items={items}/>
      <Switch>
        <Route exact path={Routes.PasswordHealth}>
          <List items={items}/>
        </Route>
        <Route path={Routes.Weak}>
          <List items={items.filter(weakPassword)}/>
        </Route>
        <Route path={Routes.Reused}>
          <List items={items.filter((item) => reusedPassword(item, items))}/>
        </Route>
        <Route path={Routes.Old}>
          <List items={items.filter((item) => oldPassword(item, items))}/>
        </Route>
      </Switch>
    </div>
  );
};

export default PasswordHealth;
