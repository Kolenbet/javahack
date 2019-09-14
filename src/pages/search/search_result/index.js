import React, { Component } from "react";
import QRCode from "qrcode.react";

import {
  Request,
  Text,
  Input,
  Title,
  Supplier,
  Info,
  Resource,
  AboutCompany,
  ContactTypes,
  ContactCheckbox,
  ContactType,
  Contacts,
  Name,
  Phone,
  Email,
  Site,
  Good,
  Bad,
  Button
} from "./styled";

export default class SearchResult extends Component {
  render() {
    return (
      <div>
        <Request>
          <Text>Запрос:</Text>
          <Input disabled value={"efef"} />
        </Request>
        <Title>
          Результаты поиска (на основе {[].map(item => `${item}, `)})
        </Title>
        {[
          {
            email: "string",
            name: "string",
            phone: "string",
            url: "string"
          },
          {
            email: "string",
            name: "string",
            phone: "string",
            url: "string"
          },
          {
            email: "string",
            name: "string",
            phone: "string",
            url: "string"
          },
          {
            email: "string",
            name: "string",
            phone: "string",
            url: "string"
          },
          {
            email: "string",
            name: "string",
            phone: "string",
            url: "string"
          },
        ].map((item, index) => (
          <Supplier key={item.url}>
            <Info>
              <AboutCompany>
                <QRCode value={"89277476998"} />
                <Contacts>
                  <Name>{item.name}</Name>
                  <Phone>{item.phone}</Phone>
                  <Email>{item.email}</Email>
                  <Site>{item.url}</Site>
                </Contacts>
              </AboutCompany>
              <ContactTypes>
                <ContactType onClick={() => console.log(22)}>
                  <ContactCheckbox />
                  Автоматический обзвон
                </ContactType>
                <ContactType onClick={() => console.log(22)}>
                  <ContactCheckbox />
                  Автоматическая email рассылка
                </ContactType>
                <ContactType onClick={() => console.log(22)}>
                  <ContactCheckbox />
                  Автоматическая рассылка в мессенджеры
                </ContactType>
              </ContactTypes>
            </Info>
            <Resource>
              {index === 0 ? (
                <Good>Проверенный сайт</Good>
              ) : (
                <Bad>Потенциально опасный сайт</Bad>
              )}
            </Resource>
          </Supplier>
        ))}
        <Button onClick={() => this.props.onSend({})}>Запустить рассылку</Button>
      </div>
    );
  }
}
