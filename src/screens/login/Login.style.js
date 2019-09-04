import { StyleSheet } from 'react-native';

  export default StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#c3edfa',
    },
    titleContainer:{
      display:"flex",
      alignItems: "center",
      paddingTop:100,
      borderWidth: 1,
      borderColor: "#5995DA"
    },
    title:{
      fontWeight:"bold",
      fontSize:32,
    },
    loginContainer: {
      flex: 1,
      // display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      display:"flex",
      alignItems: "center"
    },
    inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius: 30,
      borderBottomWidth: 1,
      width: 250,
      height: 45,
      marginBottom: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputs: {
      height: 45,
      marginLeft: 16,
      borderBottomColor: '#FFFFFF',
      flex: 1,
    },
    inputIcon: {
      width: 30,
      height: 30,
      marginLeft: 15,
      justifyContent: 'center',
    },
    buttonContainer: {
      height: 45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      width: 250,
      borderRadius: 30,
    },
    loginButton: {
      backgroundColor: '#00b5ec',
    },
    loginText: {
      color: 'white',
    },
  });