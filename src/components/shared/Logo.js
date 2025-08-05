import react from 'react';
import { Image, SafeAreaView ,Text ,TouchableOpacity } from 'react-native';
import icons from '../../assets/icons';
import styles from '../../assets/styles';
import colors from '../../assets/colors';

const Logo =({image,LogoStyle})=>{
    return(
        <TouchableOpacity
          style={[
            styles.mt24,
            {
              // alignSelf: 'center',
              // borderWidth: 0.5,
              // borderRadius: 50,
              // borderColor: colors.grey200,

              alignSelf: 'center',
              borderWidth: 0.5,
              borderRadius: 50,
              borderColor: colors.grey200,
              justifyContent: 'center', // Center the image vertically
              alignItems: 'center', // Center the image horizontally
              width: 100, // Adjust the width to make it a circle
              height: 100,
            },
            styles.p12,LogoStyle
          ]}>
          <Image source={image} style={[styles.icon48]} />
        </TouchableOpacity>
      
    )
}

export default Logo;