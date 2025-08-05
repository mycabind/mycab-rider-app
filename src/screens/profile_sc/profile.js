import react from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
import { Logo , TitleHeader } from '../../components/shared';
import icons from '../../assets/icons';
const Profile =()=>{
    const navigation = useNavigation();
    return (
        
        <SafeAreaView style={[styles.p16,{flex:1}]}>
            {/* <TitleHeader onPress={navigation.navigate('Home')} /> */}
            <View style={[ {alignItems: 'center'}]}>
                <Text style={[styles.h1,styles.fw700]}>
                    Profile
                </Text>
            <View style={[styles.mb28]}>
                <Logo image={icons.profile_pic} LogoStyle={[styles.logoProfile]}/>
                <Text style={[styles.h1,styles.mt16,{alignSelf:'center'}]}>John Doe</Text>
            </View>
            </View>
            <Option label='Your Profile'  imgs={icons.customer} onPress={() => navigation.navigate('YourProfile')} ></Option>
            <Option label='Manage Address'  imgs={icons.location}></Option>
            <Option label='Notification'  imgs={icons.notification}></Option>
            <Option label='Payment Methods'  imgs={icons.payment}></Option>
            <Option label='pre-booked Rides'  imgs={icons.calender}></Option>
            <Option label='Settings'  imgs={icons.setting}></Option>
            <Option label='Emergency Contact'  imgs={icons.setting}></Option>
            <Option label='Help Center'  imgs={icons.help}></Option>
        </SafeAreaView>
    )
}

const Option=({label,imgs,onPress})=>{
    return(
        <View >
                <TouchableOpacity style={[{flexDirection: 'row'},styles.mr4]} activeOpacity={0.7} onPress={onPress}>
                 <Image source={imgs} style={[styles.icon24,styles.mr8]}/>
               <Text style={[styles.ml8,styles.fw700,styles.ts18]}>{label}</Text>
               <Image source={icons.r_forward} style={[styles.icon24,{marginLeft:'auto'}]}/>
                </TouchableOpacity>
               <View style={{ height: 0.3, backgroundColor: colors.grey200, marginVertical: 10 }} />

                </View>

       
    )
}

export default Profile;