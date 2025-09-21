import { useState, useEffect, useRef, useCallback } from 'react';
import * as faceapi from 'face-api.js';
import axios from 'axios';

export const useBioLogreen = ({ apiEndpoint, onSuccess, onFailure }) => {
    const [modelsLoaded, setModelsLoaded] = useState(false);
    const [status, setStatus] = useState('idle'); // idle, detecting, capturing, success, error
    const webcamRef = useRef(null);
    const detectionInterval = useRef(null);

    // 1. Load AI Models
    useEffect(() => {
        const loadModels = async () => {
            const MODEL_URL = '/models'; // The developer must host these models
            try {
                await Promise.all([
                    faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
                ]);
                setModelsLoaded(true);
            } catch (error) {
                console.error('BioLogreen SDK Error: Could not load face models.', error);
                setStatus('error');
                if (onFailure) onFailure({ message: "AI models failed to load." });
            }
        };
        loadModels();
    }, [onFailure]);

    // 2. The function to start face detection
    const startDetection = useCallback(() => {
        if (!modelsLoaded || status === 'detecting') return;
        
        setStatus('detecting');
        detectionInterval.current = setInterval(async () => {
            if (webcamRef.current && webcamRef.current.video) {
                const video = webcamRef.current.video;
                if (video.readyState !== 4) return;

                const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions());
                if (detections.length === 1) {
                    clearInterval(detectionInterval.current);
                    setStatus('capturing');
                    // Wait a moment for a clear shot, then capture
                    setTimeout(() => captureAndAuthenticate(), 500);
                }
            }
        }, 1000);
    }, [modelsLoaded, status]);

    // 3. The function to capture the image and call the API
    const captureAndAuthenticate = async () => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            if (!imageSrc) {
                setStatus('error');
                if (onFailure) onFailure({ message: "Could not capture image." });
                return;
            }
            const base64Data = imageSrc.split(',')[1];
            try {
                const response = await axios.post(apiEndpoint, { image_base64: base64Data });
                setStatus('success');
                if (onSuccess) onSuccess(response.data);
            } catch (error) {
                setStatus('error');
                if (onFailure) onFailure(error.response?.data || { message: "Authentication failed." });
            }
        }
    };

    // Cleanup interval on unmount
    useEffect(() => {
        return () => {
            if (detectionInterval.current) {
                clearInterval(detectionInterval.current);
            }
        };
    }, []);

    return {
        webcamRef,
        status, 
        modelsLoaded,
        startDetection,
    };
};
