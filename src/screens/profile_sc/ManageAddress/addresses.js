import React from 'react';
import {View, SafeAreaView, Text, Pressable, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TitleHeader} from '../../../components/shared';
import icons from '../../../assets/icons';
import styles from '../../../assets/styles';
import colors from '../../../assets/colors';
import {Button} from '../../../components/shared';

const addressList = [
  {
    label: 'Home',
    address: '123 Main St, Springfield, IL 62701',
    icon: icons.location,
    onPress: () => {},
  },
  {
    label: 'office',
    address: '123 Main St, Springfield, IL 62701',
    icon: icons.location,
    onPress: () => {},
  },
  {
    label: 'Home',
    address: '123 Main St, Springfield, IL 62701',
    icon: icons.location,
    onPress: () => {},
  },
  {
    label: 'Home',
    address: '123 Main St, Springfield, IL 62701',
    icon: icons.location,
    onPress: () => {},
  },
];

const Addresses = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={[{flex: 1, backgroundColor: colors.white}, styles.p16]}>
      <TitleHeader
        onPress={() => navigation.goBack()}
        title="Manage Addresses"
      />
      {addressList.map((item, idx) => (
        <AddressBlock
          key={idx}
          label={item.label}
          address={item.address}
          icon={item.icon}
          onPress={item.onPress}
        />
      ))}

      <Button
        style={[
          {
            borderWidth: 1,
            borderColor: '#f7931e',
            borderStyle: 'dashed',
            borderRadius: 8,
            backgroundColor: '#f6f6f6',
            alignItems: 'center',
          },
        ]}
        label="+ Add New Address"
        textStyle={[styles.ts14, {color: colors.primary}]}
        
      />
    </SafeAreaView>
  );
};

export default Addresses;

const AddressBlock = ({label, address, icon, onPress}) => (
  <View style={styles.mt8}>
    <Pressable
      style={{flexDirection: 'row', alignItems: 'center'}}
      android_ripple={{color: colors.grey80}}
      onPress={onPress}>
      <Image source={icon} style={[styles.icon24, styles.mt8]} />
      <Text style={[{color: colors.grey200}, styles.ml8, styles.ts15]}>
        {label}
      </Text>
    </Pressable>

    <Text style={[styles.ts11, styles.ml32, {color: colors.grey100}]}>
      {address}
    </Text>

    <View
      style={{
        height: 0.2,
        backgroundColor: colors.grey80,
        marginVertical: 8,
      }}
    />
  </View>
);
