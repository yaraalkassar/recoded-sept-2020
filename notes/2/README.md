# Day 2

## Resources

- [EJS](https://ejs.co/)
- [Require.JS](https://requirejs.org/)
- [jQuery](https://jquery.com/)
- [HTTP Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

## Installing Nodemon

```
npm install -g nodemon
```

## Bulletin Board

### Part 1

Beginning from day 1's `bulletin_board`, we talked about why the `index` router doesn't seem to be working for handling `/`, how to change that if we wanted, and we create our first EJS template by migrating the contents of `index.html` to `index.ejs`. We discussed how rendering a template always requires the template plus the data - which can sometimes be called a view model.

Then we discussed how to extract headers and footers and created `header.ejs` and `footer.ejs` and passed a `title` to the header, which we include in the rendered HTML.

Then we discussed the three "posts" pages; they view, create, and list posts, and we created three endpoints which serve these pages but using EJS templates:

- `GET /posts/recent`
- `GET /posts/trending`
- `GET /posts/create`
- `GET /posts/view`

We took advantage of routers and also discussed the dangers of relative paths in templates.

We created `nav_bar.ejs` and talked about view models when we extracted the nav bar from the top of the `posts/` pages.

Finally, we addressed the header's highlighted item.

### Part 2

Turning our attention to some of the dynamic content on the pages;

- The post listings (recent & trending)
- The view post page

How will we deal with the fake data on these pages?

- Mock data API
- Looping over Arrays in EJS

### Part 3

We talk about the other types of dynamic content... sign in / sign up, upvotes, create post... how will we deal with these?

We talk about web APIs and that `mocks.js` file the designer gave us.  What logic belongs on the server and what's client-side?

How can we use jQuery to talk to the server without GETs? Why not postbacks or classic form posts?

Let's create some endpoints!

Now that we've created our endpoints, how do we test them?

`curl` is one way. There are many. `Paw` is very nice on macOS. 

```
curl --header "Content-Type: application/json" \
      --request POST \
      --data '{"upvoted":"true"}' \
      --verbose \
      http://localhost:3000/posts/upvotes
```

In `curl` console:

```
Note: Unnecessary use of -X or --request, POST is already inferred.
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 3000 (#0)
> POST /posts/upvotes HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.64.1
> Accept: */*
> Content-Type: application/json
> Content-Length: 18
>
* upload completely sent off: 18 out of 18 bytes
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Date: Fri, 18 Sep 2020 02:40:33 GMT
< Connection: keep-alive
< Content-Length: 0
<
* Connection #0 to host localhost left intact
* Closing connection 0
```

In `npm start` console:

```
{ upvoted: 'true' }
POST /posts/upvotes 200 2.396 ms - -
```

Lets migrate our frontend:

```
POST /posts/ 200 22.519 ms - 121
[Object: null prototype] {
  title: 'Hello World',
  message: 'Test test test test test'
}
{ success: true, redirect_uri: '/posts/view_post', error_message: '' }
```

Congratulations on a big day! Tomorrow we will discuss how to implement these on the server - both the user endpoints and the posts.

## Code Snippets

### jQuery AJAX Calls

```
$.ajax({
  type: "POST",
  url: "/path/",
  data: JSON.stringify(obj),
  contentType: "application/json; charset=utf-8",
  dataType: "json",
  success: function(result){
    
  },
  error: function(error) {
    
  }
});
```
