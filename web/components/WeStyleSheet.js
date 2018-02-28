import React from 'react';
import {
    StyleSheet,
    Dimensions,
    PixelRatio,
} from 'react-native';

export const deviceWidth = Dimensions.get('window').width * PixelRatio.get();      //设备的宽度
export const deviceHeight = Dimensions.get('window').height * PixelRatio.get();    //设备的高度
let fontScale = PixelRatio.getFontScale();                      //返回字体大小缩放比例
let pixelRatio = PixelRatio.get();      //当前设备的像素密度

//默认属性
const defaultPixel = 3;
const defaultW = 1280;
//TODO 这里暂时去掉虚拟键的高度
const defaultH = 1776;

//获取缩放比例
const scaleH = deviceHeight / defaultH;
const scaleW = deviceWidth / defaultW;

//单位px
export function scaleHSize(size) {
    size = size * scaleH / pixelRatio;
    return size;
}

export function scaleWSize(size) {
    size = size * scaleW / pixelRatio;
    return size;
}

export function scaleTSize(size) {
    size = size * scaleW / pixelRatio;
    return size;
}

const columnAttrs = [
    'marginTop',
    'marginBottom',
    'paddingTop',
    'paddingBottom',
    'top',
    'bottom',
    'lineHeight'

];
const rowAttrs = [
    'width',
    'height',
    'marginLeft',
    'marginRight',
    'paddingLeft',
    'paddingRight',
    'left',
    'right'
];
const fontAttrs = ['fontSize'];
export default class WeStyleSheet {
    static create(styles) {
        Object.keys(styles).forEach(className => {
            Object.keys(styles[className]).forEach(attrName => {
                if (this.isHeight(attrName)) {
                    styles[className][attrName] = scaleHSize(styles[className][attrName]);
                }
                if(this.isWidth(attrName)){
                    styles[className][attrName] = scaleWSize(styles[className][attrName]);
                }
                if(this.isFont(attrName)){
                    styles[className][attrName] = scaleTSize(styles[className][attrName]);
                }
            })
        });

        return StyleSheet.create(styles);
    }

    static isFont(attrName) {
        return this.isExists(fontAttrs, attrName);
    }

    static isHeight(attrName) {
        return this.isExists(columnAttrs, attrName);
    }
    static isWidth(attrName) {
        return this.isExists(rowAttrs, attrName);
    }

    static isExists(attrArray, attrName) {
        const index = attrArray.findIndex((value) => {
            return value === attrName;
        });
        return index !== -1;
    }
}