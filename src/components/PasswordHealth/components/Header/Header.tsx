import React, { FC } from 'react';
import { IItem } from '~/services/getUserItems';

import './header-style.scss';
import Logout from '~/components/Logout/Logout';

interface IHeader {
  items: Array<IItem>;
  username: string;
}

const Header: FC<IHeader> = ({items, username}) => {
  return (
    <div className="header">
      <div className="user-section">
        <Logout username={username}/>
      </div>
      <h1>{`${items.length} Items are vulnerable`}</h1>
      <span>Create new complex passwords to protect your accounts</span>
    </div>
  )
};

export default Header;

