import { FC } from 'react';
import { Routes } from '~/constants';
import { IItem } from '~/services/getUserItems';
import FilterTab from './components/FilterTab'

import './filter-style.scss';
import { getWeakPasswordsCount } from '~/utils/weakPassword';
import { getReusedPasswordsCount } from '~/utils/reusedPassword';
import { getOldPasswordsCount } from '~/utils/oldPassword';

interface IFilter {
  items: Array<IItem>;
}

const Filter: FC<IFilter> = ({items}) => {
  const weakItemsCount = getWeakPasswordsCount(items);
  const reusedItemsCount = getReusedPasswordsCount(items);
  const oldItemsCount = getOldPasswordsCount(items);

  return (
    <div className="filter">
      <FilterTab title="Weak" count={weakItemsCount} path={Routes.Weak}/>
      <FilterTab title="Reused" count={reusedItemsCount} path={Routes.Reused}/>
      <FilterTab title="Old" count={oldItemsCount} path={Routes.Old}/>
    </div>
  );
};

export default Filter;
