import { useState, useEffect, useRef, useCallback } from 'react';
import * as faceapi from 'face-api.js';
import axios from 'axios';

// This is the improved hook, consistent with your other SDKs
export const useBioLogreen = ({ apiKey, baseURL = 'https://api.biologreen.com/v1' }) => {
    const [modelsLoaded, setModelsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [faceDetected, setFaceDetected] = useState(false);

    const webcamRef = useRef(null);
    const detectionInterval = useRef(null);

    // 1. Load AI Models
    useEffect(() => {
        const loadModels = async () => {
            // The developer must host these model files in their /public/models folder
            const MODEL_URL = '/models'; 
            try {
                await Promise.all([
                    faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
                ]);
                setModelsLoaded(true);
            } catch (err) {
                console.error('BioLogreen SDK Error: Could not load face models.', err);
                setError({ message: "AI models failed to load." });
            }
        };
        loadModels();
    }, []);

    // 2. Function to capture an image and call the API
    const captureAndAuthenticate = useCallback(async (endpoint, customFields = null) => {
        if (!webcamRef.current) {
            throw new Error("Webcam reference is not set.");
        }

        const imageSrc = webcamRef.current.getScreenshot();
        if (!imageSrc) {
            throw new Error("Could not capture an image from the webcam.");
        }

        const base64Data = imageSrc.split(',')[1];
        const payload = { image_base64: base64Data };
        if (customFields) {
            payload.custom_fields = customFields;
        }

        const response = await axios.post(`${baseURL}${endpoint}`, payload, {
            headers: { 'X-API-KEY': apiKey }
        });

        return response.data;
    }, [apiKey, baseURL]);

    // 3. The new public functions that developers will call
    const signupWithFace = useCallback(async (customFields = null) => {
        setIsLoading(true);
        setError(null);
        try {
            const result = await captureAndAuthenticate('/auth/signup-face', customFields);
            setIsLoading(false);
            return result;
        } catch (err) {
            setIsLoading(false);
            const apiError = err.response?.data || { message: "An unknown error occurred." };
            setError(apiError);
            throw apiError;
        }
    }, [captureAndAuthenticate]);

    const loginWithFace = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const result = await captureAndAuthenticate('/auth/login-face');
            setIsLoading(false);
            return result;
        } catch (err) {
            setIsLoading(false);
            const apiError = err.response?.data || { message: "An unknown error occurred." };
            setError(apiError);
            throw apiError;
        }
    }, [captureAndAuthenticate]);

    return {
        webcamRef,
        modelsLoaded,
        isLoading,
        error,
        signupWithFace,
        loginWithFace,
    };
};