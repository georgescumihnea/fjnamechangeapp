# Frontend For the freejack name change app

This project was made for educational purposes only. While playing an online game that was relaunched, but still in beta called Freejack I decided to see how their networking logic was functioning. While sniffing packages I discovered that they are using a 3rd party API for their online logic and using their documentation I found out that they left some things unprotected and you could exploit it with any tool similar with postman to send requests to that api to change your username.

To be able to do that I also replicated their login system so you could pretty much login and request any data that their db might hold.

I announced their team about the exploits.

Using the same api you can exploit their verification system which was poorly coded and see all the "patreon keys" to access the game while in beta. (which pretty much means bypassing their payment system right now to play their game)
