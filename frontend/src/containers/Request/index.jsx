/* eslint-disable prettier/prettier */
import React from 'react';
import Dropdown from 'components/Dropdown';
import Button from 'components/Button';
import {
  Wrapper,
  GhostArea,
  TextArea,
  WordTools,
  SetOne,
  FlexDrop,
  Bold,
  Italic,
  Underline,
  SetTwo,
  ColorText,
  Tt,
  SetThree,
  Left,
  Center,
  Right,
  Tools,
  SetEnd,
  AttachFile,
  Clip,
  FlexButton,
  FlexMore
} from './styles';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addRequest } from 'features/request/requestSlice';

function Request() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    //TODO - CLASSIFICATIONS/SUBJECTS
    data.subject = 'TEST SUBJECT';
    dispatch(addRequest(data));
    reset({});
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <FlexDrop>
        <Dropdown bg="gray" label="CLASSIFICATION"></Dropdown>
      </FlexDrop>
      <GhostArea>
        <TextArea {...register('desc', { required: true })} />
      </GhostArea>
      <WordTools>
        <Tools>
          <SetOne>
            <Bold>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <g fill="currentColor">
                  <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823c0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244c0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415c0 .943-.643 1.449-1.832 1.449H5.907z" />
                </g>
              </svg>
            </Bold>
            <Italic>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 256 256"
              >
                <path
                  d="M203.994 55.995a12 12 0 0 1-12 12h-31.35l-40 120h23.35a12 12 0 0 1 0 24h-39.918c-.027 0-.053.003-.08.003c-.027 0-.054-.003-.08-.003H63.994a12 12 0 0 1 0-24h31.351l40-120h-23.35a12 12 0 0 1 0-24h80a12 12 0 0 1 12 12z"
                  fill="currentColor"
                />
              </svg>
            </Italic>
            <Underline>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <g fill="none">
                  <path
                    d="M4 13.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75zM4.75 2a.75.75 0 0 1 .75.75V8a2.5 2.5 0 1 0 5 0V2.75a.75.75 0 0 1 1.5 0V8a4 4 0 1 1-8 0V2.75A.75.75 0 0 1 4.75 2z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </Underline>
          </SetOne>
          <SetTwo>
            <ColorText>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 20H4c-1.1 0-2 .9-2 2s.9 2 2 2h16c1.1 0 2-.9 2-2s-.9-2-2-2zM7.11 17c.48 0 .91-.3 1.06-.75l1.01-2.83h5.65l.99 2.82c.16.46.59.76 1.07.76c.79 0 1.33-.79 1.05-1.52L13.69 4.17C13.43 3.47 12.75 3 12 3s-1.43.47-1.69 1.17L6.06 15.48c-.28.73.27 1.52 1.05 1.52zm4.83-11.4h.12l2.03 5.79H9.91l2.03-5.79z"
                  fill="currentColor"
                />
              </svg>
            </ColorText>
            <Tt>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <g fill="none">
                  <path
                    d="M11 2.25a.75.75 0 0 1 .704.49l3.5 9.5a.75.75 0 0 1-1.408.52l-.924-2.51H9.128l-.924 2.51a.75.75 0 1 1-1.408-.52l3.5-9.5A.75.75 0 0 1 11 2.25zm0 2.92L9.68 8.75h2.64L11 5.17zM6.125 8.873v3.8c-.035.082-.121.26-.192.317a.623.623 0 0 1-.348.169h-.009l-.076.005c-.3 0-.55-.21-.61-.49c-.607.321-1.18.49-1.723.49c-1.292 0-2.292-.915-2.292-2.291c0-.605.209-1.138.595-1.54c.386-.401.94-.665 1.621-.747a5.1 5.1 0 0 1 1.775.102c-.026-.263-.109-.45-.244-.582c-.164-.16-.425-.256-.82-.276c-.633-.031-1.049.06-1.278.221a.625.625 0 0 1-.718-1.023c.469-.329 1.096-.467 1.863-.453h.002l.193.007c.676.034 1.229.246 1.62.619c.392.374.61.897.638 1.53v.002l.003.14zm-3.732 1.328c-.177.174-.268.407-.268.696c0 .338.109.595.286.768c.178.173.436.274.756.274c.417 0 .951-.195 1.598-.622l.11-.074v-1.235l-.112-.033a3.913 3.913 0 0 0-1.521-.124c-.393.047-.67.174-.849.35z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </Tt>
          </SetTwo>
          <SetThree>
            <Left>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1024 1024"
              >
                <path
                  d="M120 230h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 424h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm784 140H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-424H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"
                  fill="currentColor"
                />
              </svg>
            </Left>
            <Center>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1024 1024"
              >
                <path
                  d="M264 230h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm496 424c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496zm144 140H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-424H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"
                  fill="currentColor"
                />
              </svg>
            </Center>
            <Right>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1024 1024"
              >
                <path
                  d="M904 158H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 424H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 212H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-424H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"
                  fill="currentColor"
                />
              </svg>
            </Right>
          </SetThree>
        </Tools>
        <SetEnd>
          <AttachFile>attach file</AttachFile>
          <Clip>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1024 1024"
            >
              <path
                d="M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0 0 12.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2c0 45.8-17.8 88.8-50.2 121.2l-266 265.9l-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0c-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3c6.7 6.7 10.3 15.5 10.3 24.9c0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0 0 12.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364L224.8 602.1A172.22 172.22 0 0 0 174 724.8c0 46.3 18.1 89.8 50.8 122.5c33.9 33.8 78.3 50.7 122.7 50.7c44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z"
                fill="currentColor"
              />
            </svg>
          </Clip>
        </SetEnd>
      </WordTools>

      <FlexButton>
        <FlexMore>
          <Button type="submit">SEND FOR APPROVAL</Button>
        </FlexMore>
      </FlexButton>
    </Wrapper>
  );
}

export default Request;
