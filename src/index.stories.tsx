/* @jsx h */
import { h } from "@stencil/core";
import "./index.tsx";

export default {
  parameters: {
    layout: "centered",
  },
};

export const story1 = () => <av-uploader chunkSize="1"></av-uploader>;
