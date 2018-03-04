# Laxness API
This is an API created for the Laxness group project. The project (https://github.com/mimiqkz/Laxness)is in the partnership with Gljufrasteinn.

## Author
[Nu Phan Quynh Do](https://github.com/mimiqkz/) <br>
[Alexander Freyr Sveinsson](https://github.com/zurgur/) <br>
[Ólafur Sverrir Kjartansson] (https://github.com/osk) <br>

## Example

```bash
> curl http://localhost:3000/
[]

> curl -H "Content-Type: application/json" -d '{invalid json}' http://localhost:3000/
{"error":"Invalid json"}

> curl -H "Content-Type: application/json" -d '{"book": "", "quote": null, "year": "x"}' http://localhost:3000/
[{"field":"book","message":"Title must be a string of length 1 to 255 characters"},{"field":"quote","message":"Text must be a string"},{"field":"year","message":"Datetime must be ISO 8601 date"}]

> curl -H "Content-Type: application/json" -d '{"book": "Halló", "text": "", "year": "2018-02-18"}' http://localhost:3000/
{"id":1,"year":"2018-02-18T00:00:00.000Z","book":"Halló","quote":""}

> curl -H "Content-Type: application/json" -d '{"book": "foo", "quote": "bar", "year": "2018-02-18"}' http://localhost:3000/
{"id":2,"year":"2018-02-18T00:00:00.000Z","book":"foo","quote":"bar"}

> curl http://localhost:3000/1
{"id":1,"book":"Halló","quote":"","year":"2018-02-18T00:00:00.000Z"}

> curl -X PUT -H "Content-Type: application/json" -d '{"book": "Bless", "quote": "", "year": "2018-02-18"}' http://localhost:3000/1
{"id":1,"book":"Bless","quote":"","year":"2018-02-18T00:00:00.000Z"}

> curl -X PUT -H "Content-Type: application/json" -d '{"book": "Bless", "quote": "",  "year": "2018-02-18"}' http://localhost:3000/10
{"error":"Note not found"}

> curl http://localhost:3000/
[{"id":1,"book":"Bless","quote":"","year":"2018-02-18T00:00:00.000Z"},{"id":2,"book":"foo","quote":"bar","year":"2018-02-18T00:00:00.000Z"}]

> curl -X DELETE http://localhost:3000/1
# no response

> curl http://localhost:3000/
[{"id":2,"book":"foo","quote":"bar","year":"2018-02-18T00:00:00.000Z"}]
```
