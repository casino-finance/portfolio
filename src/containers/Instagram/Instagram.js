import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Anchor from '../../components/UI/Anchor/Anchor';
import Title from '../../components/UI/Title/Title';
import InstaCard from '../../components/InstaCard/InstaCard';

const Cont = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled.h1`
  font: inherit;
  text-align: center;
`;

const Instagram = () => {
  const [data, setData] = useState({
    igData: [],
    loading: true,
    error: false,
  });

  useEffect(() => {
    const getData = async () => {
      if (data.loading) {
        await axios
          .get(
            'https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b&variables={"id":"427246549","first":9}',
          )
          .then((response) => {
            setData({
              ...data,
              igData: response.data.data.user.edge_owner_to_timeline_media.edges,
              loading: false,
            });
          })
          .catch((_error) => {
            setData({
              ...data,
              loading: false,
              error: true,
            });
          });
      }
    };

    getData();
  });

  const prepareProps = (i) => {
    return {
      img: data.igData[i].node.thumbnail_src,
      alt: data.igData[i].node.edge_media_to_caption.edges[0].node.text,
      link: `https://www.instagram.com/p/${data.igData[i].node.shortcode}`,
      likes: data.igData[i].node.edge_media_preview_like.count,
    };
  };

  let instagramOutput = <Text>Loading Instagram post.</Text>;

  if (data.error) {
    instagramOutput = <Text>Ouch, something went wrong!</Text>;
  }

  if (!data.loading && data.igData.length > 0) {
    instagramOutput = (
      <>
        <Anchor id="instagram" />
        <Title>{'{ instagram }'}</Title>
        <Cont>
          <InstaCard cardData={prepareProps(0)} />
          <InstaCard cardData={prepareProps(1)} />
          <InstaCard cardData={prepareProps(2)} />
        </Cont>
        <Cont>
          <InstaCard cardData={prepareProps(3)} />
          <InstaCard cardData={prepareProps(4)} />
          <InstaCard cardData={prepareProps(5)} />
        </Cont>
        <Cont>
          <InstaCard cardData={prepareProps(6)} />
          <InstaCard cardData={prepareProps(7)} />
          <InstaCard cardData={prepareProps(8)} />
        </Cont>
      </>
    );
  }

  return instagramOutput;
};

export default Instagram;
