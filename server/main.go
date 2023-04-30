package main

import (
	"github.com/gin-gonic/gin"
	"penguin/service"
	"penguin/sql"
)

func main() {
	r := gin.Default()
	go sql.MysqlInit()
	r.POST("/", service.AllStory)
	r.Run(":8081")
}
