// pages/games/[gameId]/page.tsx
"use client";
import React, { useEffect, useState, useRef } from 'react';
import Peer from 'simple-peer';

const GameStream: React.FC = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  
  const peerRef = useRef<Peer | null>(null); // Correctly typed ref for Peer instance
  const wsRef = useRef<WebSocket | null>(null);
  const videoElementRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const ws = new WebSocket('wss://89dd-94-31-68-71.ngrok-free.app')

    const peer = new Peer({ initiator: false, trickle: false });
    peerRef.current = peer;

    ws.onopen = () => {
      console.log('Client WebSocket connection established');
      ws.send(JSON.stringify({ type: 'request-offer' }));
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'signal') {
          console.log('Client: Received signal from server:', data.signal);
          peer.signal(data.signal);
        }
      } catch (err) {
        console.error('Error handling message:', err);
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('WebSocket closed');
    };

    peer.on('signal', (signal) => {
      console.log('Client: Sending signal to server:', signal);
      ws.send(JSON.stringify({ type: 'signal', signal }));
    });

    peer.on('connect', () => {
      console.log('Client: WebRTC connection established with server');
    });

    peer.on('data', (data: unknown) => {
      if (typeof data === 'string') {
        console.log('Client: Received string data:', data);
      } else {
        console.log('Client: Received non-string data:', data);
      }
    });

    peer.on('stream', (remoteStream) => {
      console.log('Client: Received remote stream', remoteStream);
      setStream(remoteStream);
    });

    peer.on('error', (err) => {
      console.error('Client: Peer error:', err);
    });

    peer.on('close', () => {
      console.log('Client: Peer connection closed');
    });

    return () => {
      console.log('Cleanup function called');
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
      if (peer) {
        console.log('Destroying peer in cleanup');
        peer.destroy();
      }
    };
  }, []);

  // Handle the video stream once it's available
  useEffect(() => {
    const videoElement = videoElementRef.current;
    if (stream && videoElement) {
      console.log('Setting video srcObject');
      videoElement.srcObject = stream;
      videoElement.onloadedmetadata = () => {
        videoElement.play().catch((error) => {
          console.error('Error playing video:', error);
        });
      };
    }
  }, [stream]);

  // Handle keyboard, mouse, and touch inputs
  useEffect(() => {
    const peer = peerRef.current;
    const videoElement = videoElementRef.current;

    if (peer && videoElement) {
      const handleMouseMove = (event: MouseEvent) => {
        const rect = videoElement.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const message = {
          type: 'mouse-move',
          x,
          y,
        };
        peer.send(JSON.stringify(message));
      };

      const handleMouseDown = (event: MouseEvent) => {
        const rect = videoElement.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const message = {
          type: 'mouse-down',
          button: event.button,
          x,
          y,
        };
        peer.send(JSON.stringify(message));
      };

      const handleMouseUp = (event: MouseEvent) => {
        const rect = videoElement.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const message = {
          type: 'mouse-up',
          button: event.button,
          x,
          y,
        };
        peer.send(JSON.stringify(message));
      };

      const handleKeyDown = (event: KeyboardEvent) => {
        const message = {
          type: 'key-down',
          key: event.key,
          code: event.code,
        };
        peer.send(JSON.stringify(message));
      };

      const handleKeyUp = (event: KeyboardEvent) => {
        const message = {
          type: 'key-up',
          key: event.key,
          code: event.code,
        };
        peer.send(JSON.stringify(message));
      };

      const handleTouchStart = (event: TouchEvent) => {
        const touch = event.touches[0];
        const rect = videoElement.getBoundingClientRect();
        const x = (touch.clientX - rect.left) / rect.width;
        const y = (touch.clientY - rect.top) / rect.height;
        const message = {
          type: 'touch-start',
          x,
          y,
        };
        peer.send(JSON.stringify(message));
      };

      const handleTouchMove = (event: TouchEvent) => {
        const touch = event.touches[0];
        const rect = videoElement.getBoundingClientRect();
        const x = (touch.clientX - rect.left) / rect.width;
        const y = (touch.clientY - rect.top) / rect.height;
        const message = {
          type: 'touch-move',
          x,
          y,
        };
        peer.send(JSON.stringify(message));
      };

      const handleTouchEnd = (event: TouchEvent) => {
        const touch = event.changedTouches[0];
        const rect = videoElement.getBoundingClientRect();
        const x = (touch.clientX - rect.left) / rect.width;
        const y = (touch.clientY - rect.top) / rect.height;
        const message = {
          type: 'touch-end',
          x,
          y,
        };
        peer.send(JSON.stringify(message));
      };

      videoElement.addEventListener('mousemove', handleMouseMove);
      videoElement.addEventListener('mousedown', handleMouseDown);
      videoElement.addEventListener('mouseup', handleMouseUp);
      videoElement.addEventListener('touchstart', handleTouchStart);
      videoElement.addEventListener('touchmove', handleTouchMove);
      videoElement.addEventListener('touchend', handleTouchEnd);
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);

      return () => {
        videoElement.removeEventListener('mousemove', handleMouseMove);
        videoElement.removeEventListener('mousedown', handleMouseDown);
        videoElement.removeEventListener('mouseup', handleMouseUp);
        videoElement.removeEventListener('touchstart', handleTouchStart);
        videoElement.removeEventListener('touchmove', handleTouchMove);
        videoElement.removeEventListener('touchend', handleTouchEnd);
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', background: '#000' }}>
      <video
        ref={videoElementRef}
        autoPlay
        playsInline
        muted
        onError={(e) => console.error('Video element error:', e)}
        style={{ width: '100%', height: '100%', cursor: 'none' }}
      />
    </div>
  );
};

export default GameStream;
