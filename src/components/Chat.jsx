import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        botId: "a9b3cac8-0739-47ac-952d-386f4954642a",
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "a9b3cac8-0739-47ac-952d-386f4954642a",
        containerWidth: "100%25",
        layoutWidth: "100%25",
      });
    };
  }, []);

  return <div id="webchat" />;
};

export default Chatbot;
