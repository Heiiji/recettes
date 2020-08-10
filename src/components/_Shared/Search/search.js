import React, { useState } from "react";
import {View, StyleSheet, TextInput} from "react-native";
import {useDispatch} from "react-redux";
import { setSearchText } from "../../../redux/actions";

const Search = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const _onChangeText = (value) => {
        setText(value);
        dispatch(setSearchText(value));
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={text} placeholder="Search" onChangeText={_onChangeText} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    input: {
        padding: 5,
        margin: 10,
        flex: 1,
        backgroundColor: "white",
        borderRadius: 10
    }
});

export default Search;