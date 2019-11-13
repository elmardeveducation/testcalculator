import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, } from 'react-native'
import { styles } from './styles/styles'


export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num1: "",
            num2: "",
            result: "",
            operator: "",
            op: "",
        }

    }
    getRes = () => {
        console.log("state from getRes num1=" + this.state.num1)
        console.log("state from getRes num1=" + this.state.num2)
        console.log("state from getRes num1=" + this.state.op)
        console.log("state from getRes num1=" + this.state.result)
        let res = this.state.num1 + this.state.op + this.state.num2 + "=" + this.state.result
        console.log("from getres res=" + res)
        return res
    }

    parseVariable = (text) => {

        return parseFloat(text)
    }
    calculator(operator) {
        let num3 = this.parseVariable(this.state.num1)
        let num4 = this.parseVariable(this.state.num2)
        
        //console.log(num3 + "= result")
        //console.log(num4 + "= result")
        switch (operator) {

            case "+":
                this.setState({ result: num3 + num4 })
                console.log("Sum is from case ++++ " + this.state.result)
                // console.log("Operator is " + this.operator)
                this.setState({ op: "+" })
                console.log("operator is " + this.state.op)
                return this.state.result

            case "-":
                this.setState({ result: num3 - num4 })
                this.setState({ op: "-" })
                return this.state.result

            case "*":
                this.setState({ result: num3 * num4 })
                this.setState({ op: "*" })
                return this.state.result

            case "/":
                if (num4 !== 0) {
                    this.setState({ result: num3 / num4 })
                    this.setState({ op: "/" })
                    return this.state.result
                } else {
                    this.setState({ result: "ERROR!!" })
                    return this.state.result
                }
            case "%":
                this.setState({ result: (num3 / 100) * num4 })
                this.setState({ op: "%" })
                return this.state.result
            default:
                return 0
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 2 }}></View>
                <View style={styles.viewInput}>
                    <TextInput
                        style={styles.textInput}
                        keyboardType={'numeric'}
                        onChangeText={(num1) => this.setState({ num1 })}
                        value={this.state.num1}
                    >
                    </TextInput>
                </View>
                <View style={styles.viewInputTwo}>
                    <TextInput
                        style={styles.textInput}
                        keyboardType={'numeric'}
                        onChangeText={(num2) => this.setState({ num2 })}
                        value={this.state.num2}
                    >
                    </TextInput>
                </View>
                <View style={styles.viewBtn}>
                    <TouchableOpacity
                        style={styles.touchableBtnLeft}
                        onPress={() => this.calculator("+")}>
                        <Text>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.touchableBtn}
                        onPress={() => this.calculator("-")}>
                        <Text>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.touchableBtn}
                        onPress={() => this.calculator("*")}>
                        <Text>*</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.touchableBtnRight}
                        onPress={() => this.calculator("/")}>
                        <Text>/</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewResult}>
                    <Text
                        style={styles.resultText}
                    >{this.getRes()}</Text>

                </View>
                <View style={{ flex: 7 }}>
                </View>
            </View>
        )
    }
}
