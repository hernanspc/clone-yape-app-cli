import { useState } from "react";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  useColorScheme,
} from "react-native";
import MyText from "../components/MyText";
import Colors, { colorsMovistar, yapeColor } from "../constants/colors";

export default function MyInput({
  label,
  value,
  onChangeText,
  hiddenLabel,
  secureTextEntry,
  style,
  placeholder,
  keyboardType,
  ...props
}) {
  const theme = useColorScheme();

  const [inputBackgroundColor, setInputBackgroundColor] = useState(colorsMovistar.grey_1)

  const customOnFocus = () => {
    props?.onFocus;
    setInputBackgroundColor(yapeColor.android_buttons_primary)
  }

  const customOnBlur = () => {
    props?.onBlur;
    setInputBackgroundColor(colorsMovistar.grey_1)
  }

  return (
    <View style={styles.container}>
      {!hiddenLabel && (
        <MyText style={{ fontWeight: "bold", marginBottom: 10, color: inputBackgroundColor }} type="caption">
          {label}
        </MyText>
      )}
      <View style={{
        flexDirection: 'row',
      }}>
        <TextInput
          placeholder={placeholder ? placeholder : label}
          style={[styles.input, styles[theme], { borderColor: inputBackgroundColor }, style]}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          onFocus={customOnFocus}
          onBlur={customOnBlur}
          selectionColor={theme === 'dark' ? colorsMovistar.android_bars_primary_primary : colorsMovistar.android_controls_tab_selected}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    paddingLeft: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  dark: {
    backgroundColor: Colors.dark.text + "06",
    borderColor: Colors.dark.text + "80",
    color: Colors.dark.text,
  },
  light: {
    backgroundColor: Colors.light.background + "06",
    borderColor: Colors.light.text + "80",
    color: Colors.light.text,
  },
});
