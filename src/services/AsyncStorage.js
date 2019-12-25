import AsyncStorage from "@react-native-community/async-storage";

const StoreData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.log("ERROR", error)
    }
}

const FetchData = async key => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) {
            return JSON.parse(value)
        }
    } catch (error) {
        console.log("ERROR", error)
    }
}

const RemoveData = async key => {
    try {
        AsyncStorage.removeItem(key)
    } catch (error) {
        console.log("ERROR", error)
    }
}


export default {
    StoreData,
    FetchData,
    RemoveData
}
