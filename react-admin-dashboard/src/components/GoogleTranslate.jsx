import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      // Check if the script is already added
      if (!document.querySelector("#google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);

        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en", // default language of your content
              includedLanguages:
                "en,hi,bn,te,mr,ta,gu,kn,ml,pa,or,as,ks,ur,sd,sa", // Added all major Indian languages
              layout:
                window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            "google_translate_element"
          );
        };
      }
    };

    addGoogleTranslateScript();
  }, []);

  return <div id="google_translate_element" style={{ color: "black" }}></div>;
};

export default GoogleTranslate;
