import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog, faToolbox, faFan, faKey, faLock, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'
import Menu from '../Menu/inedx'

export default function CarItem() {
  const [locked, setLocked] = useState(false);
  const clickClock = () => {
    if(locked) {
      setLocked(false);
    }else {
      setLocked(true);
    }
  }
  return (
    <View style={styles.carContainer}>
      <ImageBackground 
         source={require('../../assets/background.png')}
         style={styles.backgroundImage}
      />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesomeIcon style={styles.icon} icon={ faCog } size={24}/>
        </TouchableOpacity>
          <Text style={styles.headerTitle}>NazMobile</Text>
        <TouchableOpacity>
          <FontAwesomeIcon style={styles.icon} icon={ faToolbox } size={24}/>
        </TouchableOpacity>
      </View>
          
      <View style={styles.batterySection}>
           <Image 
             source={require('../../assets/battery.png')}
             style={styles.batteryImage}
           />
           <Text style={styles.batteryText}>150 mi</Text>
      </View>  
      <View style={styles.status}>
         <Text style={styles.statusText}>Parked</Text>
      </View>
         {/*  Control Icons  */}
         <ScrollView>
         <View style={styles.controls}>
           <TouchableOpacity>
              <View style={styles.controlsButton}>
                <FontAwesomeIcon style={styles.icon} icon={ faFan }/>
              </View>
           </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.controlsButton}>
                <FontAwesomeIcon style={styles.icon} icon={ faKey }/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={clickClock}>
              <View style={styles.controlsButton}>
                <FontAwesomeIcon style={styles.icon} icon={ locked ? faLock : faUnlockAlt }/>
              </View>
            </TouchableOpacity>
         </View>
         {/* Menu */}
         <Menu />
         </ScrollView>
    </View>
  )
}
            
          