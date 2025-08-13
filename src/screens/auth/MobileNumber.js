import React from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../assets/styles';
import {
  TitleInput,
  CheckBox,
  Button,
  Logo,
  TitleHeader,
} from '../../components/shared';
import colors from '../../assets/colors';
const MobileNumber = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[styles.p16, {flex: 1}]}>
      <TitleHeader />
      <View style={[{alignItems: 'center'}, styles.mt24]}>
        <Text style={[styles.h1, styles.mb12]}>Join us via phone number</Text>
        <Text
          style={[
            {color: colors.black400, textAlign: 'center'},
            styles.ts16,
            styles.mb12,
          ]}>
          We’ll send you a code – just one tap to verify!{' '}
        </Text>
      </View>
      <TitleInput
        keyboardType="numeric"
        maxlength={10}
        title="Enter your mobile number"
        placeholder={'Enter mobile number'}
      />
      <Button label={'Continue'} style={[styles.mt48]} onPress={() => navigation.navigate("VerifyOtp")} />
    </SafeAreaView>
  );
};

export default MobileNumber;
