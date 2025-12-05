# Mochi template app
# Copyright Alistair Cunningham 2024-2025

def database_create():
	mochi.db.query("create table template ( a text not null primary key, b test not null )")

def action_list(a):
	return {
		"data": mochi.db.query("select * from templates order by a")
	}
