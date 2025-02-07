# MAP UR WASTE Backend Documentation

## Overview
MAP UR WASTE is a waste management solution that connects users with waste collectors, promoting eco-friendly practices and streamlining waste disposal processes. This backend application serves as the server-side component of the project, handling API requests, managing data, and facilitating communication between users and waste collectors.

## Technology Stack
- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for Node.js to handle routing and middleware.
- **PostgreSQL/MongoDB**: Database for storing user, collector, and waste data.
- **JWT**: For secure user authentication.
- **Firebase**: For push notifications and user authentication.

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)
- PostgreSQL or MongoDB installed and running

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/map-ur-waste.git
   cd map-ur-waste/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure the database connection:
   - Open `config/database.js` and update the connection string with your database credentials.

4. Run the application:
   ```
   npm start
   ```

### API Endpoints
- **User Registration**: `POST /api/users/register`
- **User Login**: `POST /api/users/login`
- **Submit Waste**: `POST /api/waste/submit`
- **Get Collectors**: `GET /api/collectors`
- **Collector Assignment**: `GET /api/collectors/assign`

## Directory Structure
- `src/app.js`: Main entry point for the backend application.
- `src/controllers`: Contains business logic for handling requests.
- `src/models`: Defines data structures and schemas.
- `src/routes`: Defines API endpoints and links to controllers.
- `src/services`: Encapsulates business logic and interacts with models.
- `config/database.js`: Database configuration file.

## Testing
To run tests, use the following command:
```
npm test
```

## Contribution
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.