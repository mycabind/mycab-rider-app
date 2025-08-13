import react from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
import {Button, Logo, TitleHeader} from '../../components/shared';
import icons from '../../assets/icons';
const Profile = () => {
  const navigation = useNavigation();

  const options = [
    {
      label: 'Your Profile',
      icon: icons.customer,
      onPress: () => navigation.navigate('ProfileInfo'),
    },
    {label: 'Manage Address', icon: icons.location ,
      onPress: () => navigation.navigate('Addresses'),
    },
    {label: 'Notification', icon: icons.notification},
    {label: 'Payment Methods', icon: icons.payment},
    {label: 'pre-booked Rides', icon: icons.calender},
    {label: 'Settings', icon: icons.setting},
    {label: 'Emergency Contact', icon: icons.setting},
    {label: 'Help Center', icon: icons.help},
  ];

  return (
    <SafeAreaView style={[styles.p16, {flex: 1}]}>
      <TitleHeader onPress={() => navigation.goBack()} title="Profile" />
      <View style={[{alignItems: 'center'}]}>
        <View style={[styles.mb28]}>
          <Logo
            imageUrl={icons.profile_pic}
            imageStyle={[styles.logoProfile]}
          />
          <Text style={[styles.h1, styles.mt16, {alignSelf: 'center'}]}>
            John Doe
          </Text>
        </View>
      </View>

      {options.map((opt, idx) => (
        <ProfileOption
          key={idx}
          label={opt.label}
          icon={opt.icon}
          onPress={opt.onPress}
        />
      ))}
    </SafeAreaView>
  );
};

const ProfileOption = ({label, icon, onPress}) => {


  return (
    <View>
      <TouchableOpacity
        style={[{flexDirection: 'row'}, styles.mr4]}
        activeOpacity={0.7}
        onPress={onPress}>
        <Image source={icon} style={[styles.icon24, styles.mr8]} />
        <Text style={[styles.ml8, styles.fw700, styles.ts18]}>{label}</Text>
        <Image
          source={icons.right_forward}
          style={[styles.icon24, {marginLeft: 'auto'}]}
        />
      </TouchableOpacity>
      <View
        style={{
          height: 0.3,
          backgroundColor: colors.grey200,
          marginVertical: 10,
        }}
      />
    </View>
  );
};

export default Profile;
