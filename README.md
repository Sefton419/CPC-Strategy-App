#CPC Strategy Challenge

###Consider the following scenario:
You're part of a team that has built a web application to collect data for clients' products on popular search engines. The data includes daily keyword rankings for individual products on a popular search engine. 

Every client wants to be at position 1. Your team looks good when the client sees that rankings are improving (towards position 1). Conversely, declining rankings are a cause for concern (away from position 1). 

Luckily for you, there are dedicated analysts on your team to help investigate why something might be declining and take action to address it. 

###Prompt:

Using the example data provided below, create an interface for both your team and the client to view and interact with the data in a meaningful way.
 
Here's an example of your team's raw data in JSON format:
http://frontendtest.cpcstrategy.com 
Deliverable:

Submit your demo front-end application at the link below. Please include an explanation of the design and functionality decisions that you made. 

- - - - - - - - 

#Goals

- Design app so users want to be in position #1
- Increasing rankings are desirable 
- Decreasing rankings are not desirable

##Data Analysis

The JSON data provided contains several clients with the following properties:

```
client_id: NUMBER 
client_name: STRING  
```

Each client contains a products attribute with an array of one-to-several products, each containing the following properties:

```
product_id: NUMBER
product_name: STRING
product_asin: STRING
product_image_url: STRING
```

Each product contains a keywords attribute with an array of keywords, each containing the following properties:

```
keyword_id: NUMBER
keyword_name: STRING
keyword_country: STRING
```

Each keyword contains a ranks attribute with an array of rankings, each containing the following properties:

```
rank_id: NUMBER
rank_position: NUMBER
rank_page: NUMBER
rank_date: STRING
```

##App organization based on data

Based on the data provided, we can have three general views: One for specific clients, one for specific products, one for specific keywords. Organizing data in these three categories follows the given structure of the provided data, and will allow the user to interact with the data in the most meaningful way.


##MVP

Basic MVP will have the following design:

![MVP Mockup](/assets/mvp-mockup.png)

##Component Heirarchy with key *JSX elements*

```
appContainer.js
	|
	| --- header.js
	|		|
	|		|--- *title*
	|		|
	|		|--- *search*
	|
	|
	| --- sidebar.js
	|		|
	|		|--- buttonsContainer.js
	|       		|
	|               |--- *companiesButton*
	|               |
	|               |--- *productsButton*
	|               |
	|               |--- *keywordsButton*
	|
	|
	| --- listContainer.js
	|		|
	|		|--- list.js
	|				|
	|				|--- companyListItem.js
	|				|
	|				|--- productListItem.js
	|				|
	|				|--- keywordListItem.js
	|               |
	|               |--- loading.js
							
```




