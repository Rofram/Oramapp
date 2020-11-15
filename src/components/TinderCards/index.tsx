import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';

import api from '../../services/api';

import styles from './styles';

const colors = {
  red: '#ec2379',
  blue: '#0070ff',
  green: '#00BF64',
  gray: '#777777',
  black: '#000000',
  white: '#ffffff'
}

const Card = ({ card }) => (
  <View style={styles.card}>
    <Text style={styles.text} >Algum Investimento</Text>
  </View>
)

export default function TinderCards() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState({});



  const onSwiped = () => {
    setIndex(index + 1)
  }

  return (
      <View style={styles.swiperContainer}>
        <Swiper 
          cards={data}
          cardIndex={index}
          renderCard={card => <Card card={card} />}
          onSwiped={onSwiped}
          stackSize={4}
          stackScale={10}
          stackSeparation={15}
          disableBottomSwipe
          animateOverlayLabelsOpacity
          animateCardOpacity
          backgroundColor={'transparent'}
          overlayLabels={{
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: colors.red,
                  color: colors.white,
                  fontSize: 24
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: -20
                }
              }
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: colors.green,
                  color: colors.white,
                  fontSize: 24
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 20
                }
              }
            }
          }}
        />
      </View>
  );
}