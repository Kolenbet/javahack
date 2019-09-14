import searchActiveLogo from './assets/search-active.png';
import searchLogo from './assets/search.png';

import searchResultActiveLogo from './assets/search-results-active.png';
import searchResultLogo from './assets/search-results.png';

import historyActiveLogo from './assets/history-active.png';
import historyLogo from './assets/history.png';

import providersActiveLogo from './assets/excel-active.png';
import providersLogo from './assets/excel.png';

import settingsActiveLogo from './assets/settings-active.png';
import settingsLogo from './assets/settings.png';

export default [
  {
    path: "/search",
    title: "Поиск",
    activeIcon: searchActiveLogo,
    inactiveIcon: searchLogo
  },
  {
    path: "/result",
    title: "Результаты поиска",
    activeIcon: searchResultActiveLogo,
    inactiveIcon: searchResultLogo
  },
  {
    path: "/history",
    title: "История поиска",
    activeIcon: historyActiveLogo,
    inactiveIcon: historyLogo
  },
  {
    path: "/providers",
    title: "Моя база поставщиков",
    activeIcon: providersActiveLogo,
    inactiveIcon: providersLogo
  },
  {
    path: "/settings",
    title: "Настройки",
    activeIcon: settingsActiveLogo,
    inactiveIcon: settingsLogo
  },
];