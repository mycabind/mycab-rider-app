import { View, Text, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
import { Button } from '../../components/shared';
import { SafeAreaView } from 'react-native-safe-area-context';



// import Profile from '../profile_sc/profile';

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[{flex:1},styles.p16]}>


    <View>
      <Text style={[{color:colors.black}]}>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={[styles.h1]}> 1. Profile</Text>
      </TouchableOpacity>
      {/* <Button label="profile" onPress={navigation.navigate('Profile')}/> */}
    </View>
    </SafeAreaView>
  )
}



export default Home