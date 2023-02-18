import PropTypes from "prop-types";
import { useEffect } from "react";

function DataFetcher({ url, onData, onError }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        onData(data);
      } catch (error) {
        onError(error);
      }
    };
    fetchData();
  }, [url, onData, onError]);

  return null;
}

DataFetcher.propTypes = {
  url: PropTypes.string.isRequired,
  onData: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

export default DataFetcher;
