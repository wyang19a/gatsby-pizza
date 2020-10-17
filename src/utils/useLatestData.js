import { useEffect, useState } from 'react';

export default function useLatestData() {
  // hot slices
  const [hotSlices, setHotSlices] = useState([]);
  // slicemasters
  const [slicemasters, setSlicemasters] = useState([]);
  // Use a side effect to fetch the data from graphQL endpoint

  useEffect(() => {
    // fetch the data when component loads
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        query {
          StoreSettings(id: "downtown") {
            name
            slicemasters {
              name
            }
            hotSlices {
              name
            }
          }
        }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // TODO: Check for errors

        setHotSlices(res.data.StoreSettings.hotSlices);
        setSlicemasters(res.data.StoreSettings.slicemasters);
      })
      .catch();
  }, []);
  return {
    hotSlices,
    slicemasters,
  };
}
