\c outfit_app

INSERT INTO users (name) VALUES
('Jason'),
('Aileen'),
('Joe');

INSERT INTO types (name)
VALUES
('top'),
('romper'),
('pants'),
('shorts'),
('scarf'),
('jumpers');

INSERT INTO clothing (url, name, description, type_id, user_id) VALUES
( 'http://res.cloudinary.com/ga-mao/image/upload/v1505864889/top-1_uvkwlt.jpg', 'texture top', 'color antique cream',3, 1),
( 'http://res.cloudinary.com/ga-mao/image/upload/v1505864889/top-2_f9sqwb.jpg', 'frilly top', 'my favorite top', 1, 2),
( 'http://res.cloudinary.com/ga-mao/image/upload/v1505864889/top-3_jk0tzw.jpg', 'shirt', 'cream color shirt', 2, 4),
( 'http://res.cloudinary.com/ga-mao/image/upload/v1505864890/top-4_gyjyzy.jpg','skirt','color white', 1, 3),
( 'http://res.cloudinary.com/ga-mao/image/upload/v1505864889/top-5_atiwtz.jpg','lace shirt','red', 1, 4),
( 'http://res.cloudinary.com/ga-mao/image/upload/v1505864889/top-6_ht76zw.jpg','yellow top','my favorite one',1, 5),
( 'http://res.cloudinary.com/ga-mao/image/upload/v1505864890/bottom-1_cv0ejb.jpg', 'pajamas', 'my favorite pajamas', 4, 3),
( 'http://res.cloudinary.com/ga-mao/image/upload/v1505864889/bottom-2_lrthc0.jpg', 'canvas Dover pants', 'color camel canvas', 2, 3),
( 'http://res.cloudinary.com/ga-mao/image/upload/v1505864889/bottom-3_fucfio.jpg', 'pajamas', 'stripe black', 1, 1),
( 'http://res.cloudinary.com/ga-mao/image/upload/v1505864889/bottom-4_amlczs.jpg', 'pajamas', 'white stripe', 2, 3),
( 'http://res.cloudinary.com/ga-mao/image/upload/v1505864890/bottom-5_nk4fcs.jpg', 'jeans', 'blue jeans', 3, 2),
( 'http://res.cloudinary.com/ga-mao/image/upload/v1505864890/bottom-6_rcsfer.jpg', 'jeans', 'navy blue jeans', 2, 4);

INSERT INTO outfits (user_id)
VALUES
(1),
(2),
(3),
(4);

INSERT INTO outfit_items (outfit_id, clothing_id)
VALUES
(1, 1),
(1, 4),
(2, 2),
(2, 4),
(3, 3);


