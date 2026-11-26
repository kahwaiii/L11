import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {StatusBar} from 'expo-status-bar';
import {datasource} from './Data.js';

const Add = ({navigation}) => {

    const [letter, setLetter] = useState('');
    const [type, setType] = useState('Vowels');

    return (
        <View style={{paddingTop: 30}}>
            <StatusBar/>

            <Text>Letter:</Text>

            <TextInput
                style={{borderWidth: 1}}
                maxLength={1}
                onChangeText={(text) => setLetter(text)}
            />

            <Picker
                selectedValue={type}
                onValueChange={(value) => setType(value)}
            >
                <Picker.Item label="Vowels" value="Vowels"/>
                <Picker.Item label="Consonants" value="Consonants"/>
            </Picker>

            <Button title="Submit"
                    onPress={() => {
                        let item = {key:letter};
                        let indexnum = 1;

                        if (type == 'Vowels'){
                            indexnum = 0;
                        }

                        datasource[indexnum].data.push(item);
                        navigation.navigate("Home");
                    }}
            />


        </View>
    );
};

export default Add;