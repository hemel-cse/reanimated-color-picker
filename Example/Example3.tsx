import React, { useState } from 'react';
import { Button, Modal, StyleSheet, View } from 'react-native';
import { SharedValue } from 'react-native-reanimated';
import ColorPicker, { Swatches, Preview, OpacitySlider, Panel2, BrightnessSlider } from 'reanimated-color-picker';

const customSwatches = [
  '#f72585',
  '#b5179e',
  '#7209b7',
  '#560bad',
  '#480ca8',
  '#3a0ca3',
  '#3f37c9',
  '#4361ee',
  '#4895ef',
  '#4cc9f0',
];

interface porpsType {
  color: SharedValue<string>;
  onSelectColor: (param: { hex: string }) => void;
}

export default function Example3({ onSelectColor, color }: porpsType) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button title='Color Picker 3' onPress={() => setShowModal(true)} />

      <Modal onRequestClose={() => setShowModal(false)} visible={showModal} animationType='slide'>
        <View style={styles.container}>
          <ColorPicker
            value={color.value}
            slidersThickness={25}
            thumbsSize={30}
            style={{ width: '75%', justifyContent: 'center' }}
            onComplete={onSelectColor}
          >
            <View style={styles.panelBrightnessContainer}>
              <BrightnessSlider style={[{ height: '100%', width: 30 }, styles.shadow]} vertical reverse />
              <Panel2 style={[{ flex: 1, marginStart: 20 }, styles.shadow]} />
            </View>

            <View style={styles.panelBrightnessContainer}>
              <Preview style={[styles.circlePreview, styles.shadow]} hideInitialColor hideText />
              <OpacitySlider style={[{ flexGrow: 1 }, styles.shadow]} ringColor='gray' reverse />
            </View>

            <Preview
              style={[styles.previewStyle, styles.shadow]}
              textStyle={{ fontSize: 16 }}
              hideInitialColor
              colorFormat='hsl'
            />

            <Swatches swatchStyle={styles.swatchStyle} colors={customSwatches} />
          </ColorPicker>

          <Button title='Close' onPress={() => setShowModal(false)} />
        </View>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    paddingBottom: 0,
  },
  panelBrightnessContainer: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  circlePreview: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginEnd: 20,
  },
  previewStyle: {
    height: 55,
    borderRadius: 5,
    marginBottom: 30,
    marginTop: 20,
  },
  swatchStyle: {
    borderRadius: 5,
    height: 40,
    width: 40,
    marginHorizontal: 10,
    marginBottom: 15,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
