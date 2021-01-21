import React from 'react';
import {  Image } from 'react-native';

const CommonImage = ({ url, style}) => {
    return (
          <Image source={{uri: url}} style={style} />
       
    );
  };

export default CommonImage;  
