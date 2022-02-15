import styled from "styled-components";
import { theme } from "@/theme";

export const TableStyles = styled.div`
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  height: 100%;
  table {
    width: 100%;
    text-align: center;
    overflow-wrap: break-word;
    border-spacing: 0;
    tbody {
      tr:nth-child(even) {
        background-color: #f6f6f6;
      }
      td {
        font-family: ${(props) => props.theme.fonts.avenirRoman};
        padding: 1em;
      }
    }
    th {
      color: ${(props) => props.theme.colors.violet};
      font-family: ${(props) => props.theme.fonts.avenirBlack};
      font-size: 1em;
      align-items: center;
      justify-content: center;
      padding: 0em 1em;
      padding-bottom: 1em;
      border-bottom: 1px solid ${(props) => props.theme.colors.violet};
    }
  }
`;

export const CheckboxContainer = styled.li`
  list-style-type: none;
  padding-bottom: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  flex-wrap: wrap;
`;
