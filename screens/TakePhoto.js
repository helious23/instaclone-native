import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components/native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { Alert, Image, Platform, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as MediaLibrary from "expo-media-library";
import { useIsFocused } from "@react-navigation/native";
import { theme } from "../styles";

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

const PhotoActions = styled(Actions)`
  flex-direction: row;
`;

const PhotoAction = styled.TouchableOpacity`
  background-color: white;
  padding: 5px 25px;
  border-radius: 5px;
`;
const PhotoActionText = styled.Text`
  font-weight: 600;
`;

export default function TakePhoto({ navigation }) {
  const camera = useRef();
  const [takenPhoto, setTakenPhoto] = useState("");
  const [cameraReady, setCameraReady] = useState(false);
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
  const goToUpload = async (save) => {
    if (save) {
      await MediaLibrary.saveToLibraryAsync(takenPhoto);
    }
    navigation.navigate("UploadForm", {
      file: takenPhoto,
    });
  };
  const onUpload = () => {
    if (Platform.OS !== "web") {
      Alert.alert("Save photo?", "Save photo & upload or just upload", [
        {
          text: "Save & Upload",
          onPress: () => goToUpload(true),
        },
        {
          text: "Just Upload",
          // style: "destructive", // ios only
          onPress: () => goToUpload(false),
        },
      ]);
    } else {
      if (confirm("Upload photo?")) {
        goToUpload(false);
      } else {
        onDismiss();
      }
    }
  };
  const onCameraReady = () => setCameraReady(true);
  const takePhoto = async () => {
    if (camera.current && cameraReady) {
      const { uri } = await camera.current.takePictureAsync({
        quality: 1,
        exif: true,
      });
      setTakenPhoto(uri);
    }
  };
  const onDismiss = () => setTakenPhoto("");
  const isFocused = useIsFocused();
  // 요청 거부시 재 요청 묻는 component 나 button
  return (
    <Container>
      {isFocused ? <StatusBar hidden={true} /> : null}
      {takenPhoto === "" ? (
        <Camera
          type={cameraType}
          style={{ flex: 1 }}
          zoom={zoom}
          flashMode={flashMode}
          ref={camera}
          onCameraReady={onCameraReady}
        >
          <CloseBtn onPress={() => navigation.navigate("Tabs")}>
            <Ionicons
              name="close"
              size={30}
              color={theme === "dark" ? "#fff" : "#000"}
            />
          </CloseBtn>
        </Camera>
      ) : (
        <Image source={{ uri: takenPhoto }} style={{ flex: 1 }} />
      )}
      {takenPhoto === "" ? (
        <Actions>
          <SliderContainer>
            <Slider
              style={{ width: 200, height: 40 }}
              value={zoom}
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
            <TakePhotoBtn onPress={takePhoto} />
            <CameraChangeBtn onPress={onCameraSwtich}>
              <Ionicons
                color="#fff"
                name="ios-camera-reverse-outline"
                size={45}
              />
            </CameraChangeBtn>
          </ButtonsContainer>
        </Actions>
      ) : (
        <PhotoActions>
          <PhotoAction onPress={onDismiss}>
            <PhotoActionText>Dismiss</PhotoActionText>
          </PhotoAction>
          <PhotoAction onPress={onUpload}>
            <PhotoActionText>Upload</PhotoActionText>
          </PhotoAction>
        </PhotoActions>
      )}
    </Container>
  );
}
