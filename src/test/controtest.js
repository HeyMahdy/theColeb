import http from 'k6/http';
import { check, sleep } from 'k6';

// Configuration
const BASE_URL = 'https://thecoleb.onrender.com/collab/v1/exp';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiYTUiLCJpYXQiOjE3NDg5MzMyNjIsImV4cCI6MTc0OTAxOTY2Mn0.B793mwHhE6kCmN_a2VtUmzWU3I4tW57WwjH-Ntmeoc8';

// Test data - matching Prisma schema
const testExperience = {
  title: 'Software Engineer',
  company: 'Test Company',
  jobDescription: 'Test job description',
  startDate: '2023-01-01T00:00:00.000Z',
  endDate: '2023-12-31T00:00:00.000Z'
};

// Headers
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${TOKEN}`
};

export const options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m', target: 20 },
    { duration: '30s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  let experienceId;

  try {
    // First, check if user already has an experience
    const getRes = http.get(`${BASE_URL}`, { headers });
    console.log('Get Response Status:', getRes.status);
    console.log('Get Response Body:', getRes.body);

    if (getRes.status === 200) {
      const responseBody = JSON.parse(getRes.body);
      if (responseBody.data && responseBody.data.id) {
        experienceId = responseBody.data.id;
        console.log('Found existing experience ID:', experienceId);
        
        // Update existing experience
        const updateData = {
          ...testExperience,
          title: 'Updated Software Engineer',
          startDate: '2023-01-01T00:00:00.000Z',
          endDate: '2023-12-31T00:00:00.000Z'
        };

        const updateRes = http.put(
          `${BASE_URL}/${experienceId}`,
          JSON.stringify(updateData),
          { headers }
        );

        console.log('Update Response Status:', updateRes.status);
        console.log('Update Response Body:', updateRes.body);

        check(updateRes, {
          'update experience status is 200': (r) => r.status === 200,
        });
      }
    } else {
      // User doesn't have an experience, create new one
      const createRes = http.post(
        `${BASE_URL}`,
        JSON.stringify(testExperience),
        { headers }
      );
      
      console.log('Create Response Status:', createRes.status);
      console.log('Create Response Body:', createRes.body);
      
      if (createRes.status === 201) {
        const responseBody = JSON.parse(createRes.body);
        if (responseBody.data && responseBody.data.id) {
          experienceId = responseBody.data.id;
          console.log('Created new experience with ID:', experienceId);
        }
      }

      check(createRes, {
        'create experience status is 201': (r) => r.status === 201,
      });
    }

    // Test Delete Experience (if we have an ID)
    if (experienceId) {
      console.log('Attempting to delete experience with ID:', experienceId);
      const deleteRes = http.del(`${BASE_URL}/${experienceId}`, null, { headers });
      console.log('Delete Response Status:', deleteRes.status);
      console.log('Delete Response Body:', deleteRes.body);

      check(deleteRes, {
        'delete experience status is 200': (r) => r.status === 200,
      });
    } else {
      console.log('No experience ID available for deletion');
    }
  } catch (error) {
    console.error('Error in test execution:', error);
  }

  sleep(1);
}