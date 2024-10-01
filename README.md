# ReactGeoMap

react-geo-map is a library that enables declarative geospatial visualization using React Fiber.
It seamlessly integrates React's component-based architecture with OpenLayers' mapping capabilities, providing developers with a robust solution for creating interactive and efficient map-based applications.

## Features

- Declarative components for defining map layers, sources, and interactions using JSX
- CSS styling support for dynamic and themeable vector layer styling
- Data source injection for streamlined integration and management of geospatial data sources

## Installation

Make sure you have Node.js installed (Node 18 recommended). Install the package using:

```bash
npm install react-geo-map
```

## Usage

Here's a basic example of how to use react-geo-map:

```jsx
import React from "react";
import { GeoMap, GeoDataSource } from "react-geo-map";

const MyMap = () => (
  <GeoMap>
    <GeoDataSource url="path/to/geojson" />
    {/* Add other map components */}
  </GeoMap>
);
export default MyMap;
```

## Development

### Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/geo-react-fiber-mapper.git
```

2. Install dependencies:

```bash
pnpm install
```

## Contributing

Contributions are welcome! Please open issues and submit pull requests for any enhancements or bug fixes. Make sure your code follows the project's coding standards and includes appropriate tests.

## License

MIT © behoney
