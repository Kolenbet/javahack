import React, { Component } from "react";

import {getHistory} from './api/getHistory';

import {
  Wrap,
  Header,
  Description,
  Title,
  Block,
  Request,
  Date,
  QueryString,
} from "./styled";

export default class History extends Component {
  state = {
    history: [],
  }

  componentDidMount() {
    getHistory()
      .then(data => {
        this.setState({history: data});
      })
  }
  
  render() {
    const {history} = this.state;
    return (
      <Wrap>
        <Header>Робозакупки</Header>
        <Description>
          Наш сервис поможет вам найти нужного поставщика, автоматически
          обзвонив все релевантные компании в поисках того, что вы ищете
        </Description>
        <Title>История поиска</Title>
        {history.reverse().map(item => 
          <Block key={item.queryUid} onClick={() => this.props.history.push(`/search?queryUid=${item.queryUid}`)}>
            <Request>Запрос: <QueryString>{item.queryString}</QueryString></Request>
            <Date>{item.createdDate}</Date>
          </Block>)}
      </Wrap>
    );
  }
}
