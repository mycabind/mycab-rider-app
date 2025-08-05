import react from 'react';
import {Text, View, Image, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
import {Logo, TitleHeader, TitleInput, Button} from '../../components/shared';
import icons from '../../assets/icons';

const Your_profile = () => {
  return (
    <SafeAreaView style={[{flex: 1}]}>
      
      <View style={[styles.p16]}>
      <TitleHeader  />
        <View style={[{alignItems: 'center'}]}>
          <Text style={[styles.h1, styles.fw700]}>Profile</Text>
          <View style={[styles.mb20]}>
            <Logo image={icons.profile_pic} LogoStyle={[styles.logoProfile]} />
            <Text style={[styles.h2, styles.mt16, {alignSelf: 'center'}]}>
              John Doe
            </Text>
          </View>
        </View>
        <TitleInput
          title="Name"
          placeholder={'Enter your name'}
         
        />
        <TitleInput
          title="Phone Number"
          keyboardType="numeric"
          maxlength={10}
          placeholder={'Enter mobile number'}
          
        />
        <TitleInput
          title="Email"
          placeholder={'example@gmail.com'}
          // inputStyle={[styles.mb8]}
        />
        <TitleInput
          title="Gender"
          placeholder={'example@gmail.com'}
          
        />
      </View>

      <View
        style={[
          styles.shadow,
          styles.mt14,
          {
            padding: 5,
            backgroundColor: 'white',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height:200
          },
        ]}>
        <Button label="Update" style={[]} />
      </View>
    </SafeAreaView>
  );
};
export default Your_profile;
