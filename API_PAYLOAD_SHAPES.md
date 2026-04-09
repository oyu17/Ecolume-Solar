# API Payload Shapes Documentation

This document outlines the expected GraphQL payload shapes for the Ecolume Solar application. The application uses these shapes to render dynamic content across various sections like Testimonials, Projects, and Product Packages.

## 1. Testimonials

**Query:**
```graphql
query GetTestimonials {
  testimonials {
    id
    text
    author
    role
    image
  }
}
```

**Expected JSON Response:**
```json
{
  "data": {
    "testimonials": [
      {
        "id": "1",
        "text": "Our monthly bill went from ₱12,000 to ₱800...",
        "author": "Maria Santos",
        "role": "Homeowner, Quezon City",
        "image": "https://i.pravatar.cc/150?u=ecolume1"
      }
    ]
  }
}
```

## 2. Projects

**Query:**
```graphql
query GetProjects {
  projects {
    id
    title
    location
    capacity
    type
    image
  }
}
```

**Expected JSON Response:**
```json
{
  "data": {
    "projects": [
      {
        "id": "1",
        "title": "SUPERSYSTEMS & Metalfab Inc.",
        "location": "30kWp GRID-TIED SOLAR PV SYSTEM",
        "capacity": "Features a 3-Phase SUNGROW Inverter...",
        "type": "Commercial",
        "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12"
      }
    ]
  }
}
```

## 3. Product Packages

**Query:**
```graphql
query GetPackages {
  packages {
    id
    name
    capacity
    idealFor
    pricePHP
    popular
    features
  }
}
```

**Expected JSON Response:**
```json
{
  "data": {
    "packages": [
      {
        "id": "starter",
        "name": "The Starter",
        "capacity": "3kWp",
        "idealFor": "Small homes / bills under ₱6k",
        "pricePHP": 150000,
        "popular": false,
        "features": [
          "Tier 1 Solar Panels",
          "Grid-Tie Inverter",
          "Standard Installation",
          "10-Year Warranty"
        ]
      }
    ]
  }
}
```

## Implementation Notes

- The frontend uses `zod` to validate these payloads at runtime.
- If a required field is missing or has the wrong type, the validation will fail and the component will handle the error gracefully (e.g., by displaying an empty state or a fallback).
- The `pricePHP` field is expected to be a number (integer or float) representing the price in Philippine Pesos. The frontend handles currency conversion if the user switches to USD.
- The `popular` field in `packages` is optional and defaults to `false` if not provided. When `true`, the UI highlights the package.
