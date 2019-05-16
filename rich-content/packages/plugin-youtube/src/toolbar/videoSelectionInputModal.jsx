import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import InfiniteScroll from 'react-infinite-scroller';
import MDSpinner from 'react-md-spinner';
import {
  mergeStyles,
  isVideoUrl,
  TextInput,
  CloseIcon,
  Button,
  WixUtils,
  VideoDetails
} from 'wix-rich-content-common';
import styles from '../../statics/styles/video-selection-input-modal.scss';

export default class VideoSelectionInputModal extends Component {
  constructor(props) {
    super(props);
    this.styles = mergeStyles({ styles, theme: props.theme });
    const { componentData } = this.props;
    this.state = {
      url: (!componentData.isCustomVideo && componentData.src) || '',
      pathname: '',
      thumbnail: { pathname: '', width: 0, height: 0 },
      isCustomVideo: false,
      errorMsg: '',
    };
  }

  onUrlChange = e => {
    const url = e.target.value;
    this.setState({ url });
  };

  afterOpenModal = () => this.input.focus();

  onConfirm = () => {
    const { url, pathname, thumbnail, isCustomVideo } = this.state;
    const src = pathname.length ? { pathname, thumbnail } : url;
    if (isVideoUrl(url) || isCustomVideo) {
      const { componentData, helpers, pubsub, onConfirm } = this.props;
      if (onConfirm) {
        onConfirm({ ...componentData, src, isCustomVideo: this.state.isCustomVideo });
      } else {
        pubsub.update('componentData', { src, isCustomVideo: this.state.isCustomVideo });
      }

      if (helpers && helpers.onVideoSelected) {
        helpers.onVideoSelected(src, data =>
          pubsub.update('componentData', { metadata: { ...data } })
        );
      }

      this.onCloseRequested();
    } else {
      this.setState({ submitted: true });
    }
  };

  handleCustomVideoUpload = ({ data, error }) => {
    if (error) {
      this.setState({ errorMsg: error.msg });
    } else {
      if (data.pathname) {
        this.setState({
          url: '',
          pathname: data.pathname,
          thumbnail: data.thumbnail,
          isCustomVideo: true,
        });
      } else {
        this.setState({ url: data.url, pathname: '', isCustomVideo: true });
      }
      this.onConfirm();
    }
  };

  onCloseRequested = () => {
    this.setState({ isOpen: false });
    this.props.helpers.closeModal();
  };

  handleKeyPress = e => {
    if (e.charCode === 13) {
      this.onConfirm();
    }
  };

  //These two function needed to handle onFocus select for iphone devices
  componentDidMount() {
    this.input.focus();
    this.input.setSelectionRange(0, this.input.value.length);
  }

  render() {
    const { url, submitted, errorMsg } = this.state;
    const { t, handleFileSelection, enableCustomUploadOnMobile } = this.props;
    const { styles } = this;
    let divStyle = {
      position: 'absolute',
      width: 'calc(100% - 21px)',
      left: '18px',
      bottom: '0px',
      height: 'calc(100% - 210px)',
      overflow: 'auto',
      paddingRight: '6px',
      }
      let more={
        marginTop: '20px',
        textAlign: 'center'
      }
      let empty_modal={
        position: 'absolute',
        top: 'calc(50% - 17px)',
        left: 'calc(50% - 17px)',
        transform: 'translateX(-50%) translateY(-50%)',

    }
    const loader = (
      <div
        style={more
        }
      >
        <MDSpinner borderSize={1.5} singleColor="#000000" />
      </div>
    );


    const uploadVideoSection = (
      <div>
        <div className={styles.video_modal_or_upload_video_from}>
          {t('VideoUploadModal_CustomVideoHeader')}
        </div>
        <div className={styles.video_modal_upload_video}>
          <div
            role="button"
            onClick={() =>
              handleFileSelection(
                ({ data, error }) => this.handleCustomVideoUpload({ data, error }),
                () => this.onCloseRequested()
              )
            }
            tabIndex={0}
            onKeyDown={() =>
              handleFileSelection(({ data, error }) =>
                this.handleCustomVideoUpload({ data, error })
              )
            }
          >
            + {t('VideoUploadModal_CustomVideoClickText')}
          </div>
          {errorMsg.length > 0 && <div className={styles.video_modal_error_msg}>{errorMsg}</div>}
        </div>
      </div>
    );
    return (
      <div>
        <div
          className={styles[`video_modal_container_${handleFileSelection ? 'big' : 'small'}`]}
          data-hook="videoUploadModal"
        >
          {!WixUtils.isMobile() && (
            <CloseIcon
              className={styles.video_modal_closeIcon}
              onClick={() => this.onCloseRequested()}
            />
          )}
          <h2 className={styles.video_modal_add_a_Video}>{t('VideoUploadModal_Title')}</h2>
          <div
            role="heading"
            aria-labelledby="video_modal_hdr"
            className={styles.video_modal_header}
          >
            <h3 id="video_modal_hdr" className={styles.video_modal_header_text}>
              {t('VideoUploadModal_Header')}
            </h3>
          </div>
          <div>
            <div
              className={
                styles[`video_modal_textInput_${handleFileSelection ? 'customWidth' : 'fullWidth'}`]
              }
            >
              <TextInput
                inputRef={ref => {
                  this.input = ref;
                }}
                type="url"
                onKeyPress={this.handleKeyPress}
                onChange={this.onUrlChange}
                value={url}
                error={
                  !isVideoUrl(url) && submitted ? t('VideoUploadModal_Input_InvalidUrl') : null
                }
                placeholder={t('VideoUploadModal_Input_Placeholder')}
                theme={styles}
                data-hook="videoUploadModalInput"
              />
            </div>
            <Button
              className={
                styles[`video_modal_add_button_${handleFileSelection ? 'inline' : 'inMiddle'}`]
              }
              onClick={() => this.onConfirm()}
              ariaProps={!this.state.url && { disabled: 'disabled' }}
            >
              {t('VideoUploadModal_AddButtonText')}
            </Button>
          </div>
          {(!WixUtils.isMobile() || enableCustomUploadOnMobile) &&
            handleFileSelection &&
            uploadVideoSection}
        </div>
       
        <div style={divStyle}>

          <Scrollbars
            renderThumbVertical={
              () => <div style={
                {
                  background: '#000000',
                  borderRadius: '4px',
                  width: '4px',
                  marginLeft: '-2px'
                }} />}
            style={{ height: '100%' }}
          >


            <InfiniteScroll
              pageStart={0}
              loadMore={null}
              hasMore={true}
              loader={loader}
              useWindow={false}
              style={{ height: '100%' }}
            >
              <VideoDetails></VideoDetails>
              <VideoDetails></VideoDetails>

              <VideoDetails></VideoDetails>
              <VideoDetails></VideoDetails>

              <VideoDetails></VideoDetails>
              <VideoDetails></VideoDetails>

              <VideoDetails></VideoDetails>
              <VideoDetails></VideoDetails>
            </InfiniteScroll>



          </Scrollbars>
        </div>

      </div>

    );
  }
}

VideoSelectionInputModal.propTypes = {
  onConfirm: PropTypes.func,
  pubsub: PropTypes.object,
  helpers: PropTypes.object.isRequired,
  componentData: PropTypes.object.isRequired,
  url: PropTypes.string,
  theme: PropTypes.object.isRequired,
  doneLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  t: PropTypes.func,
  handleFileSelection: PropTypes.func,
  enableCustomUploadOnMobile: PropTypes.bool,
};
