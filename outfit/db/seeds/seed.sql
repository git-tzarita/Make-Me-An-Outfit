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
( 'http://res.cloudinary.com/ga-mao/image/upload/v1505864889/top-1_uvkwlt.jpg', 'jeans', 'my jeans', 3, 1),
( 'http://res.cloudinary.com/ga-mao/image/upload/v1505864889/top-2_f9sqwb.jpg', 'frilly top', 'my favorite shirt', 1, 2),
( 'http://res.cloudinary.com/ga-mao/image/upload/v1505864890/bottom-1_cv0ejb.jpg', 'jorts', 'my jean shorts', 4, 3),
( 'http://res.cloudinary.com/ga-mao/image/upload/v1505864889/bottom-3_fucfio.jpg', 'polo', 'my polo', 1, 1),
( 'http:://res.cloudinary.com/ga-mao/image/upload/v1505864890/bottom-5_nk4fcs.jpg', 'jeans', 'black jeans', 3, 2);

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


