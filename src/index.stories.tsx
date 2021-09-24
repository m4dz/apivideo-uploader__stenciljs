/* @jsx h */
import { h } from "@stencil/core";
import "./index.tsx";

export default {
  parameters: {
    layout: "centered",
  },
};

export const story1 = () => <av-uploader chunk-size="1"></av-uploader>;
