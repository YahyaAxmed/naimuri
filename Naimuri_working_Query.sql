use naimuri;
select * from user;
update user set first_name = "Junu" , email = "Junu.user@abc.com" , password = "123456" where id = 6;
ALTER TABLE user MOdiFY COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
UPDATE user
SET updated_at = CURRENT_TIMESTAMP()
WHERE id = 9;
commit;