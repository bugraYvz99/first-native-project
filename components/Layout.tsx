import React from "react";
import { DrawerLayoutAndroidBase, StyleSheet, View } from "react-native";
import { ScreenHeader } from "./ScreenHeader";
import { useNavigation } from "@react-navigation/native";
import { Screen } from "react-native-screens";

export const Layout = ({ children }) => {

    return (

        <View style={styles.container}>
            <ScreenHeader></ScreenHeader>
            <View style={styles.content} >{children}</View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#1F2544',
    },
    content: {
        height: '85%',
        padding: 16,
        backgroundColor: '#1F2544'
    },
});