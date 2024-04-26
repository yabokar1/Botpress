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

      // Add event listener for incoming messages
      window.botpressWebChat.onEvent(
        function (event) {
          if (event.type === "MESSAGE.SENT") {
            // window.botpressWebChat.sendEvent({ type: "show" });
            console.log(event);
          }
        },
        ["MESSAGE.SENT"]
      );
    };

    // Clean up function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="webchat" />;
};

export default Chatbot;
