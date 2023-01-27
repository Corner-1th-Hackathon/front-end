import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import "../css/MapPage.css";
import { mapdata } from "../data/mapData";
import mapMarker from "../images/map_marker.png";
const { kakao } = window;

const MapPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      /// 지도의 중심 좌표 ///
      center: new kakao.maps.LatLng(37.44, 126.8320201),
      /// 지도의 레벨(확대, 축소 정도) ///
      level: 10,
    };
    /// 지도 생성 및 객체 리턴 ///
    const map = new kakao.maps.Map(container, options);

    ////// 마커이미지 주소 //////
    const imageSrc = mapMarker,
      ///// 마커이미지 크기 /////
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

      /////// 마커 생성 ///////
      const marker = new kakao.maps.Marker({
        ////// 마커가 표시 될 지도 //////
        map: map,
        //// 마커가 표시 될 위치 /////
        position: new kakao.maps.LatLng(el.lat, el.lng),
        //// 마커이미지 설정/////
        image: markerImage,
      });

      ///// 커스텀 오버레이 생성 /////
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

      kakao.maps.event.addListener(marker, "click", function () {
        onClick();
      });

      function closeOverlay() {
        mapCustomOverlay.setMap(null);
      }

      function onClick() {
        navigate("/detail/1");
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
