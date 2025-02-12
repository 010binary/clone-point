import { useRef, useState } from "react";
/**
 * Hook to convert an image file to a Base64 string.
 * @returns An object containing the Base64 string, loading state, conversion function, and cancel function.
 */
export const useImageTobase64 = () => {
  const [base64Image, setBase64Image] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const controllerRef = useRef<AbortController | null>(null);

  const convertImageToBase64 = async (file: File) => {
    setIsLoading(true);
    controllerRef.current = new AbortController();
    const signal = controllerRef.current.signal;

    try {
      const base64String = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();

        reader.onloadend = () => {
          if (reader.result) {
            resolve(reader.result.toString());
          } else {
            reject(new Error("Failed to convert file to Base64"));
          }
        };

        reader.onerror = reject;
        reader.onabort = () => reject(new Error("File read aborted"));
        reader.readAsDataURL(file);

        signal.addEventListener("abort", () => {
          reader.abort();
        });
      });
      const splitBase64String = base64String.split(',')[1];

      setBase64Image(splitBase64String);
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        console.error("Error converting image to Base64", error);
      }
    } finally {
      setIsLoading(false);
      controllerRef.current = null;
    }
  };

  const cancelConversion = () => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
  };

  return {
    base64Image,
    isLoading,
    convertImageToBase64,
    cancelConversion,
  };
};
