INSERT INTO subscribers 
(email, first_name, city, frequency)
VALUES ($1, $2, $3, $4)
RETURNING id;