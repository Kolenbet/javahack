import React, { Component } from "react";

import ParamsPage from "./params_page";
import SearchResult from "./search_result";
import SendResult from "./send_result";

import { Wrap, Header, Description, Breadcrumbs, Breadcrumb, BreadcrumbWrap, BreadcrumbText } from "./styled";

const steps = [
  "Параметры поиска",
  "Результаты поиска",
  "Результаты рассылки"
];

export default class Search extends Component {
  state = {
    currentStep: 0
  };

  render() {
    const { currentStep } = this.state;
    console.log(this.state);
    return (
      <Wrap>
        <Header>Автозакупки</Header>
        <Description>
          Наш сервис поможет вам найти нужного поставщика, автоматически
          обзвонив все релевантные компании в поисках того, что вы ищете
        </Description>
        <Breadcrumbs>
        {steps.map((item, index) => {
          const filled = currentStep >= index;

          return <BreadcrumbWrap key={item} onClick={() => filled && this.setState({currentStep:index})}>
            <Breadcrumb last={index===(steps.length-1)} filled={filled}>{index+1}</Breadcrumb>
            <BreadcrumbText filled={filled}>{item}</BreadcrumbText>
          </BreadcrumbWrap>}
        )}
        </Breadcrumbs>
        {currentStep === 0 && <ParamsPage onSend={(data) => {
          this.setState({currentStep: 1});
        }}/>}
        {currentStep === 1 && <SearchResult />}
        {currentStep === 2 && <SendResult />}
      </Wrap>
    );
  }
}
