import { NavigationProp, Router, createNavigationContainerRef, useNavigation, useNavigationContainerRef, useRoute } from "@react-navigation/native";
import React from "react";
import * as RootNavigation from '../navigation/root-navigation';
import { Button, Text, TouchableOpacity, View } from "react-native";
import { Screen } from "react-native-screens";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons/faUserAlt'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'

export const ScreenHeader = () => {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', alignContent: "center", alignItems: "center", justifyContent: 'space-between', height: '7%', backgroundColor: '#474F7A' }}>
      <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center' }} onPress={() => RootNavigation.navigate('Home')}>
        <Text style={{ color: '#FFD0EC', marginLeft: 10, fontSize: 30 }}>Home
        </Text>
        <FontAwesomeIcon color="#FFD0EC" size={30} icon={faHome}></FontAwesomeIcon>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => RootNavigation.navigate('Profile')}>
        <FontAwesomeIcon color="#FFD0EC" style={{ marginRight: 10 }} size={30} icon={faUserAlt} ></FontAwesomeIcon>
      </TouchableOpacity>
    </View>
  );
};


