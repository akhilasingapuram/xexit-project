## curl cmd for register as employee

curl -X POST http://localhost:5999/api/auth/register \
 -H "Content-Type: application/json" \
 -d '{
"username": "testuser",
"password": "testpass123"
}'

## curl cmd for login as employee

curl -X POST http://localhost:5999/api/auth/login \
 -H "Content-Type: application/json" \
 -d '{
"username": "testuser",
"password": "testpass123"
}'

## curl cmd for resignation

curl -X POST http://localhost:5999/api/user/resign \
 -H "Content-Type: application/json" \
 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ODFmMWQwMzJmYjQ1NTJjOTIzOWVhNSIsInJvbGUiOiJlbXBsb3llZSIsImlhdCI6MTc1MzM0NjUzOH0.EBOYJ1zbnW5poeitPhweJVjHFX8q6MZE_5ritZF8K3c" \
 -d '{
"lwd": "2025-08-15"
}'

## curl cmd for responses

curl -X POST http://localhost:5999/api/user/responses \
 -H "Content-Type: application/json" \
 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ODFmMWQwMzJmYjQ1NTJjOTIzOWVhNSIsInJvbGUiOiJlbXBsb3llZSIsImlhdCI6MTc1MzM0NjUzOH0.EBOYJ1zbnW5poeitPhweJVjHFX8q6MZE_5ritZF8K3c" \
 -d '{
"responses": [
{
"questionText": "Why are you leaving the company?",
"response": "For better career opportunities."
},
{
"questionText": "Any suggestions for improvement?",
"response": "Provide more training programs."
}
]
}'

## curl cmd to register as admin

curl -X POST http://localhost:5999/api/auth/register \
 -H "Content-Type: application/json" \
 -d '{
"username": "admin",
"password": "admin",
"role": "admin"
}'

## curl cmd to get all resignations as admin

curl -X GET http://localhost:5999/api/admin/resignations \
 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ODBmZTgxNzhmMmI3NDUxYjcxZWIwNSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1MzI4NDI2NX0.18Ew_vHP8Rg6xAR78Uiukidw-MGB69Bg9gfWR3XReg8" \

## curl cmd to get all exit responses as admin

curl -X GET http://localhost:5999/api/admin/exit_responses \
 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ODBmZTgxNzhmMmI3NDUxYjcxZWIwNSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1MzI4NDI2NX0.18Ew_vHP8Rg6xAR78Uiukidw-MGB69Bg9gfWR3XReg8"

## curl cmd to conclude resignations as admin

curl -X PUT http://localhost:5999/api/admin/conclude_resignation \
 -H "Content-Type: application/json" \
 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ODBmZTgxNzhmMmI3NDUxYjcxZWIwNSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1MzI4NDI2NX0.18Ew_vHP8Rg6xAR78Uiukidw-MGB69Bg9gfWR3XReg8" \
 -d '{
"resignationId": "6880fb69e1cc018104471963",
"approved": true,
"lwd": "2025-08-16"
}'
