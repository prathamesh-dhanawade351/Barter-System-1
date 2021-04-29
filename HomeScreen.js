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
    ScrollView,
    FlatList,
    ListViewBase} from 'react-native';

    export default class HomeScreen extends Component{

        renderItem = ({Item, i} ) => {
            console.log(item.item_name);
            return(
                <ListItem
                key={i}
                title={item.item_name}
                subtitle={item.description}
                titleStyle={{ color: 'black', fontWeight: bold}}
                  rightElement={
                      <TouchableOpacity style={StyleSheet.buttonText}>
                         <Text style={{color: '#ffff'}}>Exchange</Text>
                      </TouchableOpacity>
                  }

            bottomDivider
                
                />
            )
        } 


        
        render(){
            return(
                <View>
                    <FlatList
                      keyExtractor={this.keyExtractor}
                      data={this.state.allRequests}
                      renderItem={this.renderItem}
                    />

                   </View>

           
            )
        }
    }