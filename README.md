# expressjs-api-gateway
API Gateway with Express JS and 2 Services Project Example

Learn to Create API Gateway with Express JS

api gateway in port 3000 maping all microservices endporint (product :3001 & users : 3002)

localhost:3000/users -> axios to -> localhost:3002/users
localhost:3000/product -> axios to -> localhost:3001/product

What to do Next ?
- add auth for Gateway (JWT)
- block Access for backend microservices in port 3001, 3002 from outside

