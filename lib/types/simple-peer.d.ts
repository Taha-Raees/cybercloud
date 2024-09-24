declare module 'simple-peer' {
    interface SimplePeerOptions {
      initiator?: boolean;
      trickle?: boolean;
      stream?: MediaStream;
      config?: RTCConfiguration;
      channelConfig?: RTCDataChannelInit;
      channelName?: string;
      reconnectTimer?: number;
      iceTransportPolicy?: 'all' | 'relay';
      offerOptions?: RTCOfferOptions;
      answerOptions?: RTCAnswerOptions;
      sdpTransform?: (sdp: string) => string;
      streams?: MediaStream[];
      wrtc?: unknown; // Replace `any` with `unknown`
    }
  
    interface SignalData {
      sdp?: string;
      type?: string;
      candidate?: RTCIceCandidateInit;
    }
  
    export default class Peer {
      constructor(opts?: SimplePeerOptions);
      signal(data: SignalData): void;
      send(data: unknown): void; // Replace `any` with `unknown`
      destroy(): void;
      addStream(stream: MediaStream): void;
  
      on(event: 'signal', listener: (data: SignalData) => void): this;
      on(event: 'connect', listener: () => void): this;
      on(event: 'data', listener: (data: unknown) => void): this; // Replace `any` with `unknown`
      on(event: 'stream', listener: (stream: MediaStream) => void): this;
      on(event: 'close', listener: () => void): this;
      on(event: 'error', listener: (err: unknown) => void): this;
    }
  }
  