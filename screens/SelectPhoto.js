import React from "react";
import * as MediaLibrary from "expo-media-library";
import styled from "styled-components/native";
import { useEffect } from "react";
import { useState } from "react";

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.bgColor};
`;

const Top = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.bgColor};
`;

const Bottom = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.bgColor};
`;

export default function SelectPhoto() {
  const [ok, setOk] = useState(false);
  const [photos, setPhotos] = useState([]);
  const getPhotos = async () => {
    if (ok) {
      const { assets: photos } = await MediaLibrary.getAssetsAsync();
      setPhotos(photos);
    }
  };
  const getPermissions = async () => {
    const { accessPrivileges, canAskAgain } =
      await MediaLibrary.getPermissionsAsync();
    if (accessPrivileges === "none" && canAskAgain) {
      const { accessPrivileges } = await MediaLibrary.requestPermissionsAsync();
      if (accessPrivileges !== "none") {
        setOk(true);
      }
    } else if (accessPrivileges !== "none") {
      setOk(true);
    }
  };
  useEffect(() => {
    getPermissions();
    getPhotos();
  }, []);
  return (
    <Container>
      <Top />
      <Bottom></Bottom>
    </Container>
  );
}
