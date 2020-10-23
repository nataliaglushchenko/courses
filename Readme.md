This is a React application with redux for state management and redux-saga for side effects menagement. Webpack is used for bundling. The project is designed using Bootstrap and Reactstrap components. Also sass is set up and can be used in future.

To run the application use the following command:

### npm run dev

The app will be running on the localhost:3000. 

### My notes and what I would improve

1. There is no functionality of defining the user's geolocation. For now the choice of currency and amount is hardcoded. I would fetch the user geolocation data prior to the displaying of course details but only once within the session.

2. Also in details section there is no separation between course's starting dates in my project. For adding that functionality I would compare a start date of a selected course with dates provided by details. After they could be easily separated. Also I would compare provided dates with the current date and display 'no available courses' if all of them have already passed.

#### ...for improvement

3. I would add models for courses descriptions and courses details data in which fetched data is normalized. It would help with naming convention (for example startDates instead of start_dates).

4. I would add tests for components and logic (including sagas).
