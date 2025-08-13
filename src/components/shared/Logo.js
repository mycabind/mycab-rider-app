// import react from 'react';
// import { Image, SafeAreaView ,Text ,TouchableOpacity } from 'react-native';
// import icons from '../../assets/icons';
// import styles from '../../assets/styles';
// import colors from '../../assets/colors';

// const Logo =({image,LogoStyle})=>{
//     return(
//         <TouchableOpacity
//           style={[
//             styles.mt24,
//             {
//               // alignSelf: 'center',
//               // borderWidth: 0.5,
//               // borderRadius: 50,
//               // borderColor: colors.grey200,

//               alignSelf: 'center',
//               borderWidth: 0.5,
//               borderRadius: 50,
//               borderColor: colors.grey200,
//               justifyContent: 'center', // Center the image vertically
//               alignItems: 'center', // Center the image horizontally
//               width: 100, // Adjust the width to make it a circle
//               height: 100,
//             },
//             styles.p12,LogoStyle
//           ]}>
//           <Image source={image} style={[styles.icon48]} />
//         </TouchableOpacity>
      
//     )
// }

// export default Logo;


import React from 'react';
import { Image, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
import icons from '../../assets/icons';

const { width } = Dimensions.get('window');
const wp = percentage => (width * percentage) / 100;

const Logo = ({ imageUrl, style, imageStyle }) => {
  const size = wp(14); 
    // Default to profile_pic if no imageUrl is provided
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.mt24,
        {
          alignSelf: 'center',
          borderWidth:  1,
          borderRadius: 50,
          borderColor: colors.grey200,
          padding: wp(2),
        },
        style,
      ]}
    >
      <Image
        source={imageUrl}
        style={[styles.icon32,imageStyle, {resizeMode : "contain"}]}
      />
    </TouchableOpacity>
  );
};

export default Logo;