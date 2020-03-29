import React, { CSSProperties } from "react";

export const parentContainerStyle: CSSProperties = {
   backgroundColor: "black",
   minHeight: "100%",
};

export const mainContainerStyle: CSSProperties = {
   maxWidth: "1000px",
   margin: "auto",
};

export const MainContainer = (props: any) => {
   return (
      <div style={parentContainerStyle}>
         <div style={mainContainerStyle}>{props.children}</div>
      </div>
   );
};
