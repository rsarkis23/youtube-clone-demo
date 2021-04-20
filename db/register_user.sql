INSERT INTO youtube_users (first_name, last_name, email, password, avatar, cover, description, is_admin )
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
returning user_id, first_name, last_name, email, is_admin;