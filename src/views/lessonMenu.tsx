import React, {useContext, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';
import {User} from '../redux/types/users';
import {Button, Header, ThemeContext, Tile} from "react-native-elements";
import { useTranslation } from "react-i18next";
import {GameResult} from "../redux/types/gameResult";
import { ListItem, Avatar } from 'react-native-elements'
import {Figure} from "./dragableFigure";

declare const global: {HermesInternal: null | {}};

const LessonMenu = ({navigation}:any) => {
  const { t } = useTranslation();

  const user = useSelector((state: any) => state.user as User);
  const lections = useSelector((state: any) => state.lessons as GameResult[]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
  }, []);

  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Tile
              imageSrc={require('../static/images/class2.jpg')}
              title={t('Juegos')}
              featured
              caption={t('Elige uno')}
          />

          <View>
              <ListItem
                  onPress={() => navigation.navigate('SimpleFigures', {figureGoal:Figure.Circle, difficulty: 1})}
                  bottomDivider>
                <Avatar source= {require('../static/images/classroom.jpg')} />
                <ListItem.Content>
                  <ListItem.Title><Text>{t('Figuras geométicas sencillas 1')}</Text></ListItem.Title>
                  <ListItem.Subtitle> </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>

            <ListItem
                onPress={()=>{}}
                bottomDivider>
              <Avatar source= {require('../static/images/classroom.jpg')} />
              <ListItem.Content>
                <ListItem.Title><Text>{t('Figuras geométicas sencillas 2')}</Text></ListItem.Title>
                <ListItem.Subtitle> </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
    padding:10
  },
});

export default LessonMenu;
