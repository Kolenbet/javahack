import React, { Component } from 'react'

import { Wrap } from './styled';
import Menu from '../menu/view';

export default class Wrapper extends Component {
  render() {
    return (
      <Wrap>
        <Menu history={this.props.history}/>
        {this.props.children}
      </Wrap>
    )
  }
}
