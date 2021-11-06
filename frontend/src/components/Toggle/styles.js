import styled from 'styled-components';

const colors = {
  white: (props) => props.theme.colors.white,
  gray: (props) => props.theme.colors.gray,
  red: (props) => props.theme.colors.red,
  violet: (props) => props.theme.colors.violet
};

const t = {
  switchSize: '40px',
  thumbGap: '4px'
};

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Track = styled.span`
  width: ${t.switchSize};
  height: calc(${t.switchSize} / 1.6666);
  background: ${colors.red};
  border-radius: calc(${t.switchSize} / 1.6666);
  border-radius: calc(calc(${t.switchSize} / 1.6666) / 2);
  display: flex;
  align-items: center;
  box-shadow: inset 0px 0px 4px -2px rgba(0, 0, 0, 0.129);
  transition: 0.3s ease;
`;

export const Thumb = styled.span`
  display: inline-block;
  background: ${colors.white};
  width: calc(${t.switchSize} * 0.55 - ${t.thumbGap});
  height: calc(${t.switchSize} * 0.55 - ${t.thumbGap});
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.17);
  transform: translateX(${t.thumbGap});
  transition: transform 0.3s ease-in-out;
`;
export const Switch = styled.label`
  input[type='checkbox'] {
    display: none;

    &:checked {
      + ${Track} {
        background: ${colors.violet};
        ${Thumb} {
          transform: translateX(calc(${t.switchSize} / 2));
        }
      }
    }

    &:focus {
      + ${Track} {
        box-shadow: inset 0px 0px 4px 1px rgba(0, 0, 0, 0.09);
      }
    }
  }
`;
