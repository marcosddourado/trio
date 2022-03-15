import React from 'react';
import styled from 'styled-components';
import {View, Text} from 'react-native';
import colors from '../common/colors';
import {hp, wp} from '../common/dimensions';

const Restaurant = () => {
  return (
    <Container>
      <RestaurantName>RESTAURANT NAME</RestaurantName>
    </Container>
  );
};

const Container = styled(View)`
  padding-bottom: ${hp(27)}px;
  padding-top: ${hp(69)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.separator};
`;

const RestaurantName = styled(Text)`
  color: ${colors.title};
  text-align: center;
  font: normal normal normal ${wp(26)}px / ${wp(28)}px Montserrat-Regular;
  letter-spacing: 1.86px;
`;

export default Restaurant;
