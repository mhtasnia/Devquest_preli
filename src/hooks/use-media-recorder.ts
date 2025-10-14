"use client";

import { useState, useRef, useCallback, useEffect } from 'react';

type Status = 'idle' | 'permission-requested' | 'recording' | 'stopped' | 'error';

// This hook is no longer in use, but kept for potential future use.
export function useMediaRecorder(videoRef: React.RefObject<HTMLVideoElement>) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<Error | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    // Cleanup function to stop tracks and remove srcObject
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    };
  }, [videoRef]);

  const requestPermissionAndStart = useCallback(async () => {
    setStatus('idle');
    return null;
  }, []);

  const stopRecording = useCallback((): Promise<string> => {
    return Promise.resolve('');
  }, []);
  
  return { status, error, requestPermissionAndStart, stopRecording };
}
