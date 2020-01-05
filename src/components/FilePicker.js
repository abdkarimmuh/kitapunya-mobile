import React, { PureComponent } from "react"
import { View, TouchableOpacity, StyleSheet, Image } from "react-native"
import { Text } from "react-native-paper"
import Color from "@app/assets/colors"
import Images from "@app/assets/images"
import ImagePicker from "react-native-image-picker"

const options = {
    title: "Pilih Foto",
    takePhotoButtonTitle: "Gunakan Kamera",
    chooseFromLibraryButtonTitle: "Pilih dari Galeri",
    noData: false,
    quality: 0.6,
    mediaType: "photo",
    allowsEditing: false,
    cancelButtonTitle: "Batal",
    storageOptions: {
        skipBackup: true,
        path: "images"
    }
}

const styles = StyleSheet.create({
    containerBtnUpload: { flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 8, borderRadius: 2, opacity: 4 },
})

export class FilePicker extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            fileName: undefined,
            fileSize: undefined,
            data: undefined // base64
        }
    }

    onPressAdd = () => {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log("User cancelled image picker")
            } else if (response.error) {
                console.log("ImagePicker Error: ", response.error)
            } else {
                // const source = { uri: response.uri }
                const { fileName, fileSize, data } = response

                // You can also display the image using data:
                // const source = { uri: "data:image/jpeg;base64," + response.data }

                this.setState({ fileName, fileSize, data: "data:image/jpeg;base64," + response.data })
                this.props.onChangeValue && this.props.onChangeValue({ fileName, fileSize, data: "data:image/jpeg;base64," + response.data })
            }
        })
    }

    getColor = () => {
        if (this.state.data == undefined) {
            return Color.textColor
        } else {
            return Color.dividerColor
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={this.onPressAdd}>
                <View style={[styles.containerBtnUpload, { backgroundColor: this.getColor() }]}>
                    <Image source={Images.icon.cameraWhite} style={{ width: 16, height: 16, resizeMode: "contain" }} />
                    <Text style={{ color: Color.white, marginLeft: 12 }}>{this.props.placeholder}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default FilePicker
