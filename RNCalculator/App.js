import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    TextInput,

} from 'react-native'

export default class App extends Component {
    state = {
        num1: 0,
        num2: 0,
        operator: ""
    }
        
    caculator(operator) {
        switch (operator) {
            case "+":
                return num1 + num2

            case "-":
                return num1 - num2

            case "*":
                return num1 * num2

            case "/":
                if (num2) {
                    return num1 / num2
                } else {
                    return num1 / num2
                }

            default:
                return 0
        }
    }

    showCalc(){


    }

    render() {
        console.log(this.state.num1)
        return (

            <View style={styles.container}>
                <View style={styles.container1}>
                    <TextInput style={styles.resultText} onChangeText={(text) => this.setState({text})}   value={this.setState.num1}></TextInput>
                    <TextInput style={styles.resultText} onChangeText={(text) => this.setState({text})}   value={this.setState.num2}></TextInput>
                    <Text style={styles.texts}>0</Text>
                </View>
                <View  style={styles.container2}>
                    <Button title="+" style={styles.btn} onPress={text=>this.caculator(text)}></Button>
                    <Button title="-" style={styles.btn}></Button>
                    <Button title="*" style={styles.btn}></Button>
                    <Button title="/" style={styles.btn}></Button>
                </View>
               <View style={styles.container3}></View>
               <View style={styles.container4}></View>
            </View>
        )


    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    container1:{
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
    },
    container2:{
        flex: 2,
        flexDirection:"row",
        justifyContent: 'space-evenly',
        alignItems:'center',
        padding: 100
    },
    container3:{
        flex: 3,
        justifyContent: "center",
        flexDirection: "row",
    },
    container4:{
        flex: 4,
        justifyContent: "center",
        flexDirection: "row",
    },
    resultText: {
        height: 40,
        width: 100,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 30,
        margin: 10,
        fontSize: 20,
        textAlign: "right",
    },
    texts: {

        height: 40,
        width: 100,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 30,
        margin: 10,
        textAlign: "right",
        fontSize: 20
    },
    btn: {
        height: 60,
        width: 60,
        fontSize: 30,

    }
});		