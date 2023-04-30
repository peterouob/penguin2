package sql

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func MysqlInit() {
	dsn := "root:peter63674782@tcp(127.0.0.1:3306)/penguin?charset=utf8mb4&parseTime=True&loc=Local"
	gorm.Open(mysql.Open(dsn))
}
