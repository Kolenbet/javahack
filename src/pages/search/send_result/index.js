import React, { Component } from "react";
import QRCode from "qrcode.react";
import queryString from "query-string";

import { historyQueries } from "../api/historyQueries";
import { updateSuppliers } from "../api/updateSuppliers";

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

export default class SendResult extends Component {  state = {};
  state = {
    queryString: "",

  }

  componentDidMount() {
    const queryUid = queryString.parse(window.location.search).queryUid;

    historyQueries(queryUid).then(data => {
      console.log(1, data);
      this.setState({queryString: data.queryString});
    });

    setInterval(() => {
      updateSuppliers(queryUid).then(data => {
        console.log(2, data);
        this.setState({suppliers: data});
      });
    }, 5000);
  }

  render() {
    console.log(this.state);
    const {queryString, suppliers} = this.state;
    return (
      <div>
        <Request>
          <Text>Запрос:</Text>
          <Input disabled value={queryString} />
        </Request>
        <Title>
          Результаты рассылки
        </Title>
        {suppliers ? suppliers.map(item => (
          <Supplier key={item.url}>
            <Info>
              <AboutCompany>
                {item.phone && <QRCode value={item.phone} />}
                <Contacts>
                  <Name>{item.name}</Name>
                  <Phone>{item.phone}</Phone>
                  <Email>{item.email}</Email>
                  <Site>{item.url}</Site>
                </Contacts>
              </AboutCompany>
            </Info>
            <Resource>
              {item.status === "OK_ITEM" && <Good>У них есть товар</Good>} 
              {item.status === "NO_ITEM" && <Bad>Нет товара</Bad>}
              {item.status === "NO_RESPONSE" && <Bad>Нет ответа</Bad>}
            </Resource>
          </Supplier>
        )) :
        <div>loading</div>}
      </div>
    );
  }
}
