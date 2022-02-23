import ViewFinder from "@/components/Modals/GeneratedQRCode/viewfinder.jsx";
import { addEntry } from "@/features/entry/entrySlice.js";
import { Text } from "@/styles/index.js";
import Image from "next/image";
import { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import { useDispatch } from "react-redux";
import { Container, Header, ScannerBox, Section } from "./styles.js";

const ScanQRCode = () => {
  const [employeeId, setEmployeeId] = useState(null);
  const dispatch = useDispatch();
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const createEntry = async () => {
      const { payload } = await dispatch(
        addEntry({ employee_id: employeeId, type: "QR" })
      );
      setEntry(payload);
    };
    if (employeeId) {
      createEntry();
    }
  }, [employeeId, dispatch]);

  useEffect(() => {
    return () => {
      setEmployeeId(null);
      setEntry(null);
    };
  }, []);

  return (
    <>
      <Container>
        <Image src="/icons/logo.svg" width={100} height={100} alt="logo" />
        <ScannerBox>
          <Header>QR Code Scanner</Header>
          <Section>
            <QrReader
              onResult={async (result, error) => {
                if (!!result) {
                  setEmployeeId(result?.text);
                }
                if (!!error) {
                  console.info(error);
                }
              }}
              scanDelay={300}
              constraints={{
                facingMode: "user",
              }}
              style={{
                width: "100%",
              }}
              videoStyle={{
                objectFit: "cover",
              }}
              ViewFinder={ViewFinder}
            />
          </Section>

          <p>
            {entry?.type ? `TIME ${entry.type} ` : "Please show your QR Code."}
          </p>
          <Text size="xs" color="darkGray">
            {entry?.employee_id ? `${entry.employee_id}` : null}
          </Text>
        </ScannerBox>
      </Container>
    </>
  );
};

export default ScanQRCode;
