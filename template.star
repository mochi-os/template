# Mochi template app
# Copyright Alistair Cunningham 2024-2025

def database_create():
	mochi.db.execute("create table templates ( a text not null primary key, b text not null )")

def action_list(a):
	return {
		"data": mochi.db.rows("select * from templates order by a")
	}
