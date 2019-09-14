import React, { Component } from "react";

import { Wrap, Logo, MenuItem, Menu, MenuItemLogo } from "./styled";
import routes from "./routes";
import logo from './assets/raif.png';

export default class MenuView extends Component {
  render() {
    return (
      <Wrap>
        <Logo logo={logo} />
        <Menu>
          {routes.map(item => {
            const isSelected = item.path === window.location.pathname;

            return (
              <MenuItem
                key={item.path}
                onClick={() => this.props.history.push(item.path)}
                selected={isSelected}
              >
                <MenuItemLogo icon={isSelected ? item.activeIcon : item.inactiveIcon}/>
                {item.title}
              </MenuItem>
            );
          })}
        </Menu>
      </Wrap>
    );
  }
}
