import { StyleSheet } from 'react-native';

  export default StyleSheet.create({
    titleContainer:{
      // textAlign:"center",
      // alignSelf:"flex-start",
      // alignItems: "center",
    //  paddingTop:100,
      flex: 1,
      // marginTop: '25%',
      // marginBottom: '15%',
      borderWidth: 3,
      borderColor: "#5995DA"
    },
    title:{
      textAlign:"center",
      fontWeight:"bold",
      fontSize:32,
    },
    loginContainer: {
      flex: 3,
      // marginTop: '10%',
      // display: "flex",
      // justifyContent: 'center',
      alignItems: 'center',
      flexDirection: "column",
      borderWidth: 5,
      borderColor: "red"
    },
    logo: {
      // display:"flex",
      flex: 1,
      alignItems: "center",
      marginTop:'5%'
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
      // backgroundColor: '#00b5ec',
      backgroundColor: '#272b29'
    },
    loginText: {
      color: 'white',
    },
  });