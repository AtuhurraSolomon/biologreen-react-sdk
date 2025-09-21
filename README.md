Bio-Logreen React SDK


The official React SDK for the Bio-Logreen Facial Authentication API.

This SDK provides a headless React Hook (useBioLogreen) that manages camera access, real-time face detection, and API communication, giving you the flexibility to build a completely custom UI for your login and signup flows.

Features


Headless by Design: Provides all the logic; you provide the UI.

Promise-Based API: Modern async/await friendly functions (signupWithFace, loginWithFace) for clean code.

Simple Hook-based API: Integrates seamlessly into your React components.

Consistent Configuration: Uses the standard apiKey and baseURL props, matching the other Bio-Logreen SDKs.

Installation


npm install @biologreen/react react-webcam face-api.js axios

Setup & Configuration


This SDK relies on face-api.js for face detection, which requires model files to be available in your application.

Download AI Models: You must download the tiny_face_detector model weights from the face-api.js repository.

Host the Models:

Place the downloaded model files in your project's /public/models directory. The SDK will automatically fetch them from this location.

Quick Start: Usage Example


Here is a complete example of a login component that uses the useBioLogreen hook.

import React from 'react';
import Webcam from 'react-webcam';
import { useBioLogreen } from '@biologreen/react';

function MyLoginComponent() {
  // 1. Initialize the hook with your API key
  const {
    webcamRef,
    modelsLoaded,
    isLoading,
    error,
    signupWithFace,
    loginWithFace,
  } = useBioLogreen({
    apiKey: 'YOUR_PROJECT_API_KEY',
    baseURL: 'http://localhost:8000/v1' // Optional: for local testing
  });

  const handleSignup = async () => {
    try {
      const response = await signupWithFace();
      alert(`Signup Success! User ID: ${response.user_id}`);
      console.log('Signup Response:', response);
    } catch (err) {
      alert(`Signup Failed: ${err.detail || err.message}`);
      console.error('Signup Error:', err);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await loginWithFace();
      alert(`Login Success! User ID: ${response.user_id}`);
      console.log('Login Response:', response);
    } catch (err) {
      alert(`Login Failed: ${err.detail || err.message}`);
      console.error('Login Error:', err);
    }
  };

  if (!modelsLoaded) {
    return <div>Loading AI Models...</div>;
  }

  return (
    <div>
      <h1>Bio-Logreen Authentication</h1>
      <div style={{ position: 'relative', width: '640px' }}>
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
        />
        {isLoading && <div style={{ 
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
            background: 'rgba(0,0,0,0.5)', color: 'white', 
            display: 'flex', alignItems: 'center', justifyContent: 'center' 
        }}>Processing...</div>}
      </div>
      
      <div>
        <button onClick={handleSignup} disabled={isLoading}>
          Sign Up with Face
        </button>
        <button onClick={handleLogin} disabled={isLoading}>
          Log In with Face
        </button>
      </div>

      {error && <p style={{ color: 'red' }}>Error: {error.detail || error.message}</p>}
    </div>
  );
}

export default MyLoginComponent;


API Reference


useBioLogreen({ apiKey, baseURL })

Parameters
apiKey (string, required): Your project's secret API key.

baseURL (string, optional): A custom base URL for the Bio-Logreen API. Defaults to the production URL.

Return Values
webcamRef: A React ref object to be attached to your <Webcam> component.

modelsLoaded (boolean): true once the required AI models have been loaded.

isLoading (boolean): true when an API call is in progress.

error (object | null): An error object if the last operation failed.

signupWithFace(customFields): An async function to trigger a signup. Returns a Promise.

loginWithFace(): An async function to trigger a login. Returns a Promise.
