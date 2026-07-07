# Frontend-Backend Integration Guide

## Overview
The AI IQ Test Registration system is now fully integrated with frontend and backend connected.

## Architecture

```
Frontend (Next.js)                    Backend (Go + Gin)                MongoDB Atlas
─────────────────                    ────────────────────              ─────────────
 User fills form                     RESTful API                        Database:
      ↓                                   ↓                             Dexlabs-Lucknow
 Form validation                    POST /api/registrations            
      ↓                                   ↓                             Collection:
 API call via fetch                 Validate data                      AI IQ Test Student
      ↓                                   ↓                             Registrations
 Success/Error UI                   Save to MongoDB                   
                                          ↓
                                    Return response
```

## Deployment URLs

### Frontend
- **Development**: http://localhost:3000
- **Production**: https://dex-test-iq-frontend.vercel.app (to be deployed)

### Backend
- **Development**: http://localhost:8080
- **Production**: https://dex-test-registration-backend.vercel.app

### Database
- **MongoDB Atlas**: Cluster0.zcpvm3t.mongodb.net
- **Database**: Dexlabs-Lucknow
- **Collection**: AI IQ Test Student Registrations

## Configuration

### Frontend Environment Variables
Location: `iqtest-regs-frontend/.env.local`

```env
NEXT_PUBLIC_API_URL=https://dex-test-registration-backend.vercel.app
```

### Backend Environment Variables
Location: `iqtest-regs-backend/.env`

```env
MONGODB_URI=mongodb+srv://dexlabsdb:DEXLABS2026@cluster0.zcpvm3t.mongodb.net/
DATABASE_NAME=Dexlabs-Lucknow
COLLECTION_NAME=AI IQ Test Student Registrations
PORT=8080
FRONTEND_URL=http://localhost:3000
GIN_MODE=debug
```

## Features Implemented

### Frontend
✅ Client-side form with React hooks
✅ Form validation (HTML5 + Required fields)
✅ Loading state during submission
✅ Success/Error message display
✅ Form reset after successful submission
✅ API integration with environment variables

### Backend
✅ RESTful API endpoints
✅ MongoDB integration
✅ CORS configured for Vercel
✅ Input validation
✅ Error handling
✅ Statistics endpoint

## API Integration

### Form Submission Flow

1. User fills the registration form
2. Frontend validates required fields
3. On submit, sends POST request:
   ```javascript
   POST https://dex-test-registration-backend.vercel.app/api/registrations
   Content-Type: application/json
   
   {
     "studentName": "Aarav Sharma",
     "class": "10",
     "schoolName": "Delhi Public School",
     "age": 15,
     "city": "Lucknow",
     "parentName": "Rajesh Sharma",
     "mobile": "9876543210",
     "whatsapp": "9876543210",
     "email": "aarav.sharma@example.com",
     "programInterest": "Academics",
     "testMode": "Online Test",
     "counsellingSlot": "Morning"
   }
   ```

4. Backend validates and saves to MongoDB
5. Backend returns response:
   ```json
   {
     "success": true,
     "message": "Registration created successfully",
     "data": {
       "id": "6a4cf0bbf118f39199cf655a",
       ...
     }
   }
   ```

6. Frontend displays success message and resets form

## Testing

### Local Testing
1. Start backend:
   ```bash
   cd iqtest-regs-backend
   go run main.go
   ```

2. Start frontend:
   ```bash
   cd iqtest-regs-frontend
   npm run dev
   ```

3. Open http://localhost:3000
4. Fill and submit the form
5. Check console for API calls
6. Verify data in MongoDB Atlas

### Production Testing
1. Deploy backend to Vercel
2. Deploy frontend to Vercel
3. Update frontend `.env` with production backend URL
4. Test form submission
5. Verify data in MongoDB Atlas

## CORS Configuration

The backend is configured to accept requests from:
- http://localhost:3000 (development)
- https://*.vercel.app (all Vercel deployments)
- Custom frontend URL from FRONTEND_URL env variable

## Error Handling

### Frontend
- Network errors: "Network error. Please check your connection and try again."
- API errors: Displays error message from backend
- Success: "Registration submitted successfully! We will contact you soon."

### Backend
- Validation errors: 400 Bad Request with details
- Database errors: 500 Internal Server Error
- Not found: 404 Not Found

## Security Notes

⚠️ **Important**: The `.env` files contain sensitive credentials:
- MongoDB connection string with password
- These should NOT be committed to public repositories
- Use environment variables in deployment platforms
- The `.env` file is in `.gitignore`

## Next Steps

1. Deploy backend to Vercel
2. Deploy frontend to Vercel
3. Update frontend env with production backend URL
4. Test end-to-end flow
5. Optional: Add authentication for admin endpoints
6. Optional: Add email notifications
7. Optional: Add admin dashboard to view registrations

## Support

For issues or questions:
- Check API health: https://dex-test-registration-backend.vercel.app/health
- View API docs: iqtest-regs-backend/API_DOCUMENTATION.md
- MongoDB logs: Check MongoDB Atlas console
