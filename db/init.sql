CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username TEXT,
    pic TEXT,
    password VARCHAR(20),
);

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    body TEXT,
    img TEXT,
    user_id INT REFERENCES users(user_id)
);