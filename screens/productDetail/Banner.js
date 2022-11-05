import { View, Image } from "react-native"

const Banner = () => {
    return (
        <View >
            <Image style={{ width: 405, height: 200, justifyContent: 'center' }}
                source={{ uri: 'https://www.bworldonline.com/wp-content/uploads/2022/05/medicines-pills.jpg' }} />
        </View>
    )
}
export default Banner;