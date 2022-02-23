import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Webcam from "react-webcam";
import { Container, Header, ScannerBox } from "./styles.js";

const ScanQRCode = () => {
  const videoConstraints = {
    width: { min: 800 },
    height: { min: 400 },
    aspectRatio: 0.6666666667,
  };

  return (
    <>
      <Container>
        <Image src="/icons/logo.svg" width={100} height={100} alt="logo" />
        <ScannerBox>
          <Header>QR Code Scanner</Header>
          <Webcam
            videoConstraints={videoConstraints}
            width={800}
            height={400}
          />
        </ScannerBox>
      </Container>
    </>
  );
};

export default ScanQRCode;
