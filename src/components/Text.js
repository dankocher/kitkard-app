import React, {Component} from 'react';
import {Text} from "react-native";
import {setTheme} from "../redux/actions";
import {connect} from "react-redux";
import colors from "../constants/colors";
import PropTypes from 'prop-types';

class TextThemed extends Component {
    static propTypes = {
        style: PropTypes.object,
        colors: PropTypes.string
    };
    
    render() {
        const {children, style, color} = this.props;
        const theme = colors[this.props.theme];
        const textColor = color === undefined ? theme.text : color;
        return <Text style={[style, {color: textColor}]}>
            {children}
        </Text>
    }
}

const mapStateToProps = state => ({
    theme: state.theme
});

const mapDispatchToProps = dispatch => ({
    setTheme: theme => dispatch(setTheme(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextThemed)