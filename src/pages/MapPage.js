import React, { useEffect } from "react";
import "../css/MapPage.css";
import { mapdata } from "../data/mapData";
import mapMarker from "../images/map_marker.png";
const { kakao } = window;

const MapPage = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.44, 126.8320201),
      level: 10,
    };
    const map = new kakao.maps.Map(container, options);

    const imageSrc = mapMarker,
      imageSize = new kakao.maps.Size(40, 40),
      imageOption = { offset: new kakao.maps.Point(18, 38) };
    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    mapdata.forEach((el) => {
      const content =
        '<div class="markerbox-wrap">' +
        ' <div class="markerbox-info">' +
        '  <div class="markerbox-image">' +
        '     <img class="markerbox-picture-image" src=' +
        el.image +
        ' alt="img" width="100%" height="110vh"/>' +
        "</div>" +
        '   <div class="markerbox-position">' +
        el.position +
        "</div>" +
        '   <div class="markerbox-date">' +
        el.date +
        "</div>" +
        "</div>" +
        "</div>";

      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(el.lat, el.lng),
        image: markerImage,
      });

      const mapCustomOverlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: marker.getPosition(),
      });

      mapCustomOverlay.setMap(null);

      kakao.maps.event.addListener(marker, "mouseover", function () {
        mapCustomOverlay.setMap(map);
      });

      kakao.maps.event.addListener(marker, "mouseout", function () {
        closeOverlay();
      });

      function closeOverlay() {
        mapCustomOverlay.setMap(null);
      }
    });
  });

  return (
    <>
      <div id="map" className="Map"></div>
    </>
  );
};

export default MapPage;
