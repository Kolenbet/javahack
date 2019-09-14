import React from "react";
import { Route, Switch } from "react-router";

import App from "./App";
import Auth from "./pages/auth/container";
import Search from "./pages/search/container";
import Result from "./pages/result/container";
import History from "./pages/history/container";
import Providers from "./pages/providers/container";
import Settings from "./pages/settings_page/container";

export default function (store) {
  console.log(store);

  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/auth" component={Auth} />
      <Route path="/search" component={Search} />
      <Route path="/result" component={Result} />
      <Route path="/history" component={History} />
      <Route path="/providers" component={Providers} />
      <Route path="/settings" component={Settings} />
    </Switch>
  )
};
