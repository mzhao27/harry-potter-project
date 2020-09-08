package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.GET("/healthcheck", func(c *gin.Context) {
		c.String(http.StatusOK, "Service is running.")
	})

	router.Run(":8080")
}
