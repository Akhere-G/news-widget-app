import { useState, useEffect, useCallback } from "react";
import { v4 } from "uuid";
import getStories from "./api";

const useNewsWidget = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [currentSource, setCurrentSource] = useState("");
  const [filteredStories, setFilteredStories] = useState([]);
  const [stories, setStories] = useState([]);
  const [sources, setSources] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      setLoading(true);

      try {
        const response = await getStories();
        const data = await response.json();
        const { articles } = data;

        const newStories = articles.map(article => {
          return {
            id: v4(),
            title: article.title,
            date: new Date(article.publishedAt).toLocaleDateString(),
            source: article.source.name,
            url: article.url,
          };
        });
        setStories(newStories);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStories();
  }, []);

  useEffect(() => {
    setSources(["All Sources", ...new Set(stories.map(story => story.source))]);
  }, [stories]);

  useEffect(() => {
    setCurrentSource(sources.length > 1 ? sources[0] : "");
  }, [sources]);

  useEffect(() => {
    setFilteredStories(prev => {
      const start = 0;
      const end = Math.min(page * 5, stories.length);

      let currentStories;

      if (currentSource === "All Sources") {
        currentStories = stories;
      } else {
        currentStories = stories.filter(
          story => story.source === currentSource
        );
      }
      currentStories = [...currentStories].slice(start, end);
      return currentStories;
    });
  }, [currentSource, stories, page]);

  useEffect(() => {
    setPage(1);
  }, [currentSource]);

  const showMoreStories = useCallback(() => {
    setPage(prev => prev + 1);
  }, []);

  return {
    filteredStories,
    page,
    sources,
    currentSource,
    setCurrentSource,
    showMoreStories,
    loading,
  };
};

export default useNewsWidget;
