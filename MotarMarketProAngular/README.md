# MotarMarketProAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.4.

## Overview

Full‑stack setup combining a Spring Boot backend and an Angular frontend.

- Backend: Spring Boot (Java) providing REST APIs
- Frontend: Angular UI (this project)

Note: This repo currently contains only the Angular app. If your Spring Boot app lives in a separate repo or sibling folder, adjust paths/commands accordingly.

## Architecture

- spring-boot-api/ — REST services, security, persistence
- MotarMarketProAngular/ — Angular client consuming the API

## Prerequisites

- Node.js 18+ and npm
- Angular CLI 20+ (`npm i -g @angular/cli`)
- Java 17+ and Maven/Gradle for the backend

## Quick Start

1) Get the code and install dependencies

```bash
# Frontend (this repo)
git clone <this-repo-url>
cd MotarMarketProAngular
npm install

# Backend (example — change to your path/url)
git clone <spring-boot-repo-url>
cd spring-boot-api
mvn clean spring-boot:run   # or: ./mvnw spring-boot:run
```

2) Configure the frontend API base URL

- In `src/app/` (e.g., environments or a config service), set `http://localhost:8080` as the API base.
- If using Angular standalone environments, ensure services point to the correct base URL.

3) Start the frontend

```bash
ng serve
# opens http://localhost:4200
```

## Running Both Apps Locally

- Backend: http://localhost:8080
- Frontend: http://localhost:4200

Ensure CORS in Spring allows the frontend origin.

### Example Spring Boot CORS

```java
@Configuration
public class CorsConfig {
  @Bean
  public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:4200")
                .allowedMethods("GET","POST","PUT","DELETE","PATCH","OPTIONS")
                .allowCredentials(true);
      }
    };
  }
}
```

## Build

- Frontend production build:

```bash
ng build
# output in dist/
```

- Backend production jar:

```bash
mvn clean package -DskipTests
# target/*.jar
```

## Testing

- Frontend unit tests: `ng test`
- Backend tests: `mvn test`

## Deployment

- Frontend: deploy `dist/` to static hosting (Netlify, Vercel, S3, Nginx)
- Backend: run Spring Boot jar or container (Docker/K8s/cloud VM)

### Environment Configuration

- Frontend: set API base via environment files or build-time variables
- Backend: externalize DB credentials/origins via env vars or config server

## API (Examples)

- GET /api/v1/items — list items
- POST /api/v1/items — create item
- GET /api/v1/items/{id} — get item by id

Link to Swagger/OpenAPI if available (e.g., http://localhost:8080/swagger-ui/index.html).

## Project Structure (suggested)

```
root/
├─ spring-boot-api/
│  ├─ src/main/java/... (controllers, services, repositories, models)
│  ├─ src/main/resources/application.yml
│  └─ pom.xml
└─ MotarMarketProAngular/
   ├─ src/app/ (components, services, models)
   ├─ src/environments/ (if used)
   ├─ package.json
   └─ angular.json
```

## Useful Scripts (frontend)

- ng serve — run dev server
- ng build — production build
- ng test — unit tests

## Troubleshooting

- CORS errors: ensure backend allows http://localhost:4200
- 404/500: verify API base URL and backend is running
- Clear browser cache after env changes
- Check browser console/network for failed calls

## Contributing

1. Fork the repo
2. Create a feature branch
3. Commit with clear messages
4. Open a Pull Request

## License

MIT — change if different.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
