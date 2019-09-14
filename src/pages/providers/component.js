import React, { Component } from "react";

import {
  Wrap,
  Header,
  Description,
} from "./styled";

export default class Providers extends Component {
  render() {
    return (
      <Wrap>
        <Header>Автозакупки</Header>
        <Description>
          Наш сервис поможет вам найти нужного поставщика, автоматически
          обзвонив все релевантные компании в поисках того, что вы ищете
        </Description>
      </Wrap>
    );
  }
}
