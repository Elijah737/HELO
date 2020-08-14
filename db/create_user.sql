INSERT INTO users (username, pic, password)
VALUES
($1, $2, $3)
RETURNING *;