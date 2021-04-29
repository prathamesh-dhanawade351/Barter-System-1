import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';

    export default class HomeScreen extends Component{

        addItem =(ItemName,description)=>{
            var userName = this.state.userName
            var randomRequestId = this.createUniqueId()
            db.collection('requested_books').add({
                "username": userName,
                "item_name":itemName,
                "descriptionon":description,
                "request_id"  : randomRequestId,
            })
        
            this.setState({
                itemName :'',
                descriptionon : ''
            })
        
            return Alert.alert("Item ready to Exchange",
            '',
            [
                {text : 'OK', onPress: () =>{
                    this.props.navigation.navigate('HomeScreen')
                }} 
            ]
            );
}


    render(){
        return(
            <View style={{flex:1}}>
            <MyHeader title="Add Item" navigation ={this.props.navigation}/>
              <KeyboardAvoidingView style={styles.keyBoardStyle}>
                <TextInput
                  style ={styles.formTextInput}
                  placeholder={"Item name"}
                  onChangeText={(text)=>{
                      this.setState({
                          bookName:text
                      })
                  }}
                  value={this.state.bookName}
                />
                <TextInput
                  style ={[styles.formTextInput,{height:300}]}
                  multiline
                  numberOfLines ={8}
                  placeholder={"item description"}
                  onChangeText ={(text)=>{
                      this.setState({
                          reasonToRequest:text
                      })
                  }}
                  value ={this.state.reasonToRequest}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={()=>{this.addItem(this.state.itemName,this.state.discription)}}
                  >
                  <Text>Add Item</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
          </View>
        )
    }



    }