// Type definitions for react-native-video 5.0
// Project: https://github.com/react-native-community/react-native-video, https://github.com/brentvatne/react-native-video
// Definitions by: HuHuanming <https://github.com/huhuanming>
//                 Nekith <https://github.com/Nekith>
//                 Philip Frank <https://github.com/bananer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { ViewProps, NativeSyntheticEvent } from 'react-native';

export interface OnLoadData {
    canPlayFastForward: boolean;
    canPlayReverse: boolean;
    canPlaySlowForward: boolean;
    canPlaySlowReverse: boolean;
    canStepBackward: boolean;
    canStepForward: boolean;
    currentPosition: number;
    currentTime: number;
    duration: number;
    naturalSize: {
        height: number;
        width: number;
        orientation: 'portrait' | 'landscape';
    };
    videoTracks: Array<{
        bitrate: number;
        codecs: string;
        width: number;
        height: number;
        trackId: string;
    }>;
    audioTracks: Array<{
        index: number;
        title: string;
        language: string;
        type: string;
    }>;
    textTracks: Array<{
        index: number;
        title: string;
        language: string;
        type: string;
    }>;
}

export interface OnProgressData {
    currentTime: number;
    playableDuration: number;
    seekableDuration: number;
    currentPlaybackTime?: number;
}

export interface OnBandwidthUpdateData {
    bitrate: number;
}

export interface LoadError {
    error: {
        '': string;
        errorString: string;
    };
}

export interface OnSeekData {
    currentTime: number;
    seekTime: number;
    target?: number | undefined;
}

export interface OnPlaybackRateData {
    playbackRate: number;
}

export interface OnPictureInPictureStatusData {
    isActive: boolean;
}

export interface OnExternalPlaybackChangeData {
    isExternalPlaybackActive: boolean;
}

export interface OnBufferData {
    isBuffering: boolean;
}

export type DRMSettings = Readonly<{
    type?: DrmType;
    licenseServer?: string;
    headers?: Headers;
    contentId?: string; // ios
    certificateUrl?: string; // ios
    base64Certificate?: boolean; // ios default: false
    /* eslint-disable @typescript-eslint/no-unused-vars */
    getLicense?: (
      licenseUrl: string,
      contentId: string,
      spcBase64: string,
    ) => void; // ios
    /* eslint-enable @typescript-eslint/no-unused-vars */
  }>;

