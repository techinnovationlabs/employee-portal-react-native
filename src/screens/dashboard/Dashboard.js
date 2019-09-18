import React, {Component} from 'react';
// import {Text, View, Dimensions} from 'react-native';
//This is an example of Card View//
// import React from 'react';
//import react in our code.
import {Text, View, StyleSheet, Image} from 'react-native';
//import all the components we are going to use.
import {Card, Icon} from 'react-native-elements';
//import Card
import globalStyles from '../global.style';
import GLOBAL from '../../config/global';
import {CardViewWithImage} from 'react-native-simple-card-view';

class Dashboard extends Component {
  state = {};
  // render() {
  //   const miniCardStyle = {
  //     shadowColor: '#000000',
  //     shadowOffsetWidth: 2,
  //     shadowOffsetHeight: 2,
  //     shadowOpacity: 0.1,
  //     hadowRadius: 5,
  //     bgColor: '#ffffff',
  //     padding: 5,
  //     margin: 5,
  //     borderRadius: 3,
  //     elevation: 3,
  //     width: Dimensions.get('window').width / 2 - 10,
  //   };
  //   console.log(GLOBAL.currentlogin);
  //   return (
  //     <View style={globalStyles.container}>
  //       <View>
  //         <CardViewWithImage
  //           width={300}
  //           content={
  //             'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!'
  //           }
  //           source={{uri: 'https://placeimg.com/640/480/tech'}}
  //           title={'Hello World!'}
  //           imageWidth={100}
  //           imageHeight={100}
  //           roundedImage={true}
  //           roundedImageValue={50}
  //           imageMargin={{top: 10}}
  //         />
  //         <CardViewWithImage
  //           width={}
  //           source={{uri: 'https://placeimg.com/640/480/tech'}}
  //           title={'Hello World!'}
  //           imageWidth={100}
  //           imageHeight={100}
  //           roundedImage={false}
  //           imageMargin={{top: 10}}
  //         />
  //       </View>
  //     </View>
  //   );
  // }
  render() {
    return (
      <View style={styles.container,globalStyles.container}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: '100%',
            flexWrap: 'wrap',
          }}>
          <View style={{width: '50%'}}>
            {/* <Card containerStyle={{backgroundColor:'#b2d5ff', borderRadius:5}}> */}
            <Card containerStyle={{backgroundColor:'#f5d9d9', borderRadius:5}}>
              {/*react-native-elements Card*/}
              <Icon
                name="chevron-left"
                type="entypo"
                size={100}
                color="#272b29"
              />
              <Text style={styles.paragraph}>This</Text>
            </Card>
          </View>
          <View style={{width: '50%'}}>
            <Card>
              {/*react-native-elements Card*/}
              <Icon
                name="chevron-left"
                type="entypo"
                size={100}
                color="#272b29"
              />
              <Text style={styles.paragraph}>This</Text>
            </Card>
          </View>
          <View style={{width: '50%'}}>
            <Card>
              {/*react-native-elements Card*/}
              <Icon
                name="chevron-left"
                type="entypo"
                size={100}
                color="#272b29"
              />
              <Text style={styles.paragraph}>This</Text>
            </Card>
          </View>
          <View style={{width: '50%'}}>
            <Card>
              {/*react-native-elements Card*/}
              <Icon
                name="chevron-left"
                type="entypo"
                size={100}
                color="#272b29"
              />
              <Text style={styles.paragraph}>This</Text>
            </Card>
          </View>
          <View style={{width: '50%'}}>
            <Card>
              {/*react-native-elements Card*/}
              <Icon
                name="chevron-left"
                type="entypo"
                size={100}
                color="#272b29"
              />
              <Text style={styles.paragraph}>This</Text>
            </Card>
          </View>
          <View style={{width: '50%'}}>
            <Card>
              {/*react-native-elements Card*/}
              <Icon
                name="chevron-left"
                type="entypo"
                size={100}
                color="#272b29"
              />
              <Text style={styles.paragraph}>This</Text>
            </Card>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    // margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

export default Dashboard;
