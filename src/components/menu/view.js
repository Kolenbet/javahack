import React, { Component } from 'react'

import { Wrap, Logo, MenuItem, Menu } from "./styled";
import routes from "./routes";

const logo = require('./assets/logo.svg');

export default class MenuView extends Component {
  render() {
    console.log(routes);

    return (
      <Wrap>
        <Logo logo={logo}/>
        <Menu>
          {routes.map(item => 
            <MenuItem key={item.path} selected={item.path === window.location.pathname}>
              {item.title}
            </MenuItem>
          )}
        </Menu>
      </Wrap>
    )
  }
}
