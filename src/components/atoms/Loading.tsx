import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styled from 'styled-components';

const Loading = () => {
  return (
    <Container>
      <ActivityIndicator />
    </Container>
  );
};

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Loading;
