import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Camera } from "expo-camera";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.bgColor};
`;

const Actions = styled.View`
  flex: 0.35;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TakePhotoBtn = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.theme.cameraBtnColor};
  border: 2px solid ${(props) => props.theme.cameraBtnColor};
  border-radius: 40px;
`;

export default function TakePhoto() {
  const [ok, setOk] = useState(false);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const getPermissions = async () => {
    const { granted } = await Camera.requestPermissionsAsync();
    setOk(granted);
  };
  useEffect(() => {
    getPermissions();
  }, []);
  // 요청 거부시 재 요청 묻는 component 나 button
  return (
    <Container>
      <Camera type={cameraType} style={{ flex: 1 }} />
      <Actions>
        <TakePhotoBtn></TakePhotoBtn>
        <TouchableOpacity>
          <Ionicons />
        </TouchableOpacity>
      </Actions>
    </Container>
  );
}
