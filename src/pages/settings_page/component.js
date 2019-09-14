import React, { Component } from "react";

import { getSettings } from "./api/getSettings";

import {
  Wrap,
  Header,
  Description,
  Title,
  Subtitle,
  Block,
  Input,
  Button
} from "./styled";

export default class Settings extends Component {
  state = {
    email: "",
    phone: ""
  };
  componentDidMount() {
    getSettings()
      .then(data => this.setState(data));
  }

  render() {
    const { email, phone } = this.state;

    return (
      <Wrap>
        <Header>Автозакупки</Header>
        <Description>
          Наш сервис поможет вам найти нужного поставщика, автоматически
          обзвонив все релевантные компании в поисках того, что вы ищете
        </Description>
        <Title>Мой аккаунт</Title>
        <Block>
          <Subtitle>Ваш email для отправки ответов</Subtitle>
          <Input
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            placeholder="Введите email"
          />
          <Subtitle>Ваш телефон для переадресации</Subtitle>
          <Input
            value={phone}
            onChange={e => this.setState({ phone: e.target.value })}
            placeholder="Ваш телефон"
          />
          <Button onClick={() => {}}>Обновить мои данные</Button>
        </Block>
      </Wrap>
    );
  }
}
