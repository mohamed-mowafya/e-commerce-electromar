# e-commerce-electromar


## Introduction

e-commerce-electromar is a DIY practice e-commerce web application built using React, Redux, Express, Stripe and MongoDB. This application is solely for educational purposes and has no commercial use. It allows users to browse products, add them to the cart, track order history, and proceed to checkout.

## Installation

To install and run e-commerce-electromar on your local machine, please follow the instructions below.

## Setup
1. Create a .env file at the root of the project using the specified example values found in the example.env file.
2. If you wish to test the Stripe functionality, you'll need a Stripe API key. You can obtain this by setting up a development Stripe account.

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (version >= 12)
- Docker
- Docker Compose

### Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd e-commerce-electromar
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

### Using Docker Compose

Alternatively, you can also use Docker Compose to run the application in a Docker container.

1. Navigate to the project directory:

   ```bash
   cd e-commerce-electromar
   ```

2. Build the Docker image:

   ```bash
   docker-compose build
   ```

3. Start the Docker container:
   ```bash
   docker-compose up
   ```

### Attaching to the Docker Container for Development

If you want to make further changes or perform development within the Docker container, follow these steps:

1. Start the Docker container:

   ```bash
   docker-compose up
   ```

2. Open a new terminal window and find the container ID or name:

   ```bash
   docker ps
   ```

3. Attach to the container:

   ```bash
   docker exec -it <container-id-or-name> /bin/bash
   ```

4. You are now inside the Docker container and can make modifications to the code.

## Usage

Once the application is running, you can access it by opening a web browser and navigating to `http://localhost:3000`. From there, you can browse products, add them to the cart, and proceed to checkout.
