add sfcookies
add reducer chuck to component
add button when click event is pressed the jokes should be displayed

being able to mark jokes as favorite

add favorites route
add sfcookies so the list we be saved on localstorage
bring them to new favorit list

## assignment one

We want to have an Application where we can fetch 10 Random Chuck Norris jokes. These jokes can be
fetch from the following API http://api.icndb.com/jokes/random/10.
When these jokes are fetched via a button they need to be displayed in a list. In this list we can mark
certain jokes as favourite. The favourite jokes will appear in a favourites list with a max of 10 (unique) items.
There should be an option to remove jokes from the favourite list as well.
On refresh the favourites lists should be maintained.
We can also turn on/off a timer via a button (every 5 seconds) who will add one random joke to the
favourites list http://api.icndb.com/jokes/random/1 until the list has 10 items.

##assignment two
Create a login popup that will log you in for the current session. And only appear when the user hasn't
logged in yet for the current session.
The login form should consist of a username and password which must comply to the following password
security requirements:
Passwords must include one increasing straight of at least three letters, like abc , cde , fgh ,
and so on, up to xyz . They cannot skip letters; acd doesn't count.
Passwords may not contain the letters i, O, or l, as these letters can be mistaken for other characters
and are therefore confusing.
Passwords must contain at least two non-overlapping pairs of letters, like aa, bb, or cc.
Passwords cannot be longer than 32 characters.
