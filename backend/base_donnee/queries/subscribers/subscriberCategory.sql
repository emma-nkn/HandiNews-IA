INSERT INTO subscriber_categories (subscriber_id, category_id)
VALUES ($1, $2)
ON CONFLICT DO NOTHING;