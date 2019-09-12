import APP_URL from '../../config/appconstant';
import GLOBAL from '../../config/global';


async function authenticate(credentials) {
    var data = {
      username: credentials.username,
      password: credentials.password,
    };
    try {
    console.log(APP_URL);
      let response = await fetch(APP_URL+'/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(data);
      let responseJson = await response.json();
      if (response.status >= 200 && response.status < 300) {
        console.log(responseJson);
        GLOBAL.currentlogin = responseJson
        console.log("authenticated");
        return true;
      } else {
        console.log("not authenticated");
        setTimeout(() => {
          return false;
        }, 5000);
        // return false;
      }
    } catch (errors) {
    console.log(errors);
    //   Alert.alert(errors);
    }
  }

  export  {authenticate};