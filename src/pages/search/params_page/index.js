import React, { Component } from "react";

import SearchInput from "../blocks/SearchInput";
import CheckItem from "../blocks/CheckItem";
import AddFile from "../blocks/AddFile";

import yandexLogo from "../assets/yandex.png";
import googleLogo from "../assets/google.png";
import avitoLogo from "../assets/avito.png";

import phoneLogo from "../assets/phone.png";
import emailLogo from "../assets/email.png";
import chatLogo from "../assets/chat.png";

import {
  Wrap,
  Title,
  Button,
  Input,
  CheckItemWrap
} from "./styled";

const searchSrc = [
  {
    key: "yandex",
    img: yandexLogo
  },
  {
    key: "google",
    img: googleLogo
  },
  {
    key: "avito",
    img: avitoLogo
  }
];

const howToSearchSrc = [
  {
    key: "phone",
    img: phoneLogo,
    description: "Автоматический обзвон"
  },
  {
    key: "email",
    img: emailLogo,
    description: "Автоматическая email рассылка"
  },
  {
    key: "chat",
    img: chatLogo,
    description: "Спросить в мессенджере"
  }
];

export default class Search extends Component {
  state = {
    searchQuery: "",
    engines: [],
    contactType: [],
    message: "",
    file: ""
  };

  onCheck = (arrName, item) => {
    const arr = this.state[arrName];
    const index = arr.indexOf(item.key) !== -1;

    if (index) {
      arr.splice(arr.indexOf(item.key), 1);
    } else {
      arr.push(item.key);
    }

    this.setState({ [arrName]: arr });
  };

  componentDidMount() {
    document.querySelector('#file-upload').addEventListener('change', function() {
      const reader = new FileReader();
      console.log('tests');
      reader.onload = function() {
        const arrayBuffer = this.result;
        const array = new Uint8Array(arrayBuffer);
        const binaryString = String.fromCharCode.apply(null, array);

        console.log(binaryString);
      }
      console.log(1);
      // reader.readAsArrayBuffer(this.files[0]);
    }, false);
  }

  render() {
    const { searchQuery, engines, contactType, message, file } = this.state;
    console.log(this.state);
    return (
      <Wrap>
        <SearchInput query={searchQuery} onChange={e => this.setState({searchQuery: e.target.value})} />

        <Title>Где искать?</Title>
        <CheckItemWrap>
          {searchSrc.map(item => (
            <CheckItem
              key={item.key}
              checked={engines.indexOf(item.key) !== -1}
              item={item}
              onClick={() => this.onCheck("engines", item)}
            />
          ))}
        </CheckItemWrap>

        <Title>Как искать?</Title>
        <CheckItemWrap>
          {howToSearchSrc.map(item => (
            <CheckItem
              key={item.key}
              checked={contactType.indexOf(item.key) !== -1}
              item={item}
              onClick={() => this.onCheck("contactType", item)}
            />
          ))}
        </CheckItemWrap>

        <Title>Что спрашивать?</Title>
        <Input
          type="text"
          value={message}
          onChange={val => this.setState({ message: val.target.value })}
          placeholder="Напишите свой запрос в это поле"
          multiple
        />

        <Title>Прикрепить файл к email рассылке?</Title>
        <AddFile
          value={file}
          onChange={e => {
            const reader = new FileReader();
            reader.onload = function() {
              const arrayBuffer = this.result;
              const array = new Uint8Array(arrayBuffer);
              const binaryString = String.fromCharCode.apply(null, array);

              console.log(binaryString);
            };
            // console.log(reader.readAsArrayBuffer(this.files[0]));

            this.setState({ file: e.target.value });
          }}
        />

        <Button onClick={() => this.props.onSend()}>Запустить поиск</Button>
      </Wrap>
    );
  }
}
