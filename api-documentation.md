# TheColeb Backend API Documentation

## Overview

TheColeb is a platform for developers and entrepreneurs to connect, collaborate on projects, and share ideas. This documentation provides details about the backend API endpoints, data models, authentication flow, and other important aspects that a frontend developer would need to build a compatible frontend application.

## Base URL

```
http://localhost:3000
```

All API endpoints are prefixed with `/collab/v1/`.

## Authentication

The API uses JWT (JSON Web Token) for authentication. Most endpoints require a valid token to be included in the request headers.

### Authentication Endpoints

#### Sign Up

- **URL**: `/collab/v1/auth/signup`
- **Method**: `POST`
- **Auth Required**: No
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Success Response**: `201 Created`
  ```json
  {
    "message": "User created successfully. Please verify your email with the OTP sent."
  }
  ```
- **Error Response**: `400 Bad Request`, `500 Internal Server Error`

#### Verify OTP

- **URL**: `/collab/v1/auth/verifyOTP`
- **Method**: `POST`
- **Auth Required**: No
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "otp": "123456"
  }
  ```
- **Success Response**: `200 OK`
  ```json
  {
    "message": "Email verified successfully"
  }
  ```
- **Error Response**: `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`

#### Resend OTP

- **URL**: `/collab/v1/auth/resendOTP`
- **Method**: `POST`
- **Auth Required**: No
- **Request Body**:
  ```json
  {
    "email": "user@example.com"
  }
  ```
- **Success Response**: `200 OK`
  ```json
  {
    "message": "OTP resent successfully"
  }
  ```
- **Error Response**: `404 Not Found`, `500 Internal Server Error`

#### Login

- **URL**: `/collab/v1/auth/login`
- **Method**: `POST`
- **Auth Required**: No
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Success Response**: `200 OK`
  ```json
  {
    "message": "Login successful",
    "data": {
      "token": "jwt_token_here",
      "user": {
        "id": 1,
        "email": "user@example.com",
        "isEmailVerified": true
      }
    }
  }
  ```
- **Error Response**: `400 Bad Request`, `401 Unauthorized`, `500 Internal Server Error`

#### Get Current User

- **URL**: `/collab/v1/auth/me`
- **Method**: `GET`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Success Response**: `200 OK`
  ```json
  {
    "user": {
      "id": 1,
      "email": "user@example.com",
      "isEmailVerified": true,
      "role": "USER",
      "basicInfo": { ... },
      "bioSummary": { ... },
      "technicalProfile": { ... },
      "showcase": { ... },
      "visuals": { ... }
    }
  }
  ```
- **Error Response**: `401 Unauthorized`, `404 Not Found`, `500 Internal Server Error`

## User Profile Endpoints

### Basic Info

#### Create/Update Basic Info

- **URL**: `/collab/v1/info`
- **Method**: `POST` (create) or `PUT` (update)
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Request Body**:
  ```json
  {
    "fullName": "John Doe",
    "location": "New York, USA"
  }
  ```
- **Success Response**: `201 Created` or `200 OK`
- **Error Response**: `400 Bad Request`, `500 Internal Server Error`

#### Get Basic Info

- **URL**: `/collab/v1/info`
- **Method**: `GET`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Success Response**: `200 OK`
- **Error Response**: `404 Not Found`, `500 Internal Server Error`

### Bio Summary

#### Create Bio

- **URL**: `/collab/v1/bio`
- **Method**: `POST`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Request Body**:
  ```json
  {
    "shortBio": "Full-stack developer with 5 years of experience",
    "tagline": "Building the future, one line of code at a time"
  }
  ```
- **Success Response**: `201 Created`
- **Error Response**: `400 Bad Request`, `500 Internal Server Error`

#### Get Bio

- **URL**: `/collab/v1/bio`
- **Method**: `GET`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Success Response**: `200 OK`
- **Error Response**: `404 Not Found`, `500 Internal Server Error`

#### Update Bio

- **URL**: `/collab/v1/bio`
- **Method**: `PUT`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Request Body**:
  ```json
  {
    "shortBio": "Updated bio",
    "tagline": "Updated tagline"
  }
  ```
- **Success Response**: `200 OK`
- **Error Response**: `400 Bad Request`, `500 Internal Server Error`

#### Delete Bio

- **URL**: `/collab/v1/bio`
- **Method**: `DELETE`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Success Response**: `200 OK`
- **Error Response**: `404 Not Found`, `500 Internal Server Error`

### Technical Profile

#### Create/Update Technical Profile

- **URL**: `/collab/v1/tech`
- **Method**: `POST` (create) or `PUT` (update)
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Request Body**:
  ```json
  {
    "experienceLevel": "Intermediate",
    "skills": ["JavaScript", "React", "Node.js"]
  }
  ```
- **Success Response**: `201 Created` or `200 OK`
- **Error Response**: `400 Bad Request`, `500 Internal Server Error`

#### Get Technical Profile

- **URL**: `/collab/v1/tech`
- **Method**: `GET`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Success Response**: `200 OK`
- **Error Response**: `404 Not Found`, `500 Internal Server Error`

### Showcase

#### Create/Update Showcase

- **URL**: `/collab/v1/showcase`
- **Method**: `POST` (create) or `PUT` (update)
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Request Body**:
  ```json
  {
    "github": "github.com/username",
    "portfolio": "portfolio.com",
    "linkedin": "linkedin.com/in/username",
    "email": "contact@example.com",
    "whatsapp": "+1234567890"
  }
  ```
- **Success Response**: `201 Created` or `200 OK`
- **Error Response**: `400 Bad Request`, `500 Internal Server Error`

#### Get Showcase

- **URL**: `/collab/v1/showcase`
- **Method**: `GET`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Success Response**: `200 OK`
- **Error Response**: `404 Not Found`, `500 Internal Server Error`

### Projects

#### Create Project

- **URL**: `/collab/v1/project`
- **Method**: `POST`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Request Body**:
  ```json
  {
    "name": "Project Name",
    "description": "Project Description",
    "link": "https://project-link.com",
    "techUsed": ["React", "Node.js"],
    "status": "in_progress"
  }
  ```
- **Success Response**: `201 Created`
- **Error Response**: `400 Bad Request`, `500 Internal Server Error`

#### Get User Projects

- **URL**: `/collab/v1/project`
- **Method**: `GET`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Success Response**: `200 OK`
- **Error Response**: `500 Internal Server Error`

#### Update Project

- **URL**: `/collab/v1/project/:projectId`
- **Method**: `PUT`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Request Body**:
  ```json
  {
    "name": "Updated Project Name",
    "description": "Updated Description",
    "link": "https://updated-link.com",
    "techUsed": ["React", "Node.js", "MongoDB"],
    "status": "finished"
  }
  ```
- **Success Response**: `200 OK`
- **Error Response**: `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`

#### Delete Project

- **URL**: `/collab/v1/project/:projectId`
- **Method**: `DELETE`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Success Response**: `200 OK`
- **Error Response**: `404 Not Found`, `500 Internal Server Error`

### Visuals

#### Create/Update Visuals

- **URL**: `/collab/v1/visuals`
- **Method**: `POST` (create) or `PUT` (update)
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Request Body**:
  ```json
  {
    "profilePicture": "url_to_profile_picture",
    "coverImage": "url_to_cover_image"
  }
  ```
- **Success Response**: `201 Created` or `200 OK`
- **Error Response**: `400 Bad Request`, `500 Internal Server Error`

#### Get Visuals

- **URL**: `/collab/v1/visuals`
- **Method**: `GET`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Success Response**: `200 OK`
- **Error Response**: `404 Not Found`, `500 Internal Server Error`

### Academics

#### Create/Update Academics

- **URL**: `/collab/v1/academics`
- **Method**: `POST` (create) or `PUT` (update)
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Request Body**:
  ```json
  {
    "institute": "University Name",
    "degree": "Bachelor of Science in Computer Science",
    "startYear": 2018,
    "endYear": 2022
  }
  ```
- **Success Response**: `201 Created` or `200 OK`
- **Error Response**: `400 Bad Request`, `500 Internal Server Error`

#### Get Academics

- **URL**: `/collab/v1/academics`
- **Method**: `GET`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Success Response**: `200 OK`
- **Error Response**: `404 Not Found`, `500 Internal Server Error`

### Experience

#### Create/Update Experience

- **URL**: `/collab/v1/exp`
- **Method**: `POST` (create) or `PUT` (update)
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Request Body**:
  ```json
  {
    "title": "Software Engineer",
    "company": "Tech Company",
    "jobDescription": "Developed web applications using React and Node.js",
    "startDate": "2020-01-01T00:00:00.000Z",
    "endDate": "2022-01-01T00:00:00.000Z"
  }
  ```
- **Success Response**: `201 Created` or `200 OK`
- **Error Response**: `400 Bad Request`, `500 Internal Server Error`

#### Get Experience

- **URL**: `/collab/v1/exp`
- **Method**: `GET`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Success Response**: `200 OK`
- **Error Response**: `404 Not Found`, `500 Internal Server Error`

### Collaboration Settings

#### Create/Update Collaboration Settings

- **URL**: `/collab/v1/collab`
- **Method**: `POST` (create) or `PUT` (update)
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Request Body**:
  ```json
  {
    "openToCollaboration": true,
    "ideaInterests": "Web development, mobile apps, AI"
  }
  ```
- **Success Response**: `201 Created` or `200 OK`
- **Error Response**: `400 Bad Request`, `500 Internal Server Error`

#### Get Collaboration Settings

- **URL**: `/collab/v1/collab`
- **Method**: `GET`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Success Response**: `200 OK`
- **Error Response**: `404 Not Found`, `500 Internal Server Error`

## Posts Endpoints

#### Create Post

- **URL**: `/collab/v1/posts`
- **Method**: `POST`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Request Body**:
  ```json
  {
    "title": "Looking for a React Developer",
    "description": "I'm working on a new project and need a React developer to join the team.",
    "type": "COFOUNDER_NEEDED"
  }
  ```
- **Success Response**: `201 Created`
- **Error Response**: `400 Bad Request`, `500 Internal Server Error`

#### Get All Posts

- **URL**: `/collab/v1/posts`
- **Method**: `GET`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Query Parameters**:
  - `page`: Page number (default: 1)
  - `limit`: Number of posts per page (default: 10)
  - `type`: Filter by post type (optional)
- **Success Response**: `200 OK`
- **Error Response**: `500 Internal Server Error`

#### Get Post by ID

- **URL**: `/collab/v1/posts/:id`
- **Method**: `GET`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Success Response**: `200 OK`
- **Error Response**: `404 Not Found`, `500 Internal Server Error`

#### Update Post

- **URL**: `/collab/v1/posts/:id`
- **Method**: `PUT`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Request Body**:
  ```json
  {
    "title": "Updated Title",
    "description": "Updated Description",
    "type": "IDEA"
  }
  ```
- **Success Response**: `200 OK`
- **Error Response**: `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`

#### Delete Post

- **URL**: `/collab/v1/posts/:id`
- **Method**: `DELETE`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Success Response**: `200 OK`
- **Error Response**: `404 Not Found`, `500 Internal Server Error`

## Connection Endpoints

#### Send Connection Request

- **URL**: `/collab/v1/connect/request`
- **Method**: `POST`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Request Body**:
  ```json
  {
    "receiverId": 2
  }
  ```
- **Success Response**: `201 Created`
- **Error Response**: `400 Bad Request`, `500 Internal Server Error`

#### Get Incoming Connection Requests

- **URL**: `/collab/v1/connect/incoming`
- **Method**: `GET`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Success Response**: `200 OK`
- **Error Response**: `500 Internal Server Error`

#### Get Outgoing Connection Requests

- **URL**: `/collab/v1/connect/outgoing`
- **Method**: `GET`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Success Response**: `200 OK`
- **Error Response**: `500 Internal Server Error`

#### Accept Connection Request

- **URL**: `/collab/v1/connect/accept`
- **Method**: `POST`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Request Body**:
  ```json
  {
    "senderId": 2
  }
  ```
- **Success Response**: `200 OK`
- **Error Response**: `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`

#### Decline Connection Request

- **URL**: `/collab/v1/connect/decline`
- **Method**: `POST`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Request Body**:
  ```json
  {
    "senderId": 2
  }
  ```
- **Success Response**: `200 OK`
- **Error Response**: `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`

#### Reject Connection Request

- **URL**: `/collab/v1/connect/reject`
- **Method**: `POST`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Request Body**:
  ```json
  {
    "senderId": 2
  }
  ```
- **Success Response**: `200 OK`
- **Error Response**: `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`

## Post Feed Endpoints

#### Get Filtered Feed

- **URL**: `/collab/v1/filter`
- **Method**: `GET`
- **Auth Required**: Yes
- **Headers**:
  ```
  Authorization: Bearer jwt_token_here
  ```
- **Query Parameters**:
  - `type`: Filter by post type (optional)
  - `page`: Page number (default: 1)
  - `limit`: Number of posts per page (default: 10)
- **Success Response**: `200 OK`
- **Error Response**: `500 Internal Server Error`

## Data Models

### User

```json
{
  "id": 1,
  "email": "user@example.com",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "isEmailVerified": true,
  "password": "[hashed_password]",
  "role": "USER"
}
```

### BasicInfo

```json
{
  "id": 1,
  "userId": 1,
  "fullName": "John Doe",
  "location": "New York, USA"
}
```

### TechnicalProfile

```json
{
  "id": 1,
  "userId": 1,
  "experienceLevel": "Intermediate",
  "skills": ["JavaScript", "React", "Node.js"]
}
```

### BioSummary

```json
{
  "id": 1,
  "userId": 1,
  "shortBio": "Full-stack developer with 5 years of experience",
  "tagline": "Building the future, one line of code at a time"
}
```

### Showcase

```json
{
  "id": 1,
  "userId": 1,
  "github": "github.com/username",
  "portfolio": "portfolio.com",
  "linkedin": "linkedin.com/in/username",
  "email": "contact@example.com",
  "whatsapp": "+1234567890"
}
```

### Project

```json
{
  "id": 1,
  "userId": 1,
  "name": "Project Name",
  "description": "Project Description",
  "link": "https://project-link.com",
  "techUsed": ["React", "Node.js"],
  "status": "in_progress"
}
```

### Collaboration

```json
{
  "id": 1,
  "userId": 1,
  "openToCollaboration": true,
  "ideaInterests": "Web development, mobile apps, AI"
}
```

### Visuals

```json
{
  "id": 1,
  "userId": 1,
  "profilePicture": "url_to_profile_picture",
  "coverImage": "url_to_cover_image"
}
```

### Post

```json
{
  "id": 1,
  "userId": 1,
  "title": "Looking for a React Developer",
  "description": "I'm working on a new project and need a React developer to join the team.",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "type": "COFOUNDER_NEEDED"
}
```

### Academic

```json
{
  "id": 1,
  "userId": 1,
  "institute": "University Name",
  "degree": "Bachelor of Science in Computer Science",
  "startYear": 2018,
  "endYear": 2022
}
```

### Experience

```json
{
  "id": 1,
  "userId": 1,
  "title": "Software Engineer",
  "company": "Tech Company",
  "jobDescription": "Developed web applications using React and Node.js",
  "startDate": "2020-01-01T00:00:00.000Z",
  "endDate": "2022-01-01T00:00:00.000Z"
}
```

### Connection

```json
{
  "id": 1,
  "connectedAt": "2023-01-01T00:00:00.000Z",
  "participantAId": 1,
  "participantBId": 2
}
```

### IncomingConnection

```json
{
  "id": 1,
  "senderId": 2,
  "receiverId": 1,
  "requestedAt": "2023-01-01T00:00:00.000Z"
}
```

### OutgoingConnection

```json
{
  "id": 1,
  "senderId": 1,
  "receiverId": 2,
  "requestedAt": "2023-01-01T00:00:00.000Z"
}
```

## Enums

### PostType

- `IDEA`
- `MVP`
- `COFOUNDER_NEEDED`
- `OTHER`
- `MEETUP`

### ProjectStatus

- `in_progress`
- `finished`
- `planning`

### Role

- `USER`
- `ADMIN`

## Authentication Flow

1. User signs up with email and password
2. Backend sends an OTP to the user's email
3. User verifies email with OTP
4. User logs in with email and password
5. Backend returns a JWT token
6. Frontend includes the JWT token in the Authorization header for all subsequent requests

## Error Handling

All API endpoints return appropriate HTTP status codes and error messages in the following format:

```json
{
  "message": "Error message describing what went wrong"
}
```

Common error status codes:
- `400 Bad Request`: Invalid input data
- `401 Unauthorized`: Missing or invalid authentication
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server-side error

## CORS Configuration

The API has CORS enabled with the following allowed origins:
- `https://coleb-connect-universe.vercel.app`
- `http://localhost:5173`
- `http://localhost:3000`
- `http://192.168.0.106:8080`
- `http://192.168.0.102:3000`
- `http://192.168.0.104:8080`
- `http://192.168.0.102:8080`

## Implementation Notes for Frontend Developers

1. **Authentication**: Store the JWT token securely (e.g., in localStorage or httpOnly cookies) and include it in the Authorization header for all authenticated requests.

2. **Form Validation**: Implement client-side validation for all forms, especially for user registration and profile updates.

3. **Error Handling**: Implement proper error handling for API responses, displaying appropriate error messages to users.

4. **Loading States**: Show loading indicators during API calls to provide feedback to users.

5. **Responsive Design**: Ensure the frontend is responsive and works well on different devices and screen sizes.

6. **User Profile Flow**: Implement a step-by-step flow for users to complete their profiles (Basic Info → Bio → Technical Profile → Showcase → Projects → etc.).

7. **Real-time Updates**: Consider implementing real-time updates for connection requests and messages using WebSockets or polling.

8. **Pagination**: Implement pagination for lists of posts, projects, and connections.

9. **Image Uploads**: Implement a solution for uploading profile pictures and cover images.

10. **Offline Support**: Consider implementing offline support for key features using service workers and local storage.
