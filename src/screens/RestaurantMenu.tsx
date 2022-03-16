import React from 'react';
import styled from 'styled-components';
import {View, Text} from 'react-native';
import colors from '../common/colors';
import {hp, wp} from '../common/dimensions';

const RestaurantMenu = () => {
  return (
    <Container>
      <Title>MENU</Title>
    </Container>
  );
};

const Container = styled(View)`
  flex: 1;
  margin-left: ${hp(30)}px;
  margin-right: ${hp(30)}px;
`;

const Title = styled(Text)`
  text-align: center;
  font: normal normal normal ${wp(26)}px / ${wp(28)}px Montserrat-Regular;
  letter-spacing: 0px;
  color: ${colors.subtitle};
  margin: ${hp(46)}px;
`;

export default RestaurantMenu;
