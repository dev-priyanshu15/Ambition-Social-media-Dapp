import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";

const MusicUpload = ({
  fileURL,
  setFileURL,
  notifySuccess,
  notifyError,
  setLoader,
}) => {
  const uploadToIPFS = async (file) => {
    if (file) {
      try {
        setLoader(true);
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          maxBodyLength: "Infinity",
          headers: {
            pinata_api_key: `4d19aa4ef76369364aae`,
            pinata_secret_api_key: `f7ae9b7810aec21fe4f6ee92e8d221e18772a9748b34fe0847732264c4122380`,
            "Content-Type": "multipart/form-data",
          },
        });

        const url = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

        setFileURL(url);
        setLoader(false);
        notifySuccess("audio Uploade Successfully");
      } catch (error) {
        setLoader(false);
        notifyError("Unable to upload image to Pinata, check your API key");
      }
    }
  };

  const onDrop = useCallback(async (acceptedFile) => {
    await uploadToIPFS(acceptedFile[0]);
  }, []);

  const {
    getInputProps,
    getRootProps,
    isDragAccept,
    isDragActive,
    isDragReject,
  } = useDropzone({ onDrop, maxSize: 500000000000 });
  return (
    <div class="flex h-full max-h-[calc(100vh-64px)] flex-col overflow-hidden">
      <h3 class="c-ddfucX">Select Auido</h3>
      {fileURL ? (
        <audio className="new_full_width_audio" controls>
          <source src={fileURL} type="audio/ogg" />
          <source src={fileURL} type="audio/mpeg" />
          Your browser dose not support the audio tag
        </audio>
      ) : (
        <div {...getRootProps()} class="c-jnBfEb">
          <p>
            Select your Sounds from your collection on the left-hand side to
            move them to this shelf.
          </p>
          <div class="c-cWWxYX">
            {" "}
            <input {...getInputProps()} type="file" accept="image/*" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicUpload;
