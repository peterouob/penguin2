package main

import (
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gen"
	"gorm.io/gorm"
)

func main() {
	dsn := "root:peter63674782@tcp(127.0.0.1:3306)/penguin?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn))
	if err != nil {
		panic(fmt.Errorf("%s", "connect to database have error"))
	}
	g := gen.NewGenerator(gen.Config{
		OutPath:      "/Users/peter/Desktop/企鵝/server/orm/dal",
		ModelPkgPath: "/Users/peter/Desktop/企鵝/server/orm/model",
		Mode:         gen.WithDefaultQuery | gen.WithoutContext,
	})
	g.UseDB(db)
	g.ApplyBasic(g.GenerateAllTable()...)
	g.Execute()
}
