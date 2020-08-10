import React, { useState } from "react";
import {View, StyleSheet, TextInput, Button} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import { setSearchText } from "../../../redux/actions";
import {getSearch} from "../../../redux/selectors";

const Search = () => {
    const [text, setText] = useState("");
    const search = useSelector(getSearch);
    const dispatch = useDispatch();

    const _onChangeText = (value) => {
        setText(value);
    }

    const _onSearch = () => {
        dispatch(setSearchText(text));
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={text} placeholder="Search" onChangeText={_onChangeText} />
            {
                search.query !== text && <Button title="Search" onPress={_onSearch} />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center"
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