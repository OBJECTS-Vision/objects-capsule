'use client';

import React, { useState } from "react";
import Capsule, { Environment, CapsuleModal, OAuthMethod } from "@usecapsule/react-sdk";
// Import styles if using v3.5.0 or greater of `@usecapsule/react-sdk`
import "@usecapsule/react-sdk/styles.css";

// Initialize Capsule SDK with your API key and environment
const constructorOpts = {
  // Email configurations
  emailPrimaryColor: "#007bff",
  githubUrl: "https://github.com/OBJECTS-Vision",
  linkedinUrl: "https://www.linkedin.com/company/objectsvision",
  xUrl: "https://x.com/objectsvision",
  homepageUrl: "https://objects.vision",
  supportUrl: "mailto:hi@objects.vision", // Can also be a webpage URL
};

const capsule = new Capsule(
  Environment.BETA,
  process.env.NEXT_PUBLIC_CAPSULE_API_KEY,
  constructorOpts // Customized constructorOpts
);
const App = () => {
  const [isOpen, setIsOpen] = useState(false); // Use any state management you wish, this is purely an example!

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Sign in With Email</button>

      <CapsuleModal
  capsule={capsule}
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  appName="OBJECTS" // Name of your application
  logo="https://d2w9rnfcy7mm78.cloudfront.net/25711818/original_14c8e8cdfedc10092f5a0fd2e608cc34.jpg" // URL for your logo
  theme={{
    backgroundColor: "#000", // Background color of the modal
    foregroundColor: "#fff", // Foreground/highlight color of the modal
  }}
  oAuthMethods={[
    OAuthMethod.GOOGLE,
    OAuthMethod.APPLE,
    OAuthMethod.FARCASTER
  ]}
  disablePhoneLogin={true}
  // Social login options
/>
    </div>
  );
};

export default App;