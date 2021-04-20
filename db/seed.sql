CREATE TABLE youtube_users(
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(250),
    last_name VARCHAR(250),
    email VARCHAR(250),
    password_hash TEXT,
    avatar TEXT DEFAULT("https://res.cloudinary.com/tylerdurden/image/upload/v1602657481/random/pngfind.com-default-image-png-6764065_krremh.png"),
    cover TEXT DEFAULT("https://res.cloudinary.com/tylerdurden/image/upload/v1617334073/random/Rectangle_2_mbyujf.png"),
    description VARCHAR(1000) DEFAULT("There is no description"),
    is_admin BOOLEAN DEFAULT FALSE
);