![Make Me an Outfit List View](/assets/list.png "Make Me an Outfit List View")

# Make Me an Outfit ###

Make Me an Outfit is a website that makes mornings a little bit easier. Users can take photos of the clothes in their closet, and the app will generate an outfit for them. They can save outfits they've generated in case they want to revisit an outfit, edit the outfits that they've made, and delete outfits if they're tired of them or they no longer have that clothing. 

[Go to Make Me An Outfit](#)

## Technologies Used ###

- CSS3  
- Vanilla Javascript  
- node.js  
- express.js  
- React Native  
- Cloudinary API  

## About the Build ###  
**Express.js/Node.js**  
Aileen  

#### Wins: ###  
-5 table join is working!  
-Understand PSQL more than ever  

#### Losses: ###  
-Cannot post new outfits to database due to table setup  
-Spent a lot of time working on database issues, which cut into time helping with React  

**React Native**  
Mao and Aileen  

#### Wins: ###  
-Good learning experience in connecting frontend to backend  
-Having Aileen in my team to bail us out  

#### Losses: ###  
- Still need practice and understanding in passing props and components with React  

**User Authentication**  
MD  

#### Wins: ###  
- Login is working where users can store their username and password to the database. 

#### Losses: ###  
- working with real authentication using passport, token and firebase.  
- Firebase is working but does not match our criteria.  

**API**  
Cloudinary was very easy to use. There were lots of tutorials online so we felt comfortable immediately implementing it in our app. We decided to go with Cloudinary as our API so the user would be able to store their own images of clothing, which is integral to our app. 

### Example Code ###

Five Table Join to find one item:
```
Outfit.findById = (id) => {
  return db.any(`
    SELECT
      oi.*,
      c.url,
      c.type_id,
      c.name,
      c.description
    FROM outfits AS o
    JOIN outfit_items oi
      ON (o.id = oi.outfit_id)
    JOIN clothing c
      ON (oi.clothing_id = c.id)
    JOIN types t
      ON (c.type_id = t.id)
    WHERE o.id = $1
    `, [id]);
};
```
## Build Strategy ###

### Express/Node ###
This app was challenging because it took a few days get the database set up. We went through 3 setups. The first setup involved four tables, but a lot of the material was repetitive and we had a hard time navigating how to post to two tables simultaneously that weren't connected. 

### Initital Database Setup ###

![Make Me an Outfit Initial Database](/assets-proposal/database-tables.jpg "Make Me an Outfit Initial Database")

We finally landed on a five table setup with the help of our instructor so every table was linked and any changes that were made would cascade through the rest of the table. 

![Make Me an Outfit Final Database](/assets/final-table-setup.jpg "Make Me an Outfit Final Database")

### React Native ###
Once we had the database up and running, we were able to start moving quickly on the React components. As we moved through the project, we kept discovering more efficient ways to work on the React components by revising our structure and moving components around. 

We initially had some issues thinking about having to pass props, but we were able to ask for help from the TAs to help us pass props around. We felt more confident towards the end of our project with using Axios to get images from Cloudinary and pass the data through the components to render onthe appropriate pages. 

### User Authentication ###
We had some issues with grabbing the data that the user input and storing it in the database. We initially explored many different options with how to store the data including using Firebase, but realize Firebase would not help us, as there is no way to connect their database with our already established database. 

## Wireframes ###

### HOME WIREFRAME ####
![Make Me An Outfit Home Wireframe](/assets-proposal/Home-Outfit.png "Make Me An Outfit Home")

### LIST WIREFRAME ###
![Make Me An Outfit List Wireframe](/assets-proposal/List.png "Make Me An Outfit List")

### EDIT WIREFRAME ###
![Make Me An Outfit Edit Wireframe](/assets-proposal/Edit2.png "Make Me An Outfit Edit")

### PRIORITY MATRIX ###
![Make Me An Outfit Priority Matrix](/assets-proposal/priority-matrix.jpg "Make Me An Outfit Priority Matrix")





