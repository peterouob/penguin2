// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

const TableNameStory = "story"

// Story mapped from table <story>
type Story struct {
	ID  string `gorm:"column:id;primaryKey" json:"id"`
	Sid string `gorm:"column:sid" json:"sid"`
}

// TableName Story's table name
func (*Story) TableName() string {
	return TableNameStory
}
