import React, { forwardRef } from "react";

const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = React.useRef();
  const resolvedRef = ref || defaultRef;

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
      {/* TODO STYLES */}
      <input type="checkbox" ref={resolvedRef} {...rest} />
    </>
  );
});

export default IndeterminateCheckbox;