
import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
    return (
    <View style={styles.goalListDisplay}>
        <Text style={styles.goalListDisplayText}>{props.text}</Text>
    </View>
    );
 }

 export default GoalItem;


 const styles = StyleSheet.create({
    goalListDisplay: {
        margin: 8,
        padding: 8,
        backgroundColor: 'skyblue',
        borderRadius: 6
    },
    goalListDisplayText: {
        color: 'white'
    }
 });