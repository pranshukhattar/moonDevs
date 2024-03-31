# Task-Fragmentation
AN assignment to test the fragmentation ability of Developers

My Pick - Fragmentation of Functinality / UI

## My Reasons for Fragmentating it like that

Write down your reasons here.

> Total Time Taken - 1 hr 50 min   

### Assumptions : 
 * The states and custom hooks are used at multiple places inside each component and everything is reusable including API call, enums etc.
 * Components given are already generic and capable of handling multiple edgecases.


### Updates : 

 - Renamed the page.tsx to BurnPage.tsx
 
 - In this have Started with creating a context provider just to handle all the states and stop prop drilling various variables and functions such as fetching data.

 - Context Provider alos helps in mantaining state wihtin multiple compoenents and pages.

 - Created a separate enum folder which can be used to set store all the enums (currently just transferred the existing enums in one file.)

 - Created separate custom hooks folder to store all the custom hooks.

 - Created a apiClient.js which is responsible fo calling the api.

 - Split UI into multiple small ui components such that for mainPage i.e. page.tsx only needs to import those components and nothing else.

### Remaining Changes : 
(other Modifications that can be done but was unable to due to lack of time)
    
 - A separate file for each page enums rather than making it common.

- can create a contoller layer where all the response data can be refactored based on page requirements, which further helps us in reducing logical part with ui.

 - can create utils folder for common functions which is neede d example : numberWithCommas() - a function refactoring the api response.


