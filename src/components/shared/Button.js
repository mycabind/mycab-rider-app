// import React from 'react';
// import { TouchableOpacity, Text,  View, Image } from 'react-native';
// import icons from '../../assets/icons';
// import styles from '../../assets/styles';
// import colors from '../../assets/colors';

// const Button = ({ label, onPress, style, disabled, showIcon }) => {
//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       style={[
//         {
//           backgroundColor: colors.primary,
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'center',
//           borderRadius: showIcon ? 8 : 25,
//           opacity: disabled ? 0.6 : 1,
//         },
//         styles.pdh20,
//         styles.mv12,
//         showIcon ? styles.pdv4  : styles.pdv8 ,
//         style,
//       ]}
//       activeOpacity={0.8}
//       disabled={disabled}
//     >
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: showIcon ? 'space-between' : 'center',
//           width: showIcon ? '80%' : '100%',
//           paddingVertical: 6,
//         }}
//       >
//         <Text
//           style={[
//             styles.ts18,
//             styles.fwBold,
//             styles.mr12,
//             { color: colors.white, textAlign: 'center' },
//           ]}
//         >
//           {label}
//         </Text>
//         {showIcon && (
//           <Image source={icons.arrow_right} style={[styles.icon36]} />
//         )}
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default Button;


// import React from 'react';
// import {TouchableOpacity, Text, View, Image, Dimensions} from 'react-native';
// import icons from '../../assets/icons';
// import styles from '../../assets/styles';
// import colors from '../../assets/colors';

// const {height , width} = Dimensions.get("window")

// const Button = ({label, onPress, style, disabled, showIcon}) => {
//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       style={[
//         {
//           backgroundColor: colors.primary,
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'center',
//           borderRadius: showIcon ? 8 : 25,
//           opacity: disabled ? 0.6 : 1,
//           height : height * 0.06,
//           width  : "auto"
//         },
//         showIcon ? styles.pdv4 : styles.pdv8,
//         style,
//       ]}
//       activeOpacity={0.8}
//       disabled={disabled}>
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: showIcon ? 'space-between' : 'center',
//           width: showIcon ? '80%' : '100%',
//           paddingVertical: 6,
//         }}>
//         <Text
//           style={[
//             styles.ts15,
//             styles.fwBold,
//             {color: colors.white, textAlign: 'center'},
//           ]}>
//           {label}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default Button;


import React from 'react';
import {TouchableOpacity, Text, View, Image, Dimensions} from 'react-native';
import icons from '../../assets/icons';
import styles from '../../assets/styles';
import colors from '../../assets/colors';

const {height , width} = Dimensions.get("window")
const wp = percentage => (width * percentage) / 100;


const Button = ({label, onPress, style,textStyle ,disabled}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: colors.primary,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 25,
          opacity: disabled ? 0.6 : 1,
          height : height * 0.06,
          width  : "auto"
        },
        style,
      ]}
      activeOpacity={0.8}
      disabled={disabled}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent:   'center',
          width: '100%',
          paddingVertical: 6,
        }}>
        <Text
          style={[
            styles.fwBold,
            {color: colors.white, textAlign: 'center' , fontSize : wp(4.5)},
          textStyle]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;