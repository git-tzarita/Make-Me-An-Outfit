\c outfit_app

INSERT INTO users (name)
VALUES ('Jason'), ('Aileen'), ('Joe');

INSERT INTO types (name)
VALUES ('top'),
('romper'),
('pants'),
('shorts'),
('scarf'),
('jumpers');

INSERT INTO clothing (url, name, description, type_id, user_id)
VALUES
( 'http://e', 'jeans', 'my jeans', 3, 1),
( 'http://e', 'frilly top', 'my favorite shirt', 1, 2),
( 'http://e', 'jorts', 'my jean shorts', 4, 3),
( 'http://e', 'polo', 'my polo', 1, 1),
( 'http://e', 'jeans', 'black jeans', 3, 2);

INSERT INTO outfits (user_id)
VALUES
(1),
(2),
(3);

INSERT INTO outfit_items (outfit_id, clothing_id)
VALUES
(1, 1),
(1, 4),
(2, 2),
(2, 5),
(3, 3);


