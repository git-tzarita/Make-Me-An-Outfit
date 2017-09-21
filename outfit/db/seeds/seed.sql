\c makeoutfit_db

INSERT INTO tops(top_url) VALUES
(
'http://res.cloudinary.com/ga-mao/image/upload/v1505864889/top-1_uvkwlt.jpg'
),
(
'http://res.cloudinary.com/ga-mao/image/upload/v1505864889/top-2_f9sqwb.jpg'
),
(
'http://res.cloudinary.com/ga-mao/image/upload/v1505864889/top-3_jk0tzw.jpg'
),

(
'http:://res.cloudinary.com/ga-mao/image/upload/v1505864890/top-4_gyjyzy.jpg'
),
(
'http://res.cloudinary.com/ga-mao/image/upload/v1505864889/top-5_atiwtz.jpg'
),
(
'http://res.cloudinary.com/ga-mao/image/upload/v1505864889/top-6_ht76zw.jpg'
);

INSERT INTO bottoms(bottom_url) VALUES
(
'http://res.cloudinary.com/ga-mao/image/upload/v1505864890/bottom-1_cv0ejb.jpg'
),
(
'http://res.cloudinary.com/ga-mao/image/upload/v1505864889/bottom-2_lrthc0.jpg'
),

(
'http://res.cloudinary.com/ga-mao/image/upload/v1505864889/bottom-3_fucfio.jpg'
),
(
'http://res.cloudinary.com/ga-mao/image/upload/v1505864889/bottom-4_amlczs.jpg'
),
(
'http:://res.cloudinary.com/ga-mao/image/upload/v1505864890/bottom-5_nk4fcs.jpg'
),
(
'http://res.cloudinary.com/ga-mao/image/upload/v1505864890/bottom-6_rcsfer.jpg'
);

INSERT INTO outfits(top_id,bottoms_id) VALUES
(
2,
4
);

INSERT INTO users(name, password)VALUES
('name', 'hahahahahahaha');

INSERT INTO outfits(topsIDs, bottomsIDs, user_id)VALUES
(1 , 2, 1);
