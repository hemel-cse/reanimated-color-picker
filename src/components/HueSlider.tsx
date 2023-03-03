import React, { useContext } from 'react';
import { I18nManager } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { CTX, getStyle } from '../GlobalStyles';
import Thumb from './Thumbs';

import type { LayoutChangeEvent } from 'react-native';
import type { SliderPorps } from '../types';

const isRtl = I18nManager.isRTL;

export function HueSlider({ thumbShape, thumbSize, thumbColor, style = {}, vertical = false, reverse = false }: SliderPorps) {
  const {
    onGestureChange,
    onGestureEnd,
    hueValue,
    sliderThickness,
    thumbSize: thumbsSize,
    thumbShape: thumbsShape,
    thumbColor: thumbsColor,
  } = useContext(CTX);

  thumbShape = thumbShape ?? thumbsShape;
  const thumb_size = thumbSize ?? thumbsSize;
  const thumb_color = thumbColor ?? thumbsColor;

  const borderRadius = getStyle(style, 'borderRadius') ?? 5;
  const getWidth = getStyle(style, 'width');
  const getHeight = getStyle(style, 'height');

  const width = useSharedValue(vertical ? sliderThickness : typeof getWidth === 'number' ? getWidth : 0);
  const height = useSharedValue(!vertical ? sliderThickness : typeof getHeight === 'number' ? getHeight : 0);

  const handleScale = useSharedValue(1);

  const handleStyle = useAnimatedStyle(() => {
    const length = vertical ? height.value : width.value,
      percent = (hueValue.value / 360) * length,
      pos = (reverse ? length - percent : percent) - thumb_size / 2,
      posY = vertical ? pos : height.value / 2 - thumb_size / 2,
      posX = vertical ? width.value / 2 - thumb_size / 2 : pos;
    return {
      transform: [{ translateY: posY }, { translateX: posX }, { scale: handleScale.value }],
    };
  }, [thumbSize, vertical, reverse]);

  const gestureEvent = useAnimatedGestureHandler(
    {
      onStart: (event, ctx: { x: number; y: number }) => {
        ctx.x = event.x;
        ctx.y = event.y;
        handleScale.value = withTiming(1.2, { duration: 100 });
      },
      onActive: (event, ctx) => {
        const clamp = (v: number, max: number) => Math.min(Math.max(v, 0), max);

        const x = event.x,
          y = event.y,
          posX = clamp(x, width.value),
          posY = clamp(y, height.value),
          percentX = posX / width.value,
          percentY = posY / height.value,
          hueX = reverse ? 360 - Math.round(percentX * 360) : Math.round(percentX * 360),
          hueY = reverse ? 360 - Math.round(percentY * 360) : Math.round(percentY * 360);

        hueValue.value = vertical ? hueY : hueX;

        runOnJS(onGestureChange)();
      },
      onFinish: () => {
        handleScale.value = withTiming(1, { duration: 100 });
        runOnJS(onGestureEnd)();
      },
    },
    [thumbSize, vertical, reverse]
  );

  const onLayout = ({ nativeEvent: { layout } }: LayoutChangeEvent) => {
    if (!vertical) width.value = withTiming(Math.round(layout.width), { duration: 5 });
    if (vertical) height.value = withTiming(Math.round(layout.height), { duration: 5 });
  };

  const imageStyle = useAnimatedStyle(() => {
    const imageRotate = vertical ? (reverse ? '270deg' : '90deg') : reverse ? '180deg' : '0deg';
    const imageTranslateY =
      (reverse && isRtl) || (!reverse && !isRtl) ? height.value / 2 - width.value / 2 : -height.value / 2 + width.value / 2;
    return {
      width: vertical ? height.value : width.value,
      height: vertical ? width.value : height.value,
      borderRadius,
      transform: [
        { rotate: imageRotate },
        { translateX: vertical ? (reverse ? -height.value / 2 + width.value / 2 : height.value / 2 - width.value / 2) : 0 },
        { translateY: vertical ? imageTranslateY : 0 },
      ],
    };
  }, [vertical, reverse, sliderThickness]);

  const thicknessStyle = vertical ? { width: sliderThickness } : { height: sliderThickness };

  return (
    <PanGestureHandler onGestureEvent={gestureEvent} minDist={0}>
      <Animated.View
        onLayout={onLayout}
        style={[{ borderRadius }, style, thicknessStyle, { position: 'relative', borderWidth: 0, padding: 0 }]}
      >
        <Animated.Image source={require('../assets/Hue.png')} style={imageStyle} />
        <Thumb {...{ channel: 'h', thumbShape, thumbSize: thumb_size, thumbColor: thumb_color, handleStyle, vertical }} />
      </Animated.View>
    </PanGestureHandler>
  );
}