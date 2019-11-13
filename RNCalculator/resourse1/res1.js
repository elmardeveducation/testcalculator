 /*   render() {
       console.log(this.state.num1)
       //console.log(this.state.num2)
       let numbers
       return (

           <View style={styles.container}>
               <View style={styles.container1}>
                   <TextInput style={styles.resultText} onChangeText={(num1) => this.setState({ num1 })} value={this.state.num1}></TextInput>
                   <Text style={styles.op}>{this.state.op}</Text>
                   <TextInput style={styles.resultText} onChangeText={(num2) => this.setState({ num2 })} value={this.state.num2}></TextInput>
                   <Text style={styles.texts}>{this.state.result}</Text>
               </View>
               <View style={styles.container2}>
                   <Button title="+" color="gray" onPress={() => this.calculator("+")}></Button>
                   <Button title="-" color="gray" onPress={() => this.calculator("-")}></Button>
                   <Button title="*" color="gray" onPress={() => this.calculator("*")}></Button>
                   <Button title="/" color="gray" onPress={() => this.calculator("/")}></Button>
                   <Button title="%" color="gray" onPress={() => this.calculator("%")}></Button>
                   </View>
           </View>
       )

   }

}*/

/*
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container1: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor:"yellow"
    },
    container2: {
        flex: 3,
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor:"white",

    },
    resultText: {
        height: 40,
        width: 100,
        borderColor: 'yellow',
        borderWidth: 1,
        marginTop: 30,
        margin: 10,
        fontSize: 20,
        textAlign: "right",
        color:"white"
    },
    op: {
        height: 40,
        width: 20,
        borderColor: 'yellow',
        borderWidth: 1,
        marginTop: 30,
        margin: 10,
        textAlign: "center",
        fontSize: 20,
        color:"white"
    },
    texts: {
        height: 40,
        width: 100,
        borderColor: 'yellow',
        borderWidth: 1,
        marginTop: 30,
        margin: 10,
        textAlign: "right",
        fontSize: 20,
        color:"white"
    },
    btn: {
        height: 60,
        width: 60,
        fontSize: 30,
    }
});		*/