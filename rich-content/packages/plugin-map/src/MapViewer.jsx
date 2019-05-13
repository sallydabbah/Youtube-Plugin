import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import ReactGoogleMapLoader from 'react-google-maps-loader';
import isEqual from 'lodash/isEqual';
import { validate, Context } from 'wix-rich-content-common';
import schema from '../statics/data-schema.json';

const GoogleMapWrapper = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={{ lat: props.lat, lng: props.lng }}
    center={{ lat: props.lat, lng: props.lng }}
    zoom={props.zoom}
    options={{
      draggable: props.isDraggingAllowed,
      mapTypeId: props.mode,
      zoomControl: props.isZoomControlShown,
      streetViewControl: props.isStreetViewControlShown,
      mapTypeControl: props.isViewControlShown,
    }}
  >
    <Marker
      options={{ visible: props.isMarkerShown }}
      title={props.markerTitle}
      position={{ lat: props.lat, lng: props.lng }}
      onClick={props.onMarkerClick}
    >
      {props.isMarkerTooltipRendered && props.markerTooltipContent.trim() !== '' && (
        <InfoWindow onCloseClick={props.onMarkerTooltipCloseClick}>
          <p style={{ margin: 0 }}>{props.markerTooltipContent}</p>
        </InfoWindow>
      )}
    </Marker>
  </GoogleMap>
));

export class MapViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMarkerTooltipRendered: true,
    };
    validate(props.componentData, schema);
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.componentData, this.props.componentData)) {
      validate(nextProps.componentData, schema);
    }
  }

  componentDidMount() {
    if (!this.props.componentData.config.width) {
      if (this.props.settings && this.props.settings.width) {
        this.props.componentData.config.width = this.props.settings.width;
      } else if (this.element) {
        const { width } = this.element.getBoundingClientRect();
        this.props.componentData.config.width = width;
      }
    }

    if (!this.props.componentData.config.height) {
      if (this.props.settings && this.props.settings.height) {
        this.props.componentData.config.height = this.props.settings.height;
      }
    }
  }

  setRootElementRef = elm => (this.element = elm);

  render() {
    const {
      componentData: { mapSettings, config: { width, height } = {} },
      settings: { googleMapApiKey } = {},
    } = this.props;

    const style = {
      width: this.context.isMobile ? 'auto' : width,
      height,
      whiteSpace: 'initial',
    };

    return (
      <div ref={this.setRootElementRef} style={style}>
        <ReactGoogleMapLoader
          params={{
            key: googleMapApiKey,
            libraries: 'geometry,drawing,places',
          }}
          render={googleMaps =>
            googleMaps && (
              <GoogleMapWrapper
                isMarkerShown={mapSettings.isMarkerShown}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={style} />}
                mapElement={<div style={{ height: `100%` }} />}
                lat={Number(mapSettings.lat)}
                lng={Number(mapSettings.lng)}
                markerTitle={mapSettings.address}
                markerTooltipContent={mapSettings.locationDisplayName}
                zoom={mapSettings.zoom}
                onMarkerTooltipCloseClick={() => this.setState({ isMarkerTooltipRendered: false })}
                onMarkerClick={() =>
                  this.setState({ isMarkerTooltipRendered: !this.state.isMarkerTooltipRendered })
                }
                isMarkerTooltipRendered={this.state.isMarkerTooltipRendered}
                mode={mapSettings.mode}
                isZoomControlShown={mapSettings.isZoomControlShown}
                isStreetViewControlShown={mapSettings.isStreetViewControlShown}
                isViewControlShown={mapSettings.isViewControlShown}
                isDraggingAllowed={mapSettings.isDraggingAllowed}
                {...this.props}
              />
            )
          }
        />
      </div>
    );
  }
}

MapViewer.contextType = Context.type;

MapViewer.propTypes = {
  componentData: PropTypes.object.isRequired,
  settings: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    googleMapApiKey: PropTypes.string.isRequired,
    mapSettings: PropTypes.object,
  }).isRequired,
};