export enum AdEvent {
  /**
   * iOS only: Fired the first time each ad break ends. Applications must reenable seeking when this occurs (only used for dynamic ad insertion).
   */
  AD_BREAK_ENDED = 'AD_BREAK_ENDED',
  /**
   * Fires when an ad rule or a VMAP ad break would have played if autoPlayAdBreaks is false.
   */
  AD_BREAK_READY = 'AD_BREAK_READY',
  /**
   * iOS only: Fired first time each ad break begins playback. If an ad break is watched subsequent times this will not be fired. Applications must disable seeking when this occurs (only used for dynamic ad insertion).
   */
  AD_BREAK_STARTED = 'AD_BREAK_STARTED',
  /**
   * Android only: Fires when the ad has stalled playback to buffer.
   */
  AD_BUFFERING = 'AD_BUFFERING',
  /**
   * Android only: Fires when the ad is ready to play without buffering, either at the beginning of the ad or after buffering completes.
   */
  AD_CAN_PLAY = 'AD_CAN_PLAY',
  /**
   * Android only: Fires when an ads list is loaded.
   */
  AD_METADATA = 'AD_METADATA',
  /**
   * iOS only: Fired every time the stream switches from advertising or slate to content. This will be fired even when an ad is played a second time or when seeking into an ad (only used for dynamic ad insertion).
   */
  AD_PERIOD_ENDED = 'AD_PERIOD_ENDED',
  /**
   * iOS only: Fired every time the stream switches from content to advertising or slate. This will be fired even when an ad is played a second time or when seeking into an ad (only used for dynamic ad insertion).
   */
  AD_PERIOD_STARTED = 'AD_PERIOD_STARTED',
  /**
   * Android only: Fires when the ad's current time value changes. The event `data` will be populated with an AdProgressData object.
   */
  AD_PROGRESS = 'AD_PROGRESS',
  /**
   * Fires when the ads manager is done playing all the valid ads in the ads response, or when the response doesn't return any valid ads.
   */
  ALL_ADS_COMPLETED = 'ALL_ADS_COMPLETED',
  /**
   * Fires when the ad is clicked.
   */
  CLICK = 'CLICK',
  /**
   * Fires when the ad completes playing.
   */
  COMPLETED = 'COMPLETED',
  /**
   * Android only: Fires when content should be paused. This usually happens right before an ad is about to cover the content.
   */
  CONTENT_PAUSE_REQUESTED = 'CONTENT_PAUSE_REQUESTED',
  /**
   * Android only: Fires when content should be resumed. This usually happens when an ad finishes or collapses.
   */
  CONTENT_RESUME_REQUESTED = 'CONTENT_RESUME_REQUESTED',
  /**
   * iOS only: Cuepoints changed for VOD stream (only used for dynamic ad insertion).
   */
  CUEPOINTS_CHANGED = 'CUEPOINTS_CHANGED',
  /**
   * Android only: Fires when the ad's duration changes.
   */
  DURATION_CHANGE = 'DURATION_CHANGE',
  /**
   * Fires when an error is encountered and the ad can't be played.
   */
  ERROR = 'ERROR',
  /**
   * Fires when the ad playhead crosses first quartile.
   */
  FIRST_QUARTILE = 'FIRST_QUARTILE',
  /**
   * Android only: Fires when the impression URL has been pinged.
   */
  IMPRESSION = 'IMPRESSION',
  /**
   * Android only: Fires when an ad triggers the interaction callback. Ad interactions contain an interaction ID string in the ad data.
   */
  INTERACTION = 'INTERACTION',
  /**
   * Android only: Fires when the displayed ad changes from linear to nonlinear, or the reverse.
   */
  LINEAR_CHANGED = 'LINEAR_CHANGED',
  /**
   * Fires when ad data is available.
   */
  LOADED = 'LOADED',
  /**
   * Fires when a non-fatal error is encountered. The user need not take any action since the SDK will continue with the same or next ad playback depending on the error situation.
   */
  LOG = 'LOG',
  /**
   * Fires when the ad playhead crosses midpoint.
   */
  MIDPOINT = 'MIDPOINT',
  /**
   * Fires when the ad is paused.
   */
  PAUSED = 'PAUSED',
  /**
   * Fires when the ad is resumed.
   */
  RESUMED = 'RESUMED',
  /**
   * Android only: Fires when the displayed ads skippable state is changed.
   */
  SKIPPABLE_STATE_CHANGED = 'SKIPPABLE_STATE_CHANGED',
  /**
   * Fires when the ad is skipped by the user.
   */
  SKIPPED = 'SKIPPED',
  /**
   * Fires when the ad starts playing.
   */
  STARTED = 'STARTED',
  /**
   * iOS only: Stream request has loaded (only used for dynamic ad insertion).
   */
  STREAM_LOADED = 'STREAM_LOADED',
  /**
   * iOS only: Fires when the ad is tapped.
   */
  TAPPED = 'TAPPED',
  /**
   * Fires when the ad playhead crosses third quartile.
   */
  THIRD_QUARTILE = 'THIRD_QUARTILE',
  /**
   * iOS only: An unknown event has fired
   */
  UNKNOWN = 'UNKNOWN',
  /**
   * Android only: Fires when the ad is closed by the user.
   */
  USER_CLOSE = 'USER_CLOSE',
  /**
   * Android only: Fires when the non-clickthrough portion of a video ad is clicked.
   */
  VIDEO_CLICKED = 'VIDEO_CLICKED',
  /**
   * Android only: Fires when a user clicks a video icon.
   */
  VIDEO_ICON_CLICKED = 'VIDEO_ICON_CLICKED',
  /**
   * Android only: Fires when the ad volume has changed.
   */
  VOLUME_CHANGED = 'VOLUME_CHANGED',
  /**
   * Android only: Fires when the ad volume has been muted.
   */
  VOLUME_MUTED = 'VOLUME_MUTED',
};  

