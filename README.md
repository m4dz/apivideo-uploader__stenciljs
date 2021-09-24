<p align="center">
  <a href="https://backlight.dev"><img src="https://img.shields.io/badge/Backlight.dev-Design%20System%20Editor-%23f8c307" alt="backlight.dev"></a>
  <a href="https://webcomponents.dev"><img src="https://img.shields.io/badge/WebComponents.dev-Web%20Components%20Studio-%23459BCF" alt="webcomponents.dev"></a>
  <a href="https://components.studio"><img src="https://img.shields.io/badge/Components.studio-Components%20Studio-%23319795" alt="components.studio"></a>
</p>

# api.video - Stencil Web Component Uploader

A simple video uploader for the [api.video](api.video/) platform. Made with [Stencil.js](stenciljs.com/).
Based on [Uploading large files with JavaScript: File.slice() to the rescue!](https://api.video/blog/tutorials/uploading-large-files-with-javascript) tutorial.

## Demo

A live demo you can freely edit is available on <a href="https://webcomponents.dev/preview/XIxGWDrNYzZCqFGZkzEr?busid=5116f450-1d2f-11ec-a43c-d13e79295681"><img src="https://img.shields.io/badge/WebComponents.dev-Web%20Components%20Studio-%23459BCF" alt="webcomponents.dev"></a>

## Usage

```html
  <av-uploader token="[api.video-user-token]" chunkSize="100"></av-uploader>
```

## Configuration

The component exposes configuration as [properties](https://stenciljs.com/docs/properties).

### `token` (optional)

Your *api.video* delegated token. Default: *api.video* sandbox token for demo purposes.

### `chunkSize` (optional)

Size of the different chunks that will be uploaded, in Mbytes. Default: `1` (`1000000` bytes). Recommended: `100`.

## Links

### Stencil

- [Official website (stenciljs.com)](https://stenciljs.com/)
- [Getting Started](https://stenciljs.com/docs/getting-started)
- [Demos](https://stenciljs.com/resources#Demos)
- [Docs](https://stenciljs.com/docs/introduction)
- [Chat](https://stencil-worldwide.herokuapp.com/)
- [GitHub](https://github.com/ionic-team/stencil)
- [Issues](https://github.com/ionic-team/stencil/issues)
