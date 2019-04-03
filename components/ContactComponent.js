import React, { Component } from 'react';
import {View, Text } from 'react-native';
import {Card} from 'react-native-elements';

class Contactus extends Component{

    static navigationOptions = {
        title: 'Contact Us'
    };


    
    render(){

        return(
            <View>
                <Card
                    title={'Contact Information'}>
                    <Text>
                        121, Clear Water Bay Road{"\n"}
                        Clear Water Bay, Kowloon{"\n"}
                        HONG KONG{"\n"}
                        Tel: +852 1234 5678{"\n"}
                        Fax: +852 8765 4321{"\n"}
                        Email:confusion@food.net{"\n"}
                    </Text>
                </Card>
            </View>
        );
        
    };

}

export default Contactus;