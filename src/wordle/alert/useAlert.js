import { useState, useCallback } from "react";

export const useAlert = () => {
  const [variant, setVariant] = useState("");
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const showAlert = useCallback(
    (variant, message, options) => {
      const { persist = false, durationMs = 1500, delayMs = 0 } = options || {};

      setTimeout(() => {
        setVariant(variant);
        setMessage(message);
        setIsVisible(true);

        if (!persist) {
          setTimeout(() => {
            setIsVisible(false);
          }, durationMs);
        }
      }, delayMs);
    },
    [setVariant, setMessage, setIsVisible]
  );

  return { showAlert, variant, message, isVisible };
};
