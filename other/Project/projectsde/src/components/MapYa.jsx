import React from "react";
import ReactDOM from "react-dom";
import { YMaps, Map, Clusterer, Placemark } from "react-yandex-maps";


const mapState = {
  center: [55.751574, 37.573856],
  zoom: 5
};

class MapYa extends React.Component {
  state = {
    selectedPoint: null
  };

  onPlacemarkClick = point => () => {
    this.setState({ selectedPoint: point });
  };

  render() {
    const { selectedPoint } = this.state;
    return (
      <div>
        <YMaps>
          <Map defaultState={mapState}>

          </Map>
        </YMaps>
        {selectedPoint && (
          <div>
            <h1>Selected point: {selectedPoint.title}</h1>
            <p>{selectedPoint.descr}</p>
          </div>
        )}
      </div>
    );
  }
}

export default MapYa