CREATE DATABASE IF NOT EXISTS MyCollect;
USE MyCollect;

CREATE TABLE IF NOT EXISTS user (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100),
    password VARCHAR(255),
    user_type VARCHAR(50),
    salt VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS collection (
    collection_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    collection_name VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);

CREATE TABLE IF NOT EXISTS item (
    item_id INT PRIMARY KEY AUTO_INCREMENT,
    collection_id INT,
    ean VARCHAR(13),
    item_name TEXT,
    item_desc TEXT,
    item_image TEXT,
    FOREIGN KEY (collection_id) REFERENCES collection(collection_id)
);

INSERT INTO user (username, password, user_type, salt)
VALUES
('admin','adminpassword','ADMIN','');

INSERT INTO collection(user_id,collection_name)
VALUES
(1,'Figure Collection');

INSERT INTO item (collection_id,ean,item_name,item_desc,item_image)
VALUES
(1,'4573102621252','Tamashii Nations Monkey D. Luffy','Find ONE PIECE - MONKEY.D.LUFFY by alliance entertainment.', 'https://mediacdn.aent-m.com/prod-img/500/76/4066076-3314835.jpg'),
(1,'4983164156188','Ichiban Kuji 1st Lottery One Piece Mug','','');