export type OnReceiveAdEventData = Readonly<{
    data?: Record<string, string>;
    event: AdEvent;
}>;

export const TextTrackType: {
    SRT: 'application/x-subrip';
    TTML: 'application/ttml+xml';
    VTT: 'text/vtt';
};

export enum FilterType {
    NONE = '',
    INVERT = 'CIColorInvert',
    MONOCHROME = 'CIColorMonochrome',
    POSTERIZE = 'CIColorPosterize',
    FALSE = 'CIFalseColor',
    MAXIMUMCOMPONENT = 'CIMaximumComponent',
    MINIMUMCOMPONENT = 'CIMinimumComponent',
    CHROME = 'CIPhotoEffectChrome',
    FADE = 'CIPhotoEffectFade',
    INSTANT = 'CIPhotoEffectInstant',
    MONO = 'CIPhotoEffectMono',
    NOIR = 'CIPhotoEffectNoir',
    PROCESS = 'CIPhotoEffectProcess',
    TONAL = 'CIPhotoEffectTonal',
    TRANSFER = 'CIPhotoEffectTransfer',
    SEPIA = 'CISepiaTone',
}

export enum DRMType {
  WIDEVINE = 'widevine',
  PLAYREADY = 'playready',
  CLEARKEY = 'clearkey',
  FAIRPLAY = 'fairplay',
}

export type Headers = Record<string, string>;

export type VideoSrc = Readonly<{
    uri?: string;
    isNetwork?: boolean;
    isAsset?: boolean;
    shouldCache?: boolean;
    type?: string;
    mainVer?: number;
    patchVer?: number;
    requestHeaders?: Headers;
    startPosition?: number;
    cropStart?: number;
    cropEnd?: number;
    title?: string;
    subtitle?: string;
    description?: string;
    customImageUri?: string;
  }>;  
  export type BufferConfig = {
    minBufferMs?: number;
    maxBufferMs?: number;
    bufferForPlaybackMs?: number;
    bufferForPlaybackAfterRebufferMs?: number;
    maxHeapAllocationPercent?: number;
    minBackBufferMemoryReservePercent?: number;
    minBufferMemoryReservePercent?: number;
};

export type OnVideoErrorData = Readonly<{
  error: OnVideoErrorDataDetails;
  target?: number; // ios
}>;

export type OnVideoErrorDataDetails = Readonly<{
  errorString?: string; // android
  errorException?: string; // android
  errorStackTrace?: string; // android
  errorCode?: string; // android
  error?: string; // ios
  code?: number; // ios
  localizedDescription?: string; // ios
  localizedFailureReason?: string; // ios
  localizedRecoverySuggestion?: string; // ios
  domain?: string; // ios
}>;

export interface VideoProperties extends ViewProps {
    filter?: FilterType | undefined;
    filterEnabled?: boolean | undefined;

    /* Native only */
    src?: any;
    stop?: boolean | undefined;
    seek?: number | undefined;
    fullscreen?: boolean | undefined;
    fullscreenOrientation?: 'all' | 'landscape' | 'portrait' | undefined;
    fullscreenAutorotate?: boolean | undefined;
    onVideoLoadStart?(): void;
    onVideoLoad?(): void;
    onVideoBuffer?(): void;
    onVideoError?: (event: NativeSyntheticEvent<OnVideoErrorData>) => void;
    onVideoProgress?(): void;
    onVideoSeek?(): void;
    onVideoEnd?(): void;
    onTimedMetadata?(data: any): void;
    onVideoFullscreenPlayerWillPresent?(): void;
    onVideoFullscreenPlayerDidPresent?(): void;
    onVideoFullscreenPlayerWillDismiss?(): void;
    onVideoFullscreenPlayerDidDismiss?(): void;

