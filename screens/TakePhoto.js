import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

const Container = styled.View`
  flex: 1;
  background-color: #000;
`;

const Actions = styled.View`
  flex: 0.35;
  padding: 0px 50px;
  align-items: center;
  justify-content: space-around;
`;

const TakePhotoBtn = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.theme.cameraBtnColor};
  border: 6px solid ${(props) => props.theme.cameraBtnBorderColor};
  border-radius: 40px;
`;

const CameraChangeBtn = styled.TouchableOpacity``;

const SliderContainer = styled.View``;

const ButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CloseBtn = styled.TouchableOpacity`
  position: absolute;
  top: 50px;
  left: 20px;
`;

export default function TakePhoto({ navigation }) {
  const [ok, setOk] = useState(false);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const [zoom, setZoom] = useState(0);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.front);
  const getPermissions = async () => {
    const { granted } = await Camera.requestPermissionsAsync();
    setOk(granted);
  };
  useEffect(() => {
    getPermissions();
  }, []);
  const onCameraSwtich = () => {
    if (cameraType === Camera.Constants.Type.front) {
      setCameraType(Camera.Constants.Type.back);
    } else {
      setCameraType(Camera.Constants.Type.front);
    }
  };
  const onZoomValueChange = (e) => {
    setZoom(e);
  };
  const onFlashChange = () => {
    if (flashMode === Camera.Constants.FlashMode.off) {
      setFlashMode(Camera.Constants.FlashMode.on);
    } else if (flashMode === Camera.Constants.FlashMode.on) {
      setFlashMode(Camera.Constants.FlashMode.auto);
    } else if (flashMode === Camera.Constants.FlashMode.auto) {
      setFlashMode(Camera.Constants.FlashMode.off);
    }
  };
  // 요청 거부시 재 요청 묻는 component 나 button
  return (
    <Container>
      <StatusBar hidden={true} />
      <Camera
        type={cameraType}
        style={{ flex: 1 }}
        zoom={zoom}
        flashMode={flashMode}
      >
        <CloseBtn onPress={() => navigation.navigate("Tabs")}>
          <Ionicons name="close" size={30} color="white" />
        </CloseBtn>
      </Camera>
      <Actions>
        <SliderContainer>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={0.5}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="rgba(255, 255, 255, 0.5)"
            onValueChange={onZoomValueChange}
          />
        </SliderContainer>
        <ButtonsContainer>
          <TouchableOpacity onPress={onFlashChange}>
            <Ionicons
              size={30}
              color="#fff"
              name={
                flashMode === Camera.Constants.FlashMode.off
                  ? "flash-off-outline"
                  : flashMode === Camera.Constants.FlashMode.on
                  ? "flash"
                  : flashMode === Camera.Constants.FlashMode.auto
                  ? "eye"
                  : ""
              }
            />
          </TouchableOpacity>
          <TakePhotoBtn />
          <CameraChangeBtn onPress={onCameraSwtich}>
            <Ionicons
              color="#fff"
              name="ios-camera-reverse-outline"
              size={45}
            />
          </CameraChangeBtn>
        </ButtonsContainer>
      </Actions>
    </Container>
  );
}
