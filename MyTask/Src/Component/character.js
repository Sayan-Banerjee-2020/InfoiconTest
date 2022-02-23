import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;
const url = "http://50.116.13.170/darfi/"
const CharectersList = (props) => {
    return (
        <>
            <View style={styles.Container}>
                <View style={styles.MyImageContainer}>
                    <Image
                        style={styles.MyImage}
                        source={{ uri: `${url}${props.ItemImage}` }} />
                </View>
                <View style={styles.SecondContainerMainView}>

                            <Text style={styles.FirstText}>{props.AddTitle}</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.SecondText}>{props.CountryName}   </Text>
                                <Text style={styles.SecondText}>{props.PostalCode}</Text>
                            </View>
                        </View>
                    <Text style={styles.SecondText,{paddingLeft:16}} numberOfLines={1}>{props.ItemDesc}</Text>
            </View>
        </>
    )

}

export default CharectersList;
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: "#070707",
        width: Devicewidth / 2.15,
        marginBottom: 30,
        marginRight: 5
    },
    MyImageContainer: {
        height: Deviceheight / 4,
        width: Devicewidth / 2.2,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: "#070707",
        marginBottom:10
    },
    MyImage: {
        resizeMode: 'contain',
        width: '100%',
        height: "100%",
    },
    SecondContainerMainView: {
        width: Devicewidth / 2.2,
        alignItems: "flex-start",
        paddingLeft:15,
        justifyContent: 'space-around',
        alignSelf: 'center',
        backgroundColor: "#070707",
        marginBottom:5
    },
    FirstText: {
        fontSize: 18,
        color: "#ffffff",
        textAlign: "left",
        fontWeight: "bold",
        fontFamily: 'Roboto-Light'
    },
    SecondText: {
        fontSize: 15,
        color: "#ffffff",
        textAlign: "left",
        fontFamily: 'Roboto-Thin'
    },
})