    /* Wrapper component */
    // Opaque type returned by require('./video.mp4')
    source: VideoSrc;
    minLoadRetryCount?: number | undefined;
    maxBitRate?: number | undefined;
    resizeMode?: "stretch" | "contain" | "cover" | "none" | undefined; // via Image#resizeMode
    posterResizeMode?: "stretch" | "contain" | "cover" | "none" | undefined; // via Image#resizeMode
    poster?: string | undefined;
    repeat?: boolean | undefined;
    automaticallyWaitsToMinimizeStalling?: boolean | undefined;
    paused?: boolean | undefined;
    muted?: boolean | undefined;
    volume?: number | undefined;
    bufferConfig?: BufferConfig;
    stereoPan?: number | undefined;
    rate?: number | undefined;
    pictureInPicture?: boolean | undefined;
    playInBackground?: boolean | undefined;
    playWhenInactive?: boolean | undefined;
    ignoreSilentSwitch?: 'ignore' | 'obey' | undefined;
    mixWithOthers?: 'inherit' | 'mix' | 'duck' | undefined;
    reportBandwidth?: boolean | undefined;
    disableFocus?: boolean | undefined;
    controls?: boolean | undefined;
    currentTime?: number | undefined;
    progressUpdateInterval?: number | undefined;
    useTextureView?: boolean | undefined;
    hideShutterView?: boolean | undefined;
    allowsExternalPlayback?: boolean | undefined;
    audioOnly?: boolean | undefined;
    preventsDisplaySleepDuringVideoPlayback?: boolean | undefined;
    drm?: DRMSettings | undefined;
    preferredForwardBufferDuration?: number | undefined;

    onLoadStart?(): void;
    onLoad?(data: OnLoadData): void;
    onBuffer?(data: OnBufferData): void;
    onError?(error: LoadError): void;
    onProgress?(data: OnProgressData): void;
    onBandwidthUpdate?(data: OnBandwidthUpdateData): void;
    onSeek?(data: OnSeekData): void;
    onEnd?(): void;
    onFullscreenPlayerWillPresent?(): void;
    onFullscreenPlayerDidPresent?(): void;
    onFullscreenPlayerWillDismiss?(): void;
    onFullscreenPlayerDidDismiss?(): void;
    onReadyForDisplay?(): void;
    onPlaybackStalled?(): void;
    onPlaybackResume?(): void;
    onPlaybackRateChange?(data: OnPlaybackRateData): void;
    onAudioFocusChanged?(): void;
    onAudioBecomingNoisy?(): void;
    onPictureInPictureStatusChanged?(data: OnPictureInPictureStatusData): void;
    onRestoreUserInterfaceForPictureInPictureStop?(): void;
    onExternalPlaybackChange?(data: OnExternalPlaybackChangeData): void;
    onTextTracks?(data: any): void;
    selectedAudioTrack?: {
        type: 'system' | 'disabled' | 'title' | 'language' | 'index';
        value?: string | number | undefined;
    } | undefined;
    selectedTextTrack?: {
        type: 'system' | 'disabled' | 'title' | 'language' | 'index';
        value?: string | number | undefined;
    } | undefined;
    selectedVideoTrack?: {
        type: 'auto' | 'disabled' | 'resolution' | 'index';
        value?: string | number | undefined;
    } | undefined;
    textTracks?: Array<{
        title?: string | undefined;
        language?: string | undefined;
        type: 'application/x-subrip' | 'application/ttml+xml' | 'text/vtt';
        uri: string;
    }> | undefined;

    /* Required by react-native */
    scaleX?: number | undefined;
    scaleY?: number | undefined;
    translateX?: number | undefined;
    translateY?: number | undefined;
    rotation?: number | undefined;
    adTagUrl?: string | undefined;
    onReceiveAdEvent?: (e: OnReceiveAdEventData) => void; //Android, iOS
}

export default class Video extends React.Component<VideoProperties> {
    presentFullscreenPlayer(): void;
    dismissFullscreenPlayer(): void;
    restoreUserInterfaceForPictureInPictureStopCompleted(restored: boolean): void;
    save(): Promise<void>;
    seek(time: number, tolerance?: number): void;
    stop(): void;
}
