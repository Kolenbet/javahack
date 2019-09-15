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
  Button,
  Background
} from "./styled";

export default class SearchResult extends Component {
  render() {
    const { engines, queryString, suppliers, setState } = this.props;
    return (
      <div>
        <Request>
          <Text>Запрос:</Text>
          <Input disabled value={queryString} />
        </Request>
        <Title>
          Результаты поиска (на основе{" "}
          {engines.map(
            (item, index) => `${item}${index < engines.length - 1 ? ", " : ""}`
          )}
          )
        </Title>
        {suppliers.map((item, index) => (
          <Supplier key={item.url}>
            <Info>
              <AboutCompany>
                <QRCode value={item.phone || "no_data"} />
                <Contacts>
                  <Name>{item.name}</Name>
                  <Phone>{item.phone}</Phone>
                  <Email>{item.email}</Email>
                  <Site>{item.url}</Site>
                </Contacts>
              </AboutCompany>
              <ContactTypes>
                <ContactType
                  onClick={() => {
                    let newsup = suppliers.map(supp => {
                      if (item.supplierUid === supp.supplierUid) {
                        console.log(item, supp);
                        const contactTypes = supp.contactTypes;
                        const indexOf =
                          contactTypes.indexOf("CALL") !== -1;
                        if (indexOf) {
                          contactTypes.splice(suppliers.indexOf(supp.key), 1);
                        } else {
                          contactTypes.push("CALL");
                        }
                        return {...item, contactTypes}
                      } else return item
                    });
                    console.log(newsup);
                    setState({suppliers: newsup});
                  }}
                >
                  <ContactCheckbox
                    active={item.contactTypes.indexOf("CALL") !== -1}
                  />
                  Автоматический обзвон
                </ContactType>
                <ContactType onClick={() => console.log(22)}>
                  <ContactCheckbox
                    active={item.contactTypes.indexOf("EMAIL") !== -1}
                  />
                  Автоматическая email рассылка
                </ContactType>
                <ContactType onClick={() => console.log(22)}>
                  <ContactCheckbox
                    active={item.contactTypes.indexOf("MESSENGER") !== -1}
                  />
                  Автоматическая рассылка в мессенджеры
                </ContactType>
              </ContactTypes>
            </Info>
            <Resource>
              {index === suppliers.length - 1 ? (
                <Good>Проверенный сайт</Good>
              ) : (
                <Bad>Потенциально опасный сайт</Bad>
              )}
            </Resource>
          </Supplier>
        ))}
        <Background>
          <Button
            disabled={!this.props.queryString}
            onClick={() =>
              this.props.onSend(
                suppliers.map(item => {
                  return {
                    supplierUid: item.supplierUid,
                    contactTypes: item.contactTypes
                  };
                })
              )
            }
          >
            Запустить рассылку
          </Button>
        </Background>
      </div>
    );
  }
}
