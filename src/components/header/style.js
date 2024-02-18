import { StyleSheet } from "react-native";
import { colors } from "../../utils/constants";


export const styles = StyleSheet.create({
    headerWrapper:{
        height:60,
        width:'100%',
        backgroundColor:colors.bgPrimary,
        alignItems:'center',
        justifyContent:'center'
    },
    titleText:{
        color:'white',
        fontSize:24,
        fontWeight:'900'
    }
})