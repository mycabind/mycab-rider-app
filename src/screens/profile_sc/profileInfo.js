import react from 'react';
import {Text, View, Image, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
import {Logo, TitleHeader, TitleInput, Button} from '../../components/shared';
import icons from '../../assets/icons';

const ProfileInfo = () => {
  const navigation = useNavigation();

  const inputFields = [
    {title: 'Name', placeholder: 'Enter your name'},
    {
      title: 'Phone Number',
      placeholder: 'Enter mobile number',
      keyboardType: 'numeric',
      maxlength: 10,
    },
    {title: 'Email', placeholder: 'example@gmail.com'},
    
  ];
  return (
    <SafeAreaView style={[{flex: 1}]}>
      <View style={[styles.p16]}>
          <TitleHeader
            onPress={() => {
              navigation.goBack();
            }}
            title="Profile"
          />
        

        <View style={[{alignItems: 'center'}]}>
          <View style={[styles.mb20]}>
            <Logo imageUrl={icons.profile_pic}  imageStyle={[styles.logoProfile]} />
            <Text style={[styles.h2, styles.mt16, {alignSelf: 'center'}]}>
              John Doe
            </Text>
          </View>
        </View>

        {inputFields.map((field, idx) => (
          <TitleInput
            key={idx}
            title={field.title}
            placeholder={field.placeholder}
            keyboardType={field.keyboardType}
            maxlength={field.maxlength}
            style={[{},styles.mb20]}
          />
        ))}

        <Button label="Update"  style={[styles.mt20,{}]} />
      </View>

      
        
     
    </SafeAreaView>
  );
};
export default ProfileInfo;
