package service

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"penguin/helper"
	"penguin/orm/dal"
	"penguin/orm/model"
)

type StoryItem struct {
	Id      string `json:"id"`
	Name    string `json:"name"`
	Desc    string `json:"desc"`
	Confirm string `json:"confirm"`
}

type StoryResponse struct {
	Story map[string][]*StoryItem `json:"story"`
}

func AllStory(c *gin.Context) {
	story, _ := dal.Story.Find()
	resp := StoryResponse{Story: make(map[string][]*StoryItem, 0)}

	var ids []string
	for _, st := range story {
		ids = append(ids, st.Sid)
	}
	ids = helper.RemoveDuplicateInt64(ids)
	items, err := dal.Item.Where(dal.Item.ID.In(ids...)).Find()
	if err != nil {
		panic(err)
	}
	m := make(map[string]*model.Item)
	for _, item := range items {
		m[item.ID] = item
	}
	for _, item := range story {
		if items, ok := m[item.Sid]; ok {
			resp.Story[item.ID] = append(resp.Story[item.ID], &StoryItem{
				Id:      items.ID,
				Name:    items.Name,
				Desc:    items.Desc,
				Confirm: items.Confirm,
			})
		}
	}
	c.JSON(http.StatusOK, gin.H{
		"data": &resp,
	})
}
