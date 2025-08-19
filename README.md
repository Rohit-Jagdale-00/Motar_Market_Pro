#!/bin/bash

cat << EOF
# 🚗 MotarMarketPro - Angular & Spring Boot Application

MotarMarketPro is a full-stack application designed to manage vehicle inventory and sold vehicle records. It features a Spring Boot backend providing a RESTful API and an Angular frontend for a dynamic and interactive user experience.

---

# 📑 Table of Contents

*   [Getting Started](#getting-started)
    *   [Prerequisites](#prerequisites)
    *   [Installation](#installation)
    *   [Running the Application](#running-the-application)
*   [Project Structure](#project-structure)
*   [API Endpoints](#api-endpoints)
*   [Web Interface](#web-interface)
*   [Technologies Used](#technologies-used)
*   [Contact](#contact)

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   **Java Development Kit (JDK)**: Version 21 or higher.
*   **Apache Maven**: Version 3.x or higher.
*   **PostgreSQL**: A PostgreSQL database instance for data storage.
*   **Git**: For cloning the repository.
*   **Node.js and npm**: Latest LTS version.
*   **Angular CLI**: \`npm install -g @angular/cli\`.
*   **Spring Tool Suite (STS)**: For developing the Spring Boot application.
*   **Visual Studio Code (VS Code)**: For editing Angular (TypeScript, HTML, CSS) files.

---

### Installation

1.  **Clone the repository:**
    \`\`\`bash
    git clone <repository_url>
    cd MotarMarketPro
    \`\`\`

2.  **Configure the database:**
    *   Create a PostgreSQL database.
    *   Update the \`src/main/resources/application.properties\` file in the **backend** directory with your PostgreSQL database connection details (URL, username, password).

3.  **Build the Spring Boot Backend:**
    \`\`\`bash
    # Navigate to the backend project root (e.g., MotarMarketPro/backend)
    ./mvnw clean install
    \`\`\`

4.  **Install Angular Frontend Dependencies:**
    \`\`\`bash
    # Navigate to the Angular project root (e.g., MotarMarketPro/frontend/MotarMarketProAngular)
    npm install
    \`\`\`

---

### Running the Application

#### Running the Spring Boot Backend

You can run the Spring Boot application using Maven:

\`\`\`bash
# Navigate to the backend project root
./mvnw spring-boot:run
\`\`\`

The backend API will typically be accessible at \`http://localhost:8080\`.

#### Running the Angular Frontend

To serve the Angular web interface:

\`\`\`bash
# Navigate to the Angular project root
ng serve
\`\`\`

The web interface will be accessible at: \`http://localhost:4200\` (or another port if 4200 is in use).

---

## Project Structure

\`\`\`
MotarMarketPro/
├── backend/ # Spring Boot Application
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/motarmarketpro/
│   │   │   │   ├── controller/      # REST API controllers
│   │   │   │   ├── entity/          # JPA entity classes
│   │   │   │   ├── repository/      # Spring Data JPA repositories
│   │   │   │   └── service/         # Business logic and service layer
│   │   │   └── resources/
│   │   │       └── application.properties   # Spring Boot configuration
│   │   └── test/                   # Unit and integration tests
│   └── pom.xml                     # Maven configuration
└── frontend/ # Angular Application
    └── MotarMarketProAngular/
        ├── src/
        │   ├── app/                # Angular components, modules, services
        │   │   ├── components/     # UI components
        │   │   ├── services/       # Data services for API interaction
        │   │   └── ...
        │   ├── assets/             # Static assets (images, etc.)
        │   ├── environments/       # Environment-specific configurations
        │   └── index.html          # Main HTML file
        ├── angular.json            # Angular CLI configuration
        ├── package.json            # Node.js dependencies
        └── tsconfig.json           # TypeScript configuration
\`\`\`

---

## API Endpoints

The backend provides the following RESTful API endpoints:

### Vehicle Endpoints

| Method | Endpoint                 | Description                       |
| :----- | :----------------------- | :-------------------------------- |
| \`GET\`  | \`/api/vehicles\`          | Retrieve all vehicles             |
| \`GET\`  | \`/api/vehicles/{id}\`     | Retrieve a specific vehicle by ID |
| \`POST\` | \`/api/vehicles\`          | Add a new vehicle                 |
| \`PUT\`  | \`/api/vehicles/{id}\`     | Update an existing vehicle        |
| \`DELETE\`| \`/api/vehicles/{id}\`     | Delete a vehicle                  |

### Sold Vehicle Endpoints

| Method | Endpoint                   | Description                         |
| :----- | :------------------------- | :---------------------------------- |
| \`GET\`  | \`/api/sold-vehicles\`       | Retrieve all sold vehicles          |
| \`GET\`  | \`/api/sold-vehicles/{id}\`  | Retrieve a specific sold vehicle by ID |
| \`POST\` | \`/api/sold-vehicles\`       | Add a new sold vehicle record       |
| \`PUT\`  | \`/api/sold-vehicles/{id}\`  | Update a sold vehicle record        |
| \`DELETE\`| \`/api/sold-vehicles/{id}\`  | Delete a sold vehicle record        |

---

## Web Interface

The Angular web interface provides a dynamic and interactive way to manage vehicle inventory and sold vehicle records.

It allows users to:

*   View vehicle and sold vehicle lists.
*   Add new vehicle records.
*   Update existing vehicle information.
*   Delete vehicle entries.
*   Interact with the backend via HTTP requests to the REST API.

**Access:**
Once both the backend and frontend applications are running, open your web browser and navigate to:
\`http://localhost:4200\`

---

## Technologies Used

**Backend:**
*   **Spring Boot**: Framework for building the Java application.
*   **Spring Data JPA**: For simplified data access and persistence with relational databases.
*   **Hibernate**: JPA implementation.
*   **PostgreSQL**: Relational database.
*   **Spring Web**: For building RESTful APIs.

**Frontend:**
*   **Angular**: Frontend framework for building single-page applications.
*   **TypeScript**: Superset of JavaScript for type-safe development.
*   **HTML5**: For structuring the web content.
*   **CSS3**: For styling the web interface.
*   **RxJS**: For reactive programming (handling asynchronous data streams).
*   **Angular CLI**: Command-line interface for Angular development.
*   **Font Awesome**: For icons in the web interface.

**Development Tools:**
*   **Spring Tool Suite (STS)**: For developing the Spring Boot application.
*   **Visual Studio Code (VS Code)**: For editing Angular (TypeScript, HTML, CSS) files.

**Build Tools:**
*   **Maven**: Build automation tool for the backend.
*   **npm**: Package manager for the frontend.

---

## Contact

**Name:** Rohit Jagdale  
**Email:** rohitjagdale0606@gmail.com
EOF
