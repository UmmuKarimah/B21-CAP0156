## API Endpoint
**User**
|Endpoint|Method|Body|
|-------|:----:|:---:|
|`/user`|`POST`|`name`, `email`|
|`/user/{email}`|`GET`|`None`|
|`/user/{id}`|`PUT`,`DELETE`|`None`|

**Thread**
|Endpoint|Method|Body|
|-------|:----:|:---:|
|`/thread`|`POST`,`GET`|`content`|
|`/thread/{id}`|`DELETE`|`None`|

**Comment**
|Endpoint|Method|Body|
|-------|:----:|:---:|
|`/comment`|`POST`|`threadId`, `comment`|
|`/comment/{threadId}`|`GET`|`None`|
|`/comment/{id}`|`DELETE`|`None`|

**Report**
|Endpoint|Method|Body|
|-------|:----:|:---:|
|`/report`|`POST`,`GET`|`email`, `name`, `age`, `gender`, `location`, `content`|
|`/report/{email}`|`GET`|`None`|


