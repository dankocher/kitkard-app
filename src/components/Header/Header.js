import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';
import {connect} from "react-redux";
import colors from "../../constants/colors";
import PropTypes from 'prop-types';
import {Icon} from "../Icon";
import {Text, TouchableRipple} from "react-native-paper";

class Header extends Component {

    static propTypes = {
        onBack: PropTypes.func
    };

    render() {
        const {onBack} = this.props;
        const color = colors[this.props.theme];

        return <View style={[styles.header, {backgroundColor: color.primary}]}>
            { onBack === undefined ? null :
                <BackButton onPress={onBack} color={color.primary}/>
            }
        </View>;
    }
}

const BackButton = (props) => {
    return (
        <View style={styles.backButtonContainer}>
            { Platform.OS === "ios" ?
                <TouchableOpacity style={styles.backButton} onPress={props.onPress}>
                    <Icon name="left" size={36} color="white"/>
                </TouchableOpacity>
                :
                <View style={styles.backButtonView}>
                    <TouchableRipple onPress={props.onPress}
                                     rippleColor="rgba(0, 0, 0, .32)"
                                     style={styles.backButton}
                    >
                        <Icon name={'back'} color={"white"} size={30}/>
                    </TouchableRipple>
                </View>
            }
        </View>
    )
};

const HEIGHT = 48;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 48
    },
    backButtonContainer: {
        width: HEIGHT,
        height: HEIGHT,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backButton: {
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 20
    },
    backButtonView: {
        width: 40, height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
});


const mapStateToProps = state => ({
    theme: state.theme
});

export default connect(mapStateToProps)(Header)