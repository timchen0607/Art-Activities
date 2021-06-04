const data = () => {
  const url =
    "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindFestivalTypeJ";
  return fetch(url).then((res) => res.json());
}

export { data }