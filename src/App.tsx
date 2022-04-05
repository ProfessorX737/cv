import './App.css';
import { Box } from "@mui/material";
import styled from "styled-components";
import Explorer from './Explorer';

export default function App() {
  return (
    <Page>
      <TopToolBar />
      <Box display="flex" flex={1}>
        <LeftToolBar />
        <Explorer />
      </Box>
    </Page>
  )
}

const Page = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const LeftToolBar = styled(Box)`
  background-color: #333333;
  width: 3rem;
  height: 100%;
`;

const TopToolBar = styled(Box)`
  background-color: #323233;
  width: 100%;
  height: 1.5rem;
`;
