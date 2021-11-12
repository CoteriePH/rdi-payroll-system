function SvgComponent({w=18,h=24,...rest}) {
  return (
    <svg width={w} height={h} fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M5.6 10.6L1.4 6.4 0 7.8l5.6 5.6 12-12L16.2 0 5.6 10.6z" fill="#000" />
    </svg>
  );
}

export default SvgComponent;
