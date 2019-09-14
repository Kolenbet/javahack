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
  Contacts,
  Name,
  Phone,
  Email,
  Site,
  Good,
  Bad
} from "./styled";

export default class SendResult extends Component {
  render() {
    return (
      <div>
        <Request>
          <Text>Запрос:</Text>
          <Input disabled value={"efef"} />
        </Request>
        <Title>
          Результаты рассылки
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
            </Info>
            <Resource>
              {index === 0 ? (
                <Good>У них есть товар</Good>
              ) : (
                <Bad>Нет ответа</Bad>
              )}
            </Resource>
          </Supplier>
        ))}
      </div>
    );
  }
}
