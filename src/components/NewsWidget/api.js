const fetchStories = () => {
  const url =
    "http://newsapi.org/v2/top-headlines?" +
    "country=gb&" +
    "apiKey=1575da26f7074c878245144fc359c3f8";

  const req = new Request(url);

  const response = fetch(req);

  return response;
};

export default fetchStories;
